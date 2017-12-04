var tabuleiro,
    inc = 0,
    contLinha = 0,
    linhaPar = true,
    contDesenhaPecaBranca = 0,
    contDesenhaPecaPreta = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function desenharTabuleiro() {
    for (var i = 0; i <= 63; i++) {
        inc++;
        tabuleiro = document.createElement('div');
        pecas = document.createElement('img');

        if (linhaPar) {
            if (i % 2 != 0) {
                tabuleiro.id = 'cxPreta'
                pecas.setAttribute("draggable", "true");
                pecas.setAttribute("ondragstart", "drag(event)");
                pecas.setAttribute("onmousedown", "verificarPosicaoPeca(id)");
                tabuleiro.setAttribute("ondrop", "drop(event)");
                tabuleiro.setAttribute("ondragover", "allowDrop(event)");


                contDesenhaPecaPreta++;
                if (contDesenhaPecaPreta <= 12) {
                    pecas.id = 'pecaPreta' + i;
                    pecas.setAttribute("src", "imgs/imgChrome.png")
                    tabuleiro.appendChild(pecas)
                };
                if (contDesenhaPecaPreta >= 21) {
                    pecas.id = 'pecaBranca' + i;
                    pecas.setAttribute("src", "imgs/imgFirefox.png")
                    tabuleiro.appendChild(pecas)
                };
            } else {
                tabuleiro.id = 'cxBranca'
            }
        } else {
            if (i % 2 == 0) {
                tabuleiro.id = 'cxPreta'
                pecas.setAttribute("draggable", "true");
                pecas.setAttribute("ondragstart", "drag(event)");
                pecas.setAttribute("onmousedown", "verificarPosicaoPeca(id)");
                tabuleiro.setAttribute("ondrop", "drop(event)");
                tabuleiro.setAttribute("ondragover", "allowDrop(event)");
                contDesenhaPecaPreta++;
                if (contDesenhaPecaPreta <= 12) {
                    pecas.id = 'pecaPreta' + i;
                    pecas.setAttribute("src", "imgs/imgChrome.png")
                    tabuleiro.appendChild(pecas)
                };
                if (contDesenhaPecaPreta >= 21) {
                    pecas.id = 'pecaBranca' + i;
                    pecas.setAttribute("src", "imgs/imgFirefox.png")
                    tabuleiro.appendChild(pecas)
                };
            } else {
                tabuleiro.id = 'cxBranca'
            }
        }

        document.body.appendChild(tabuleiro);
        if (inc == 8) {
            (contLinha % 2 == 0) ? linhaPar = false : linhaPar = true;//verifico se a linha for par ira comecar o desenho com branco
            inc = 0;
            contLinha++;
            addLinha = document.createElement('br');
            document.body.appendChild(addLinha);
        }
    }
}

function funcaoIniciarJogo() {
    desenharTabuleiro();
    document.getElementById('playButton').style.display = 'none';
};

function verificarPosicaoPeca(id) {
    posicaoPeca = document.getElementById(id).getBoundingClientRect();
    console.log(posicaoPeca)
};