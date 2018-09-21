import { Fornecedores } from '/lib/colections/main.js'

exports.validations = (user) => {

    return (validaEmail(user.emailInput) && validaCampos(user));

}



const validaEmail = (email) => {

    if (Fornecedores.findOne({ email: email })) {
        alert('Email já cadastrado');
        return false;
    }
    else {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}
const validaCampos = (user) => {
    const name = user.nameInput.value;
    const email = user.emailInput.value;
    const quant = user.quantInput.value;
    const valor = user.valorInput.value;
    const product_name = user.productNameInput.value;

    return (name !== '' && email !== '' && quant !== '' && valor !== '' && product_name !== '');

}