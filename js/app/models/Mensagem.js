class Mensagem {
    //Definindo um valor em branco como padrão no contrutor.
    constructor(texto = ''){
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}