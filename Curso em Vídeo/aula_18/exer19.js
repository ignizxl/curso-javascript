
//reaproveitando os exemplos que eu fiz no curso do RB tech 

//o array é recomendado para armazenar dados de um mesmo contexo, como por exemplo: frutas, tipos de carros ...

//indíces        0       1         2         3
var frutas = ['maça', 'melão', 'laranja', 'banana'];

//para acessar algum item acima nós utilizamos o nome da variável seguida de conchetes, indicando a posição ['indíce'] 
//exemplo: frutas[0] = maça | frutas[1] = melão ...

console.log(frutas[3]); //imprimindo o item 'banana'

/**
 * pop = remove o último elemento 
 * push = adiciona na última posição 
 * sort = ordena em ordem crescente 
 * reverse = ordena em ordem decrescente
 * shift = remove o primeiro elemento do array
 * unshift = adiciona na primeira posição do array 
 * toString = retorna no formato de string 
 * join = junta os elementos de um array com algo entre eles 
 * indexOf = retorna o indice em que um determinado elemento se encontra
 */

//exemplos práticos

console.log('A quantidade de itens dentro da variável "frutas" é ' + frutas.length);
console.log(frutas)
console.log('Ordenando utilizando o "sort" = ' + frutas.sort());
console.log('Ordenando utilizando o "reverse" = ' + frutas.reverse());
console.log('Frutas .toString = ' + frutas.toString());
console.log(frutas.join(' - '));
console.log('Removendo a primeiro elemento do array de frutas com o comando "shift": ' + frutas.shift());
console.log('Adicionando a fruta "melancia" no array de frutas utilizando o comando "push": ' + frutas.push('Melancia'));
console.log(frutas);

//outros exemplos 
//índice       0  1  2  3  4
var numeros = [5, 8, 2, 9, 3];
console.log(`valores desordenados: ${numeros}`);
console.log(`valores ordenados em ordem crescente: ${numeros.sort()}`);
console.log(`adicionando o número '19' no array na última posição: ${numeros.push(19)}`);
console.log(`valores ordenados em ordem decrescente: ${numeros.reverse()}`);
console.log(`Buscando o número '12' (que não existe) dentro do array, se o número não for encontrado o retorno será '-1': ${numeros.indexOf(12)}`);
console.log('   0  1  2  3  4  5  <-- índices');
console.log(numeros);
console.log(`buscando o número '2' (que existe) dentro do array: ${numeros.indexOf(2)}`);
console.log(`O elemento ${2} se encontra no índice ${numeros.indexOf(2)}`)