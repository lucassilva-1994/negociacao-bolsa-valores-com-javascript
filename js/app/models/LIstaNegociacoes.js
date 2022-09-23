class ListaNegociacoes{
    constructor(){
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
}