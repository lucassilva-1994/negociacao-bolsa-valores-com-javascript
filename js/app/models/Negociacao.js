class Negociacao{
    //Iniciando a classe com propriedade e já atribuindo valores.
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //Método responsável por retonar o volume.
    getVolume(){
        return this._quantidade * this._valor;
    }

    getData(){
        return this._data;
    }

    getQuantidade(){
        return this._quantidade;
    }
     
    getValor(){
        return this._valor;
    }
}