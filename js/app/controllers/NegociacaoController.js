class NegociacaoController{
    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind (
                new ListaNegociacoes(),
                new NegociacoesView($('#negociacoesView')),
                'adiciona', 'esvazia');
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event){
        event.preventDefault();
        //Chamando o método estático textoParaData
        //let data = DateHelper.textoParaData(this._inputData.value);

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacao adicionada com sucesso.';
        this._limpaFormulario();
    }

    importaNegociacoes() {
        let service = new NegociacaoService();
        service.obterNegociacoesDaSemana()
        .then(negociacoes => {
            negociacoes.forEach(negociacao =>this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações obtidas com sucesso."
        })
        .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaAnterior()
        .then(negociacoes => {
            negociacoes.forEach(negociacao =>this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações obtidas com sucesso."
        })
        .catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaRetrasada()
        .then(negociacoes => {
            negociacoes.forEach(negociacao =>this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações obtidas com sucesso."
        })
        .catch(erro => this._mensagem.texto = erro);

        /*
        service.obterNegociacoesDaSemana((erro,negociacoes) => {
            if(erro) {
                this._mensagem.texto = erro;
                return;
            }
            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            service.obterNegociacoesDaSemanaAnterior((erro,negociacoes) => {
                if(erro) {
                    this._mensagem.texto = erro;
                    return;
                }
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                service.obterNegociacoesDaSemanaRetrasada((erro,negociacoes) => {
                    if(erro) {
                        this._mensagem.texto = erro;
                        return;
                    }
                    negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                });
            });
            this._mensagem.texto = 'Negociações importadas com sucesso';
        });
        */
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