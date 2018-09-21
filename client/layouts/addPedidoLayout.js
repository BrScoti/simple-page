import { Fornecedores } from '/lib/colections/main.js'


Template.addPedidoLayout.onCreated(function addOnCreated() {
    this.fornecedor = new ReactiveVar([]);
    this.valorTotal = new ReactiveVar([]);
});

Template.addPedidoLayout.onRendered(function addOnRendered() {

});



Template.addPedidoLayout.events({
    'click #close'() {
        FlowRouter.go('/');

    },
    'click .product'(event, instance) {
        const arrFornecedor = instance.fornecedor.get();
        const isChecked = $(event.target).is(":checked");
        let valorTotal = instance.valorTotal.get();
        if (isChecked) {
            const objExiste = arrFornecedor.find(p => p._id === this._id);

            if (!objExiste) {
                const auxObj = this;
                auxObj.qntdSelecionada = 1;
                arrFornecedor.push(auxObj);
                instance.fornecedor.set(arrFornecedor);
                valorTotal += this.valor;
                instance.valorTotal.set(parseFloat(valorTotal));

            }


        }
        else {
            const objRestante = arrFornecedor.filter(p => p._id !== this._id);
            instance.fornecedor.set(objRestante);
            instance.valorTotal.set(parseFloat(instance.valorTotal.get() - this.valor));

        }
    },
    'keyup .quantidade'(event, instance) {
        const quantidade = event.target.value !== '' ? event.target.value : 1;        
        const totalValor = instance.valorTotal.get();
        const fornecedor = instance.fornecedor.get().find(f=>f._id==this._id);
        const novaListaFornec = instance.fornecedor.get().filter(f=>f._id!=this._id);
        console.log(this);
        
            fornecedor.qntdSelecionada = quantidade;
            novaListaFornec.push(fornecedor)
            let valorFinal = 0;
            
            valorFinal += fornecedor.valor * fornecedor.qntdSelecionada;
            
            
            instance.valorTotal.set(valorFinal);
            instance.fornecedor.set(novaListaFornec);


    }
})

Template.addPedidoLayout.helpers({
    fornecedores() {
        return Fornecedores.find().fetch();
    },
    fornecedor() {
        return Template.instance().fornecedor.get();
    },
    valorTotal() {
        return Template.instance().valorTotal.get();
    },
    produtosFornecedor(){
        const produtos=Template.instance().fornecedor.get().map(doc=>{
            const descricao = `${doc.product_name} ${doc.qntdSelecionada * doc.valor}`
            return descricao;
        });
        console.log(produtos);
        return produtos;
    }

});
