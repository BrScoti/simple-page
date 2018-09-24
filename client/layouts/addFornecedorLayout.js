import { Fornecedores } from '/lib/colections/main.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



Template.addFornecedorLayout.onCreated(function addOnCreated() {
  this.fornecedor = new ReactiveVar({});




});

Template.addFornecedorLayout.onRendered(function addOnRendered() {
  $('#inputPhone').inputmask({ "mask": "(99) 99999-9999" });
});

Template.addFornecedorLayout.helpers({
  fornecedor() {
    return Template.instance().status.get();
  }
});

Template.addFornecedorLayout.events({
  'click #close'() {
    FlowRouter.go('/');

  },
  'click #save'(event, instance) {
    let nameInput = document.getElementById('inputName').value;
    let emailInput = document.getElementById('inputEmail').value;
    let quantInput = parseInt(document.getElementById('inputQuant').value);
    let valorInput= parseFloat(document.getElementById('inputValor').value);
    let productNameInput=document.getElementById('inputProductName').value;
    const valida = require('../controller/validations');
    const user={
      nameInput,
      productNameInput,
      emailInput,
      quantInput,
      valorInput
    }
    if (valida.validations(user)) {
      Fornecedores.insert({
        name: nameInput,
        product_name:productNameInput,
        email: emailInput,
        quant: quantInput,
        valor: valorInput
      });
      FlowRouter.go('/');

    }else{
      alert('Aconteceu algum erro, revise seus dados');
    }
   
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