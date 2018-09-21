import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';




Template.mainLayout.events({
  'click #addFornecedor'(event, instance) {

    FlowRouter.go('/addf');
  },
  'click #addPedido'(event, instance) {

    FlowRouter.go('/addp');
  }


});

