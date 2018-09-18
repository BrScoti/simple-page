import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './main.html';

Template.main.onCreated(function () {
  this.status = new ReactiveVar('list');
  console.log('ii');
});

Template.main.events({
  'click #add'(event, instance) {
    instance.status.set('add');


  },
  'click #close'(event, instance) {
    instance.status.set('list');

  },
  'click #save'(event, instance) {
    let name, email, quant;
    name= document.getElementById('inputName').value;
    email= document.getElementById('inputEmail').value;
    quant= document.getElementById('inputQuant').value;
     alert(`${name}${email}${quant}`);
  }
});
Template.main.helpers({
  tela(pg) {
    return Template.instance().status.get() === pg;
  }
})


Template.add.onCreated(function addOnCreated() {


});
Template.add.events({
  
})
Template.list.onCreated(function addOnCreated() {

});

