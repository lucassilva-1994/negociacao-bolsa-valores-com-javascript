class Negociacao{
    //Iniciando a classe com propriedade e já atribuindo valores.
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime())
        this._quantidade = quantidade;
        this._valor = valor;
        //Congelando o valor atribuido as propriedades acima.
        //O mesmo não pode ser alterado após ser instanciado.
        Object.freeze(this);
    }

    //Método responsável por retonar o volume.
    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime())
    }

    get quantidade(){
        return this._quantidade;
    }
     
    get valor(){
        return this._valor;
    }
}