class NegociacaoController{
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';

        this._listaNegociacoes = new Bind (
                new ListaNegociacoes(),
                new NegociacoesView($('#negociacoesView')),
                'adiciona', 'esvazia','ordena','inverteOrdem');
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacao adicionada com sucesso.';
        this._limpaFormulario();
    }

    //Método responsável por ordenar a tabela de acordo com a coluna.
    ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);    
        }
        this._ordemAtual = coluna;
    }

    importaNegociacoes() {
        let service = new NegociacaoService();
        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()
        ])
        .then(negociacoes => {
            negociacoes
            .reduce((arrayAchatado, array) => arrayAchatado.concat(array),[])
            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso."
        })
        .catch(error => this._mensagem.texto = error);
      }
      

    //Método responsável por apagar todas as negociações.
    apaga(){
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = "Negociações apagadas com sucesso.";
    }

    //Método responsável por limpar o formulário após a negociação ser concluída.
    _limpaFormulario(){
        //Atribuindo valores padrões
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        //Após a negociação o campo data receberá o focus.
        this._inputData.focus();
    }

    //Método auxiliar para criar uma nova negociação.
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}