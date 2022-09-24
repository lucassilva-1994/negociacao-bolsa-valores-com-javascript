class MensagemView{
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        //Verificando se há mensagem na propriedade texto
        //Se houver será exibido um paragrafo com a classe com fundo azul
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>`:"<p></p>";
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}