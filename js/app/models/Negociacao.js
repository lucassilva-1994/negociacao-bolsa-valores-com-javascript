class Negociacao{
    //Iniciando a classe com propriedade e já atribuindo valores.
    constructor(data, quantidade, valor){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    //Método responsável por retonar o volume.
    obterVolume(){
        return this.quantidade * this.valor;
    }
}