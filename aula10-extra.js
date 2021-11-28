//Crie um array que contenha nomes de produtos para compra. Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

//join - junta os elementos do array e separa com uma , 
var linhaAzul = ['Jabaquara', 'Conceição', 'São Judas', 'Saúde']
console.log(linhaAzul.join())

// pop - elimina e retorna o último elemento de um array 
console.log(linhaAzul.pop())

// push - adiciona um elemento 
linhaAzul.push('Praça da Árvore', 'Santa Cruz')
console.log(linhaAzul)

//shift - elimina o primeiro elemento 
console.log(linhaAzul.shift())

// unshift - adiciona um elemento no início e retorna o número de registros dentro da array
console.log(linhaAzul.unshift('Vila Mariana'))
console.log(linhaAzul.join())
