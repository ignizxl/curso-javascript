//reaproveitando os exemplos que eu fiz no curso do RB tech 
//funções

/**
 * Uma função nada mais é que um bloco de código que executa uma determinada tarefa
 * Uma função somente é executada mediante uma chamada específica a ela 
 * 
 * Exemplos práticos:
 */

//criando a função 'soma' que recebe 2 parâmetro, n1 e n2
function soma(n1, n2){
    //retornando a soma entre n1 e n2
    return n1 + n2;
}
// exibindo o resultado da função 'soma' (n1 = 15, n2 = 10)
console.log();

//as funções também podem ter parâmetros opcionais, veja abaixo 

//criando a função divisão que recebe 2 parâmetros, o parâmetro 'por' é opcional, isso significa
//que se eu não passar nenhum valor no parâmetro 'por', por padrão ele vai valer '2'
function divisao(numero, por = 2){
    //retorna a divisão de 'numero' divido 'por'
    return numero / por;
}

//chamando a função divisão passando apenas um parâmetro
console.log(`${10} / ${2} o resultado é: ${divisao(10)}`);
//chamando a função divisão passando os dois parâmetros
console.log(`${12} / ${3} o resultado é: ${divisao(12,3)}`);

//função recursiva 
function fatorialRecursivo(n){
    if (n == 1){
        return 1;
    } else {
        return n * fatorialRecursivo(n - 1);
    }
}
console.log(`O fatorial de ${5} é : ${fatorialRecursivo(5)}`);

function fatorial(n){
    let fact = 1;
    for (c = n; c > 1; c--){
        fact *= c;
    }
    return fact;
}
console.log(`O fatorial de ${6} é : ${fatorial(6)}`);


//complementando 
//arrow functions
//    nomeDaFunção        parâmetros   <--estrutura da arrow function
const somarDoisNumeros = (n1, n2) => {
    //bloco
    return n1 + n2;
}

//se escrever tudo na mesma linha não precisa escrever o return 
//ex:

const multiplicarDoisNumeros = (n1, n2) => n1 * n2;

console.log(`Multiplicando 10 * 2 = ${multiplicarDoisNumeros(10,2)} e somando 2 + 2 = ${somarDoisNumeros(2,2)}`);

console.log('=-==- Callback -==-=');
/** callbacks
 *  permite executar uma função depois de uma determinada ação
 *  o que caracteriza uma callback é passar para uma função como argumento outra função
 *  veja o exemplo:
 */

function exibirResultado(num){
    console.log(`O resultado é ${num}.`);
}
// neste exemplo, a callback será a função exibirResultado
function dividirDoisNumeros(n1, n2, callback){
    let divisao = (n1 / n2).toFixed(2);
    //chamando a função que foi passada como argumento
    callback(divisao);
}

//chamando a função dividirDoisNumeros.
dividirDoisNumeros(20, 5, exibirResultado);