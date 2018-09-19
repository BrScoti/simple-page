import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Template.mainLayout.events({
  'click #add'(event, instance) {
    FlowRouter.go('/add');
  }


});
