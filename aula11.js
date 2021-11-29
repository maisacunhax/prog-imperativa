
//Mesa de trabalho - ciclos e repetições 

//1 - Nos pediram para passar todos os elementos para letras maiúsculas, o que na época tínhamos feito de forma "manual". Vamos movê-lo para uma maneira mais automática usando loops.
function converterMaiusculo(arrayTeste){
    for(let i = 0; i < arrayTeste.length; i++){ //length - retorna qtd de caracteres dentro da função e aqui está dizendo que o tamanho total do array é menor que 0 
        arrayTeste[i] = arrayTeste[i].toUpperCase()
    }
    return arrayTeste;
  }
  
  let arrayFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
  console.log(converterMaiusculo(arrayFilmes));
  
  //2 - Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original

  let filmesAnimação = ["homem aranha", "up", "zootopia", "nemo", "walle"];
  function concatArray(arrayTeste, arrayAdd){
    for (let i = 0; i < arrayAdd.length; i++){
        arrayTeste.push(arrayAdd[i].toUpperCase());
    }
    return arrayTeste;
  }
  
  console.log(concatArray(arrayFilmes, filmesAnimação));
  
  //3- Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar em outra variável
  //antes de fazer a passagem de elementos de um array para outro!
  function arrayAdd(arrayTeste, arrayAdd){
    ultimoItem = arrayAdd.pop();
    for (let i = 0; i < arrayAdd.length; i++){
        arrayTeste.push(arrayAdd[i].toUpperCase());
    }
    return arrayTeste;
  }
  
  let ultimoItem = '';
  console.log(arrayAdd(arrayFilmes, filmesAnimação));
  
  //4 - Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.
  const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
  const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
  
  function compararCalificaciones(asia, europa) {
    let comparacionesAsiaEuropa = []
    for (let i = 0; i < asia.length; i++){
       comparacionesAsiaEuropa[i] = asia[i] == europa[i] ? 'Igual' : 'Diferente';
    }
    return comparacionesAsiaEuropa; 
  }
  
  console.log(compararCalificaciones(asiaScores, euroScores));
  
