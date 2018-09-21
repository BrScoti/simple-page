import { Fornecedores } from '/lib/colections/main.js'


Template.listLayout.onCreated(function addOnCreated() {

});
Template.listLayout.helpers({
  fornecedores() {
    //console.log(Fornecedores.find({}, {sort: {quant: 1}}).fetch());

    return Fornecedores.find().fetch();
  }
})
Template.listLayout.events({
  'click #edit'(event, instance) {

    FlowRouter.go(FlowRouter.path('edit',{id:this._id}));
    

  },
  'click #delete'(event,instance){
    if(confirm("Tem certeza que deseja excluir esse fornecedor?")) Fornecedores.remove(this._id);
  }
})