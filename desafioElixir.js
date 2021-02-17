function pagamentosPorEmail (listaItens, listaEmails){
    //Verificando a existência de valores indefinidos ou listas vazias
    if((typeof Object.values(listaItens) === undefined || Object.values(listaItens).length === 0) || (typeof Object.values(listaEmails) === undefined || Object.values(listaEmails).length === 0)){
        console.log('Execução impossível ou com erros. Há valores inexistentes ou indefinidos nas listas, verifique.') 
    } else{    
    
    let totalPrecos =[];
    const itens = Object.values(listaItens);
    // console.log(itens)
    
    //multiplicando quantidade de itens pelo preço para verificação de total
    for(i in itens){
        totalPrecos.push(itens[i].quantidade * itens[i].preco); 
        } 
        // console.log(totalPrecos);

    //Soma total de valores de itens da lista
    let somaTotal = totalPrecos.reduce((acc, curr)=> acc + curr); 
    console.log(somaTotal)

    //divisão que resulta dízima arredondada
    let valorPorEmail = Math.floor(somaTotal / listaEmails.length);

    //divisão para verificar valor faltante
    let sobraParaUltimo = somaTotal - valorPorEmail * (listaEmails.length -1);


    //criacao do mapa para distribuicao dos valores de pagamento por email
    const map = new Map();
    
    for (let i = 0; i<listaEmails.length -1; i++ ){
        map.set(listaEmails[i], valorPorEmail);
    }
    map.set(listaEmails[listaEmails.length -1], sobraParaUltimo); 

    return console.log(map);

    }
}

// TESTES

//teste INTEIRO 
pagamentosPorEmail([
    {
         "item": "lápis",    
         "quantidade": 100,
         "preco": 90
     },
     { 
         "item": "borracha",
         "quantidade": 87,
         "preco": 75
     }, 
     {
        "item": 'apontador',
        "quantidade": 50,
        "preco": 120
    },
    
     ], ['email1@email','email2@email','email3@email','email4@email','email5@email', 'email6@email']);

//teste DÍZIMA

pagamentosPorEmail([
    {
         "item": "lápis",    
         "quantidade": 100,
         "preco": 90
     },
     { 
         "item": "borracha",
         "quantidade": 85,
         "preco": 75
     }, 
     {
        "item": 'apontador',
        "quantidade": 50,
        "preco": 125
    },
    
     ], ['email1@email','email2@email','email3@email','email4@email','email5@email', 'email6@email']);

//teste LISTA ITENS VAZIA

pagamentosPorEmail(
    [], ['email1@email','email2@email','email3@email','email4@email','email5@email', 'email6@email']);

//teste LISTA EMAILS VAZIA

pagamentosPorEmail(
    [ { 
        "item": "borracha",
        "quantidade": 85,
        "preco": 75
    }, 
    {
       "item": 'apontador',
       "quantidade": 50,
       "preco": 125
   },], []);

   //teste valores indefinidos
   