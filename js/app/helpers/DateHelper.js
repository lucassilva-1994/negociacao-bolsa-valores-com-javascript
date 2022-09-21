class DateHelper{
    constructor(){
        //Mensagem de erro que será apresentado no momento que a classe for instanciada.
        throw new Error("A classe não pode ser instaciada.");
    }

    //Criando métodos estáticos, sem a necessidade de instanciar a classe.
    static dataParaTexto(data){
        return data.getDate()
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear();
    }

    static textoParaData(texto){
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }
}