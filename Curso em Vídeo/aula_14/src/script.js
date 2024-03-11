
function verificar(){
    var data = new Date();
    var anoAtual = data.getFullYear();
    var anoDeNascimento = window.document.getElementById('nascimento').value;
    var descricao = window.document.querySelector('div#descricao');

    if (anoDeNascimento.length == 0 || Number(anoDeNascimento) > anoAtual){
        window.alert('[Erro!] Verifique os dados e tente novamente!');
    } else {
        
        var opcoes = window.document.getElementsByName('sexo');
        var idade = (anoAtual - Number(anoDeNascimento));
        var genero = '';

        //criando uma tag img com id 'imagem' de forma dinâmica.
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'imagem');

        if (opcoes[0].checked){
            
            if (idade >= 0 && idade < 10){
                //criança
                genero = 'um Menino';
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/bebe_M.jpg');

            } else if (idade < 21) {
                //jovem
                genero = 'um Jovem';
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/jovem_M.jpg');
            
            } else if (idade < 50) {
                //adulto 
                genero = 'um Homem';
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/adulto_M.jpg');

            } else {
                //idoso
                genero = 'um Senhor'; 
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/idoso_M.jpg');

            }

        } else if (opcoes[1].checked){
            
            if (idade >= 0 && idade < 10){
                //criança
                genero = 'uma Menina';
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/bebe_F.jpg');

            } else if (idade < 21) {
                //jovem
                genero = 'uma Jovem';
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/jovem_F.jpg');
            
            } else if (idade < 50) {
                //adulto 
                genero = 'uma Mulher';
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/adulto_F.jpg');

            } else {
                //idoso 
                genero = 'uma Senhora';
                imagem.setAttribute('src', '/Curso em Vídeo/aula_14/imagens/idoso_F.jpg');

            }
        }
        descricao.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        //adicionando o elemento 'imagem' 
        descricao.appendChild(imagem);
    }
}
