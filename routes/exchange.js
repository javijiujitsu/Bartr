const express = require('express');
const User    = require('../models/user');
const Exchange = require('../models/exchange');
const router  = express.Router();
const moment = require('moment');
const { ensureLoggedIn }  = require('connect-ensure-login');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });


/* GET home page. */
router.get('/exchange', (req, res, next) => {
  res.render('exchanges/add_exchange');
});

// POST

router.post('/exchange/new', ensureLoggedIn('/login'), (req, res, next) => {

  const newExchange = new Exchange ({

    description: req.body.description,
    dateofexchange: req.body.dateofexchange,
    typeofexchange: req.body.typeofexchange,
    condition: req.body.condition,
    _exchangeuserid: req.user._id
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










module.exports = router;
