const listaAnimes = document.querySelectorAll('.botao');

for (var contador = 0; contador < listaAnimes.length; contador++) {
    const botao = listaAnimes[contador];
    const anime = botao.classList[1];
    const idAnime = `#anime_${anime}`

    botao.onclick = function (){
        console.log(idAnime)
    }
    
    botao.onclick = function(){
        botao.classList.add('botaoAtivo');
    }
}