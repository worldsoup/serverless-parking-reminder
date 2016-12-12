'use strict';

// Twilio Credentials 
var accountSid = 'ACCOUNTID'; 
var authToken = 'AUTHTOKEN';
 
//require the Twilio module 
var client = require('twilio')(accountSid, authToken);

//send your text message 
module.exports.hello = (event, context, callback) => {
  client.messages.create({ 
    to: "YOUR NUMBER", 
    from: "TWILIO NUMBER",
    body: "move your car! street sweeping!", 
}, function(err, message) { 
    console.log(err); 
});
};
