const accountSid = 'AC352d19d680ef67d5d555b02a5f6d7c60'; 
    const authToken = 'a8ee37c4dc978fe37a3126f671cdb404'; 
    const client = require('twilio')(accountSid, authToken); 
 
    client.messages 
      .create({ 
         body: 'This is to alert you that the pollution level of your vehicle has exceeded the limits, Pls get your vehicle serviced or repaired in the next 48hrs. In case of a repeat , you will be fined.', 
         from: '+19592241085',       
         to: '+919999453352' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();