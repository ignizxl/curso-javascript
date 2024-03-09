
//switch case

//a estrutura do switch case é bem simples, imagine cada case como um if seguido vários else if e o default como um else
//exemplos

/**
 * domingo
 * segunda
 * terça
 * quarta
 * quinta
 * sexta
 * sábado
 * */


var diaDaSemana = new Date().getDay(); //pegando o dia da semana e armazenando dentro de 'diaDaSemana'
switch (diaDaSemana){

    //se for igual a zero, hoje é domingo
    //obs: ao fim de cada caso, coloque um break 
    case 0:
        console.log("Hoje é domingo. #CurandoARessaca, #ComeçandoACura");
        break;
        //se for igual a 6, hoje é sabádo
    case 6:
        console.log("Hoje é sabádo. #Curtição, #PartiuBalada");
        break;
    //senão, é um dia útil 
    default:
        console.log("Dia normal. #VaiEstudarVagabundo!");
        break;
}