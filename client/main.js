import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './main.html';
import { Fornecedores } from '/lib/colections/main.js'
//Main
Template.main.onCreated(function () {
  this.status = new ReactiveVar('list');
});

Template.main.events({
  'click #add'(event, instance) {
    instance.status.set('add');


  },
  'click #close'(event, instance) {
    instance.status.set('list');

  },
  'click #save'(event, instance) {
    let nameInput = document.getElementById('inputName').value;
    let emailInput = document.getElementById('inputEmail').value;
    let quantInput = document.getElementById('inputQuant').value;

    Fornecedores.insert({
      name: nameInput,
      email: emailInput,
      quant: quantInput
    });
    nameInput = '';
    emailInput = '';
    quantInput = '';
    instance.status.set('list');
  }
});
Template.main.helpers({
  tela(pg) {
    return Template.instance().status.get() === pg;
  }

})

//Add
Template.add.onCreated(function addOnCreated() {
  this.fornecedor = new ReactiveVar({});

});
Template.add.helpers({
  fornecedor() {
    return Template.instance().status.get();
  }
});

Template.add.events({

});

//List
Template.list.onCreated(function addOnCreated() {

});
Template.list.helpers({
  fornecedores() {
    return Fornecedores.find().fetch();
  }
})
Template.list.events({
  'click #edit'(event, instance) {
    Blaze.renderWithData(Template['edit'], this, document.body);


  }
})
//Edit
Template.edit.onCreated(function editOnCreated() {
  this.fornecedor = new ReactiveVar();
  this.fornecedor.set(this.data);



});
Template.edit.helpers({
  fornecedor() {
    return Template.instance().fornecedor.get();
  }
})
Template.edit.onRendered(function editOnRendered() {

});

Template.edit.events({
  'click #close'(event, instance) {
    //Blaze.remove(instance.view);
  },
  'click #save'(event, instance) {

  }
});