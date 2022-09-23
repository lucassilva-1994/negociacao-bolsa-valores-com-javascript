class NegociacoesView{
    constructor(elemento){
        this._elemento = elemento;
    }

    //Na linha 21 até o linha 30 está sendo percorrido todas as negociações
    //A cada negociação realizada é criada uma nova TR na tabela.
    _template(model){
        return `
                    <table class="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>DATA</th>
                                            <th>QUANTIDADE</th>
                                            <th>VALOR</th>
                                            <th>VOLUME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        ${model.negociacoes.map(n => {
                                                return `
                                                    <tr>
                                                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                                                        <td>${n.quantidade}</td>
                                                        <td>${n.valor}</td>
                                                        <td>${n.volume}</td>
                                                    </tr>
                                                `;
                                            }).join('')};
                                    </tbody>
                                    <tfoot>
                                    </tfoot>
                    </table>
        `;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}