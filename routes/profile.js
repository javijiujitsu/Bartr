const express = require('express');
const User    = require('../models/user');
const router  = express.Router();
const { ensureLoggedIn }  = require('connect-ensure-login');


/* GET home page. */
router.get('/profile', (req, res, next) => {
  res.render('profile');
});

// POST

router.post('/profile/edit', ensureLoggedIn('/login'), (req, res, next) => {
  const updates = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    company: req.body.company,
    profession: req.body.profession,

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
