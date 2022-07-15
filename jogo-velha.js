
const X = "X";
const O = "O";

const gamer = document.querySelectorAll(".quadrado-jogo");

var jogador = "X";
marcarJogadorAtivo(jogador);

function selecionarArea(posicaoLinha, posicaoColuna) {
    const getText = document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`).textContent;
    if(jogador === "X"){
        if(getText === ""){
            desenharSimbolo(X, posicaoLinha, posicaoColuna);
            vitoria();
            proximoJogador();
        }
    }   
    else{
        if(getText === ""){
            desenharSimbolo(O, posicaoLinha, posicaoColuna);
            vitoria();
            proximoJogador();
            }
        }
}

function proximoJogador(){
    jogador === "X" ? jogador = "O" : jogador = "X";
    marcarJogadorAtivo(jogador);
}

function vitoria(){
    const y = document.querySelectorAll(".quadrado-jogo");
    if(  
        verificarQuadrado(y[0],y[1],y[2]) | verificarQuadrado(y[3],y[4],y[5]) || verificarQuadrado(y[6],y[7],y[8]) || 
        verificarQuadrado(y[0],y[3],y[6]) ||verificarQuadrado(y[1],y[4],y[7]) || verificarQuadrado(y[2],y[5],y[8]) ||
        verificarQuadrado(y[0],y[4],y[8]) ||verificarQuadrado(y[2],y[4],y[6])
      )
    {
        gamer.forEach((quadrado) => {quadrado.removeAttribute("onclick");});
            exibirResultado(`O Jogador ${jogador} VENCEU!`);
    }else{
            verificandoQuadrados() ? exibirResultado("O Jogo deu EMPATE!"): '';
    }
}

function verificandoQuadrados(){
    for(var i in gamer){
        if(gamer[i].textContent ===''){
            return false;
        }       
    }
        return true;
}

function verificarQuadrado(q1, q2, q3){
    if(q1.textContent === q2.textContent &&
       q1.textContent === q3.textContent &&
       q1.textContent !== ""){
            return true;         
    }
         return false;
    }

function reiniciarJogo() {
location.reload();
}
