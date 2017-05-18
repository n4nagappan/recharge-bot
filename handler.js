'use strict';
var recharge = require('./recharge');
var config = require('./config.json');
var qs = require('qs');

module.exports.main = (event, context, callback) => {

  console.log( event.queryStringParameters );
  // const number = event.queryStringParameters.sender.substring(2);

  var body = qs.parse( event.body );
  console.log( body );

  const number = body.sender.substring(2);
  console.log("Recharging for " + number );

  const amount = body.amount;

  // As of now, this service is exclusively for me
  if( config.numbers.indexOf( number ) == -1 ){

    var errResponse = {
      statusCode : 403,
      body : JSON.stringify({
        message : "Your number does not have access to this service yet. For further queries, drop a mail to : n4nagappan [ at ] <google's mailing service> dot com"
      })
    };

    return callback( null, errResponse );
  }

  const response = {
    statusCode : 200,
    body : null
  };

  recharge( number , amount)
    .then( function(body){
      console.log( body );
      response.body = JSON.stringify( { 
        message : "Successfully recharged for " + number
      });
      return callback(null, response);
    })
  .catch( function(err){
    console.log( err );
    response.body = JSON.stringify( { 
      message : "Failed to recharge for " + number
    });
    return callback(null, response);
  });
    

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
