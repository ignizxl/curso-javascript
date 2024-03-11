//laços de repetições 
//laço while 
console.log("laço while:");
//no laço while, precisamos criar um contador
//crio o contador c que inicia valendo 0 e vai sendo incrementado a cada iteração do laço while 
var c = 1;
//enquanto o c for menor que 10
while (c <= 10){
    //mostro o valor do c e depois incremento  
    console.log(c);
    c++;
}

console.log("Do While");
//a estrutura do Do While também é simples 
var i = 10;
//este bloco será executado 
do {  
    console.log(i);
    i -= 2;
} while (i >= 0); //até que está condição seja falsa.


//laço for 
//declaro i como uma variável local(só será utilizada dentro do escopo da laço for) e atribuo o valor 0, e enquanto o i
//for menor que 10, eu incremento o i (i++) a cada iteração do for
console.log("laço for:");
for (let i = 0; i < 10; i ++){
    //e a cada iteração mostro o i
    console.log(i);
}