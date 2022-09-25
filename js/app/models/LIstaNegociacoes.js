class ListaNegociacoes{
    constructor( armadilha){
        //Criando uma lista de negociações
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao){
        //Adicionando uma negociação na lista de negociações.
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    //Criando método para retornar as negociações

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    //Ao chamar o método esvazia será chamado um novo array vázio.
    esvazia(){
        this._negociacoes = [];
        this._armadilha(this);
    }
}