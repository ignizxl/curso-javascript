// emoji da seta: &#10145;&#65039;
// emoji da bandeira: &#127987;

function contagem(inicio = 0, fim = 1, passo = 1){
    var descricao = "";
    
    if (inicio > fim){
        //contagem regressiva
        for(let i = inicio; i >= fim; i -= passo){
                descricao += ` &#10145;&#65039; ${i}`;
        }  descricao += ` &#127987;`;
    } else {
        //contagem crescente
        for(let i = inicio; i <= fim; i += passo){
                descricao += ` &#10145;&#65039; ${i}`;
        }  descricao += ` &#127987;`;
    }
    return descricao;
}

function contar(){
    var inicio    = window.document.getElementById('inicio').value;
    var fim       = window.document.getElementById('fim').value;
    var passo     = window.document.getElementById('passo').value;
    var descricao = window.document.getElementById('descricao');
    
    //verificando se os campos estão vazios 
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        window.alert('[ERRO] Preencha os campos e tente novamente!');
    } else {
        if (passo == 0){
            window.alert("[ERRO] Passo inválido! Considerando passo como '1'.");
            passo = 1;
        }
        //chamando a função contagem()
        descricao.innerHTML = `<p>${contagem(Number(inicio), Number(fim), Number(passo))}</p>`
    }   
}
