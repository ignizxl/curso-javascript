
//condição composta (if, else, else if)

//declaro as variáveis n1 e n2 e atribuo valores inteiros 
var n1 = 32;
var n2 = 2;
//declaro a variável soma que recebe  n1 + n2 
var soma = n1 + n2;
//verifica se o resto da divisão da variável 'soma' é igual a zero, se for, exibe PAR 
if (soma % 2 === 0){
    console.log(`A soma entre ${n1} e ${n2} resulta em um número PAR!`);
//senão, exibe ÍMPAR
} else {
    console.log(`A soma entre ${n1} e ${n2} resulta em um número ÍMPAR!`);
}

function calcular() {
    var campo = window.document.getElementById("campo_1");
    var velocidade = Number(campo.value);
    var resultado = window.document.getElementById('resultado');
    resultado.innerHTML = `<p>Sua velocidade é de <strong>${velocidade}km/h.</strong></p>`;
    if (velocidade > 60) {
        resultado.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }
    resultado.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}