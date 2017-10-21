const express = require('express');
const User    = require('../models/user');
const Excahnge = require('../models/exchange');
const router  = express.Router();
const { ensureLoggedIn }  = require('connect-ensure-login');


/* GET home page. */
router.get('/exchange', (req, res, next) => {
  res.render('exchanges/add_exchange');
});

// POST










module.exports = router;
