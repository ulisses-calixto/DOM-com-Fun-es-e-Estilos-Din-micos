//Aqui é Ulisses...
//primeiro eu fiz duas funções separadas, primeira mudarBG e segunda corH1. Mas, acabei juntando as duas.
//mudar cor do fundo e texto, agora...
let corEscolhida = prompt("digite o nome ou o código hexadecimal da cor do background:"); //<--prompt, setar a cor.
function mudarBG(cor) { //<--função mudarBG
    document.body.style.backgroundColor = cor; //<--estilo da página.
    let corH1 = document.querySelector('h1'); //<--variável que seleciona o 'h1'.
    if (document.body.style.backgroundColor === 'black' || document.body.style.backgroundColor === '#000000') {
        corH1.style.color = 'white'; //<--se BG = black, altera o 'h1' para 'white'.
    }else if (document.body.style.backgroundColor === 'white' || document.body.style.backgroundColor === '#ffffff') {
        corH1.style.color = 'black';//<--se não se BG = white, h1 = black
    }
}
mudarBG(corEscolhida);

//É possível colocar o document.body.style.backgroundColor = cor, dentro de uma variável. Pouparia tempo.
//Esse operador '||'(ou) não era do meu conhecimento. Pesquisei sobre os Operadores Lógicos em .js no google mesmo
//para usá-lo aqui..
