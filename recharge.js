var config = require('./config.json');

var request = require('request-promise');

var recharge_config = {
  number : null,
  provider_id : "1",
  amount : "26", // 100 MB 3G/4G DATA for 1 day
  client_id : config.pay2all_client_id
};

var params = {
  url : "https://www.pay2all.in/api/v1/transaction",
  body : null,
  headers : {
    'Content-type' : 'application/json',
    'Authorization' : 'Bearer ' + config.token
  }
};


function recharge( phoneNumber , amount){
  recharge_config.number = phoneNumber;

  // set amount if provided
  if( amount != null ){
    recharge_config.amount = amount;
  }

  params.body = JSON.stringify( recharge_config );
  return request.post(params); // returns promise
}

module.exports = recharge;
