function carregar(){
    var mensagem = window.document.getElementById("mensagem");
    //utilizando o querySelector para selecionar a 'img' da div que tiver o id 'imagem'.
    var imagem = window.document.querySelector("div#imagem img");
    //criando o objeto data.
    var data = new Date();
    //pegando a hora do sistema e atribuindo a 'hora_atual'.
    var hora_atual = data.getHours(); 
    mensagem.innerHTML = `Agora são exatamente ${hora_atual} horas.`;

    //as imagens irão ser modificadas dinâmicamente de acordo com a hora do sistema.
    if (hora_atual >= 0 && hora_atual < 12){
        //dia.
        imagem.src = "/aula_13/imagens/manhã.jpg";
        document.body.style.background = "#e2cd9f";
    } 
    else if (hora_atual >= 12 && hora_atual <= 18){
        //tarde.
        imagem.src = "/aula_13/imagens/tarde.jpg";
        document.body.style.background = "#b9846f";
    } 
    else {
        //noite.
        imagem.src = "/aula_13/imagens/noite.jpg";
        document.body.style.background = "#515154";
    }
}