class Negociacao{
    //Iniciando a classe com propriedade e já atribuindo valores.
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Método responsável por retonar o volume.
    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }
     
    get valor(){
        return this._valor;
    }
}