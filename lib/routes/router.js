import { Fornecedores } from '/lib/colections/main.js'

FlowRouter.route('/', {
    name: 'list',
    action() {
        BlazeLayout.render('mainLayout');

    }
});

FlowRouter.route('/addf', {
    name: 'addfornecedor',
    action: function (params, queryParams) {

        BlazeLayout.render('addFornecedorLayout');

    }
});


FlowRouter.route('/addp', {
    name: 'addpedidos',
    action: function (params, queryParams) {

        BlazeLayout.render('addPedidoLayout');

    }
});


FlowRouter.route('/edit/:id', {
    name: 'edit',
    action: function (params, queryParams) {
        Blaze.renderWithData(Template['editLayout'], this, document.body);
        $('#editModal').modal('show');


    }
});