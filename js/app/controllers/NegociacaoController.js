class NegociacaoController{
    adiciona(event){
        event.preventDefault();
        //Atribuindo um aliás para o document.querySelector.
        let $ = document.querySelector.bind(document);
        let inputData = $("#data");
        let inputQuantidade = $("#quantidade");
        let inputValor = $("#valor");

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    }
}