class MensagemView extends View{
    constructor(elemento){
        //Elemento será passado para o construtor da classe PAI.
        super(elemento);
    }

    template(model){
        //Verificando se há mensagem na propriedade texto
        //Se houver será exibido um paragrafo com a classe com fundo azul
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>`:"<p></p>";
    }
}