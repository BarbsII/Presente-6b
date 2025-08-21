// Listas
const fotos = {"fotos/exemplo-corgi.png": 2019, "fotos/exemplo-pinguim.jpg": 2020, "fotos/exemplo-lontra.png": 2021};
const acertos = [];

// Variáveis
var round = 1;
var ano_escolhido;
var pontuacaoFinal = 0;

// CONFIGURAÇÃO INICIAL
document.getElementById("1").style.color = "#fff";
document.getElementById("1").style.backgroundColor = "#8448d7"

/* Função para exibir ano selecionado */
const inputAno = document.querySelector("input");
inputAno.addEventListener("change", () => {
    document.getElementById("ano-selecionado").innerHTML = inputAno.value;
})


/* Função do Aperto do Botão Enviar */
function newRound(){
    // Captura os pontos da rodada
    let fotoTela = document.getElementById("foto-palpite"); // foto atual
    let anoFotoTela = fotos[fotoTela.getAttribute("src")];
    
    pontuacaoFinal += pontuacao(anoFotoTela, inputAno.value);
    
    // Exibe pontuação
    document.getElementById("pontos-atuais").innerHTML = pontuacaoFinal + "/100"


    // Muda mostrador
    mudaMostradorRound();

    
    
}

/* Lógica dos pontos */
// Diferença = Pontos
// 0 = 20 pnts
// 1 = 10 pnts
// 2 = 5 pnts
// +3 = 0 pnts

function pontuacao(anoEscolhido, anoCorreto){
    // Valor absoluto da diferença
    diferenca = Math.abs(anoCorreto - anoEscolhido);

    // Retorno de Pontos
    switch (diferenca){
        case 0: acertos.push(1); return 20;
        case 1: acertos.push(0); return 10;
        case 2: acertos.push(0); return 5;
        default: acertos.push(0); return 0;
    }
}

function mudaMostradorRound(){
// Zera mostrador do ano
    document.getElementById("ano-selecionado").innerHTML = "----";

    if (round != 5) {
    
        var ano_escolhido = inputAno.value;
        console.log("Ano Escolhido: " + ano_escolhido);

        // Retorna visual do elemento atual
        var elemento_round = document.getElementById(round.toString());
        elemento_round.style.backgroundColor = "#fff";
        elemento_round.style.color = "#8448d7";
        

        // Muda o round e visual do elemento
        round++;
        elemento_round = document.getElementById(round.toString());
        //console.log(elemento_round);
        elemento_round.style.backgroundColor = "#8448d7";
        elemento_round.style.color = "#fff";

        // Escolhe a foto

    } else {

        round = 1;
        console.log("Próxima Tela");
        console.log("Pontuação Final: " + pontuacaoFinal);
        console.log("Acertos: " + acertos);
    }
}

