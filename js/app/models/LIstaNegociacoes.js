class ListaNegociacoes{
    constructor( armadilha){
        //Criando uma lista de negociações
        this._negociacoes = [];
    }

    adiciona(negociacao){
        //Adicionando uma negociação na lista de negociações.
        this._negociacoes.push(negociacao);
    }

    //Criando método para retornar as negociações

    get negociacoes(){
        return [].concat(this._negociacoes);
    }

    //Ao chamar o método esvazia será chamado um novo array vázio.
    esvazia(){
        this._negociacoes = [];
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);        
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
}