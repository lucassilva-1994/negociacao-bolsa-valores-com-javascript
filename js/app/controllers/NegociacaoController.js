class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event){
        event.preventDefault();
        //Chamando o método estático textoParaData
        let data = DateHelper.textoParaData(this._inputData.value);

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    //Método responsável por limpar o formulário após a negociação ser concluída.
    _limpaFormulario(){
        //Atribuindo valores padrões
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        //Após a negociação o campo data receberá o focus.
        this._inputData.focus();
    }

    //Método auxiliar para criar uma nova negociação.
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}