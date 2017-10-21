const express = require('express');
const User    = require('../models/user');
const router  = express.Router();
const multer        = require('multer');
const { ensureLoggedIn }  = require('connect-ensure-login');
const upload = multer({ dest: './public/uploads/' });

/* GET home page. */
router.get('/profile', function(req, res, next) {
  User.find((err, pictures) => {
    res.render('profile', {pictures})
  })
});

// POST

router.post('/profile/edit', ensureLoggedIn('/login'),upload.single('photo'), (req, res, next) => {

  const updates = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    company: req.body.company,
    profession: req.body.profession,
    pic_path: req.file.filename

  };

  User.findByIdAndUpdate(req.user.id, updates, (err, user) => {

  if (err) {
      return res.render('explore', { user }
    );
    }
    if (!user) {
      return next(new Error('404'));
    }
    return res.redirect(`/explore/`);
  });
});










module.exports = router;
