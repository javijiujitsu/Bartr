const express = require('express');
const User    = require('../models/user');
const Exchange = require('../models/exchange');
const router  = express.Router();
const moment = require('moment');
const { ensureLoggedIn }  = require('connect-ensure-login');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

const {
  authorizeExchange,
  checkOwnership
} = require('../middleware/exchange-authorization');


/* GET home page. */
router.get('/exchange', (req, res, next) => {
  Exchange.find((err, pictures) => {
  res.render('exchanges/add_exchange', {pictures})
})
});

// POST

router.post('/exchange/new', ensureLoggedIn('/login'), upload.single('photo'), (req, res, next) => {

  const newExchange = new Exchange ({

    description: req.body.description,
    dateofexchange: req.body.dateofexchange,
    typeofexchange: req.body.typeofexchange,
    condition: req.body.condition,
    _exchangeuserid: req.user._id,
    pic_path: req.file.filename
    // We're assuming a user is logged in here
    // If they aren't, this will throw an error
});


newExchange.save( (err) => {
  console.log("ERROR HERE : ", err);
  if (err) {
    res.render('exchanges/add_exchange');
  } else {
    res.redirect('/explore');
  }
});
});

// EDIT
router.get('/:id/edit', ensureLoggedIn('/login'), upload.single('photo'),authorizeExchange, checkOwnership,(req, res, next) => {
  Exchange.findById(req.params.id, (err, exchange) => {
    if (err)       { return next(err) }
    if (!exchange) { return next(new Error("404")) }
    return res.render('exchanges/edit_exchange', { exchange })
  });
});

router.post('/exchange/:id', ensureLoggedIn('/login'), upload.single('photo'),authorizeExchange,(req, res, next) => {
  const updateexchange = {

    description: req.body.description,
    dateofexchange: req.body.dateofexchange,
    typeofexchange: req.body.typeofexchange,
    condition: req.body.condition,
    _exchangeuserid: req.user._id,
    pic_path: req.file.filename
  };
console.log("before update");
  Exchange.findByIdAndUpdate(req.params.id, updateexchange, (err, exchange) => {
    if (err) {
      console.log("After the update one");
      return res.render('exchanges/edit_exchange', {
        exchange,
        errors: exchange.errors
      });
    }
    console.log("AFTER AFTER");
    if (!exchange) {
      return next(new Error('404'));
    }
    return res.redirect(`/explore`);
  });
});







module.exports = router;
