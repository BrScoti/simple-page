import { Fornecedores } from '/lib/colections/main.js'

FlowRouter.route('/', {
    name: 'list',
    action() {
        BlazeLayout.render('mainLayout');

    }
});

FlowRouter.route('/add', {
    name: 'add',
    action: function (params, queryParams) {

        BlazeLayout.render('addLayout');

    }
});

FlowRouter.route('/edit/:id', {
    name: 'edit',
    action: function (params, queryParams) {
        Blaze.renderWithData(Template['editLayout'], this, document.body);
        $('#editModal').modal('show');


    }
});