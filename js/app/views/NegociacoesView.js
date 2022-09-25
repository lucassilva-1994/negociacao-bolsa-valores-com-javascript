class NegociacoesView extends View{
    constructor(elemento){
        super(elemento);
    }

    //Na linha 21 até o linha 30 está sendo percorrido todas as negociações
    //A cada negociação realizada é criada uma nova TR na tabela.
    template(model){
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
                                        
                                        ${model.negociacoes.map(n => 
                                                `
                                                    <tr>
                                                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                                                        <td>${n.quantidade}</td>
                                                        <td>${n.valor}</td>
                                                        <td>${n.volume}</td>
                                                    </tr>
                                                `
                                            ).join('')};
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="3"></td>
                                            <td>
    <strong>${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                    </table>
        `;
    }
}