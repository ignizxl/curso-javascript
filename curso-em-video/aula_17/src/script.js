
function gerarTabuada(){
    var numero = window.document.getElementById('numero').value;
    var tabuada = window.document.getElementById('tabuadaSelect');
    //verificando se o campo está vazio
    if (numero.length == 0){
        window.alert('[ERRO] Preencha o campo e tente novamente!');
    } else {
        numero = Number(numero);
        c = 1;
        //a tabuada sempre precisa iniciar como uma string vazia antes de mostrar os resultados, porque se eu não fizer isso, ela vai ficar acumulando todas as tabuadas dos números que eu digitar, e dessa forma toda vez que eu digitar um novo número uma nova tabuada será gerada. 
        tabuada.innerHTML = '';
        while (c <= 10){
            //criando um elemento 'option'
            let item = document.createElement('option');
            //realizando o cálculo
            item.text = `${numero} x ${c} = ${numero * c}`;
            //adicionando o resultado na tabuada 
            tabuada.appendChild(item);
            c++;
        }
    }
}