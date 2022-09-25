class View {
    constructor(elemento){
        this._elemento = elemento;
    }

    template(model){
        //Lançando a mensagem informando que o método TEMPLATE deve ser implementado nas classes filhas.
        throw new Error("O método template deve ser implementado.");
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}