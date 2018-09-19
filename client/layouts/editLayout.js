import { Fornecedores } from '/lib/colections/main.js'

Template.editLayout.onCreated(function editOnCreated() {
    this.fornecedor = new ReactiveVar();   
    const _id = FlowRouter.getParam('id');
  
    this.fornecedor.set(Fornecedores.findOne(_id));
  
  });
  Template.editLayout.helpers({
    fornecedor() {
      return Template.instance().fornecedor.get();
    }
  })
  Template.editLayout.onRendered(function editOnRendered() {
  
  });
  
  Template.editLayout.events({
    'hidden.bs.modal #editModal'(event, instance) {
      Blaze.remove(instance.view);
      FlowRouter.go('/');

    },
    'click #close'(event, instance) {
      $('#editModal').modal('hide');
  
    },
    'click #save'(event, instance) {
      let nameInput = document.getElementById('inputNameEdit').value;
      let emailInput = document.getElementById('inputEmailEdit').value;
      let quantInput = document.getElementById('inputQuantEdit').value;
     
      Fornecedores.update({
        _id: instance.fornecedor.get()._id
      }, {
          $set: {
            name: nameInput,
            email: emailInput,
            quant: quantInput
  
          }
        })
    }
  });
  