import { Fornecedores } from '/lib/colections/main.js'
Template.addLayout.onCreated(function addOnCreated() {
  this.fornecedor = new ReactiveVar({});




});

Template.addLayout.onRendered(function addOnRendered() {
  $('#inputPhone').inputmask({ "mask": "(99) 99999-9999" });
});

Template.addLayout.helpers({
  fornecedor() {
    return Template.instance().status.get();
  }
});

Template.addLayout.events({
  'click #close'() {
    FlowRouter.go('/');

  },
  'click #save'(event, instance) {
    let nameInput = document.getElementById('inputName').value;
    let emailInput = document.getElementById('inputEmail').value;
    let quantInput = document.getElementById('inputQuant').value;
    const valida = require('../controller/validations');
    const user={
      nameInput,
      emailInput,
      quantInput
    }
    if (valida.validations(user)) {
      Fornecedores.insert({
        name: nameInput,
        email: emailInput,
        quant: quantInput
      });
      FlowRouter.go('/');

    }else{
      alert('Aconteceu algum erro, revise seus dados');
    }
    nameInput = '';
    emailInput = '';
    quantInput = '';
    
    /*
    Fornecedores.insert({
      name: nameInput,
      email: emailInput,
      quant: quantInput
    });
    
    nameInput = '';
    emailInput = '';
    quantInput = '';
    FlowRouter.go('/');
    */
  }
});