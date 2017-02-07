 // Open a form by ID and log the responses to each question.
function myFunction() {
 var form = FormApp.getActiveForm();
 var formResponses = form.getResponses();
   var formResponse = formResponses[formResponses.length -1];
   var ItemResponses = formResponse.getItemResponses();
  Logger.log('\nRegion: %s\nEvent: %s\nOrder: %s\nDesired Delivery Date: %s\nContact: %s\nPhone Number: %s\nEmail Address: %s\nShipping Address: %s\n', ItemResponses[0].getResponse(), ItemResponses[1].getResponse(), ItemResponses[2].getResponse(), ItemResponses[3].getResponse(), ItemResponses[4].getResponse(), ItemResponses[5].getResponse(), ItemResponses[6].getResponse(), ItemResponses[7].getResponse());
  Logger.log('\nEdit URL: ' + form.getEditUrl());
  var order = Logger.getLog();
  var userEmail = formResponse.getRespondentEmail();
  
  MailApp.sendEmail({
    to: userEmail,
    subject: 'Order Confirmation',
    body: 'Here is your order confirmation:' + order})
  MailApp.sendEmail({
    to: 'abdullah.siddiki@ymsite.com',
    subject: 'New Order',
    body: 'A New Order has Arrived' + order + '\nView orders at https://docs.google.com/spreadsheets/d/1Nd2XOqYeTDkkPFWClFlScQFpxGz6FzFu8JDAXuE7Mn8/edit?usp=sharing'})
   
 }

 
 
