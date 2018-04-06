const twilio = require('twilio');

const accountSid = 'AC3a0340e9af23933321304791a8f59b35';

const authToken = '3f5452820d98477c84262906a4596619';

module.exports = new twilio.Twilio(accountSid, authToken);
