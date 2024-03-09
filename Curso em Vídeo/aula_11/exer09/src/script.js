//condições simples (if)

var velocidade = 200;
console.log(`A velocidade do seu carro é ${velocidade}km/h.`);
if (velocidade > 60){ //condição simples
    //se a condição acima for atendida, irá exibir a mensagem abaixo.
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`);
}
console.log(`Dirija sempre usando cinto de segurança!`);

var pais = window.document.getElementById('pais').value;

function verificar(){
    if (pais == 'Brasil'|| 'BRASIL' || 'brasil'){
        window.document.getElementById('resultado').innerHTML = `<p>Você é <strong>Brasileiro!</strong></p>`;
    } else {
        window.document.getElementById('resultado').innerHTML = `<p>Você é <strong>Estrangeiro!</strong></p>`;
    }
}