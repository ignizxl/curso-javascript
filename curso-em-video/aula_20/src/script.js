var valores   = [];
var array     = document.getElementById('array');
var numero    = document.getElementById('numero');
var resultado = document.getElementById('resultado');

function isNumero(num){
    if (Number(num)>= 1 && Number(num) <=  100){
        return true;
    } else {
        return false;
    }
}

function inLista(num, lista){
    if (lista.indexOf(Number(num)) != -1){
        //quando o retorno do indexOf é '-1', significa que o número não foi encontrado,
        //mas se for diferente de '-1', o número foi encontrado.
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if (numero.value.length == 0){
        window.alert('[ERRO] Preencha o campo e tente novamente!');
    } else {
        if(isNumero(numero.value) && !inLista(numero.value, valores )){
            //adiciando o número dentro de valores 
            valores.push(Number(numero.value));
            window.alert(`Número '${numero.value}' adicionado com sucesso!`);
            //criando um elemento 'option'
            let item = document.createElement('option');
            //inserindo texto no elemento
            item.text = `Número ${numero.value} adicioando!`;
            //adicionando o elemento no meu array 
            array.appendChild(item);
            //toda vez que eu adiciono um elemento eu limpo o resultado
            resultado.innerHTML = '';
        } else {
            window.alert(`[ERRO] O número '${numero.value}' é um valor inválido ou já foi adicionado na lista!`);
        }

        //limpando e redirecionando o foco para o campo do número.
        numero.value = "";
        numero.focus()
    }
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    } else {
        resultado.innerHTML = '';
        let total           = valores.length;
        let maiorValor      = valores[0];
        let menorValor      = valores[0];
        let somaTotal       = 0;
        let media           = 0;

        //criando um for pra varrer cada elemento dentro de valores.
        for (let indice in valores){
            //incrementado o acumulador soma
            somaTotal += valores[indice];
            //maior valor
            if (valores[indice] > maiorValor){
                maiorValor = valores[indice];
            } //menor valor
            if (valores[indice] < menorValor){
                menorValor = valores[indice];
            }
        } 
        media = (somaTotal / total);
        //exibindo o resultado final 
        resultado.innerHTML = '';
        resultado.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`;
        resultado.innerHTML += `<p> O maior valor cadastrado foi o '${maiorValor}'.</p>`;
        resultado.innerHTML += `<p> O menor valor cadastrado foi o '${menorValor}'.</p>`;
        resultado.innerHTML += `<p> Somando todos os valores, temos '${somaTotal}'.</p>`;
        resultado.innerHTML += `<p> A média dos valores cadastrados é de '${media.toFixed(2)}'.</p>`;
    }
}