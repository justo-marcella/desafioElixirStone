// function soma itens (recebeListaItens, recebeListaNomes){
//     soma dos valores; multiplica o preço de cada item por sua quantidade e soma todos os itens;
//     divide os valores de forma igual pelos emails; -> Divisão não pode ter dízima ->Não trabalhar com valores decimais
//     Retorna um mapa/dicionário onde a chave será o e-mail e o valor será quanto ele deve pagar nessa conta;
// }
// documentar teste da solução

function pagamentosPorEmail (listaItens, listaEmails){
    
    let listaItens = {
        item:'Maçã',
        quantidade: 10, 
        preco: 130
    };
    let listaEmails = [];
    let arrayPrecos =[];

        for(let i = 0; i <= listaItens.length; i++){
            listaItens[i].quantidade > 0 ? arrayPrecos.push(listaItens[i].quantidade * listaItens[i].preco) : console.log('Não há itens para verificação.')
        } //multiplicando quantidade de itens pelo preço para verificação de total
        console.log(arrayPrecos);

        let somaTotal = arrayPrecos.reduce(reducer); //Soma total de valores de itens da lista

        let valorPorEmail = listaEmails.map()

        return valorPorEmail;


}
