class DateHelper{
    constructor(){
        //Mensagem de erro que será apresentado no momento que a classe for instanciada.
        throw new Error("A classe não pode ser instanciada.");
    }

    //Criando métodos estáticos, sem a necessidade de instanciar a classe.
    static dataParaTexto(data){
        //Fazendo uso de template strings
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(texto){

        //Criando expressão regular para validar se a data é no formato yyyy-mm-dd
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error("O formato da data deve ser aaaa-mm-dd");

        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }
}