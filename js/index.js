//Pegando dados do formulário usando o dom e armazenando no array abaixo
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

var tbody = document.querySelector('table tbody')

//Associando o evento abaixo ao formulário através da classe form
document.querySelector('.form').addEventListener('submit', function(event){
    //Evitando com que a página não seja recarregada ao submeter o formulário
    event.preventDefault();
    //Criando um elemento html usando o DOM
    var tr = document.createElement('tr');

    //Criando quantidade de colunas de acordo com a quantidade de indices no array (campos)
    campos.forEach(function(campo){
        var td = document.createElement('td');
        //Atribuindo um valor para o nome da coluna (Usando o comando textContent)
        td.textContent = campo.value;
        //Adicionando a váriavel td dentro da TR.
        tr.appendChild(td);
    });
    //Criando uma coluna de volume, que vai receber a quantidade * valor
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    //Adicionando o element TR criado no tbody do HTML
    tbody.appendChild(tr);

    //Atribuindo um valor padrão após adicionar um novo registro na tabela
    campos[0].value = '';
    campos[1].value = 0;
    campos[2].value = ''
    //O campo valor está recebendo FOCO após o registro
    campos[0].focus();
});