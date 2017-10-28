const Exchange = require('../models/exchange');

// Authorizing the exchanges

function authorizeExchange(req, res, next){
  Exchange.findById(req.params.id, (err, exchange) => {
    // If there's an error, forward it
    if (err)      { return next(err) }
    // If there is no campaign, return a 404
    if (!exchange){ return next(new Error('404')) }
    // If the campaign belongs to the user, next()
    console.log("error",exchange);
    console.log("error 2", req.user);
    if (exchange.belongsTo(req.user)){

      return next()
    } else {
      return res.redirect(`/explore`)
    }
  });
}

function checkOwnership(req, res, next){
  Exchange.findById(req.params.id, (err, exchange) => {
    if (err){ return next(err) }
    if (!exchange){ return next(new Error('404')) }

    if (exchange.belongsTo(req.user)){
      res.locals.exchangeIsCurrentUsers = true;
    } else {
      res.locals.exchangeIsCurrentUsers = false;
    }
    return next()
  });
}











module.exports = {
  authorizeExchange,
  checkOwnership
}
