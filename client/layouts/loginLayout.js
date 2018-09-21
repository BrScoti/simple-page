import { Accounts } from 'meteor/accounts-base';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
  });
  
Template.loginButtons.events({
  'click #login-buttons-password'(){

  }
})