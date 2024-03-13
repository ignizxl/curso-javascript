//reaproveitando os exemplos que eu fiz no curso do RB tech 

//objetos 
//os delimitadores especiais de um objeto são as chaves {}
//a vantagem é que nos objetos nós podemos usar indíces literais como por exemplo 'nome' , 'sobrenome' , idade'.... ao invés de usar
//indíces numéricos como 0 1 2 ...

//veja um exemplo abaixo:
var pessoa = {
    //key | value >>> é bem parecido com os dicionários do python 
    nome : 'João'      ,
    sobrenome : 'Igor' ,
    idade : 19         ,
    //nossas keys também podem ter funções
    andar : function(){
        console.log('Caminhando...');
    }
}   

console.log(pessoa.andar()); // chamando a função andar  
console.log(pessoa);

let amigo = {
    nome : 'José',
    peso : 76.00,
    engordar(p=0){
        //this é uma autoreferência ao objeto 
        this.peso += p;
    }
}

console.log(`Pesso de ${amigo.nome} antes de engordar é: ${amigo.peso}kg.`);
amigo.engordar(5);
console.log(`O peso depois de chamar a função 'engordar' passando 5: ${amigo.peso}ks.`);