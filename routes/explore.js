const express = require('express');
const User    = require('../models/user');
const Exchange = require('../models/exchange');
const router  = express.Router();



/* GET home page. */
router.get('/explore', (req, res, next) => {

Exchange
    .find({})
    .populate('_exchangeuserid')
    .exec((err, exchange) => {
     res.render('explore', { exchange });
});
});




module.exports = router;
