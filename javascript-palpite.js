var round = 0;
var ano_escolhido;
console.log("Pontuação: " + pontuacao(5,10));
console.log("Pontuação: " + pontuacao(10,10));
console.log("Pontuação: " + pontuacao(9,10));
console.log("Pontuação: " + pontuacao(10,8));
console.log("Pontuação: " + pontuacao(10,7));

// MAIN

newRound();

/* Função para exibir ano selecionado */
const input_ano = document.querySelector("input");
input_ano.addEventListener("change", () => {
    document.getElementById("ano-selecionado").innerHTML = input_ano.value;
})


/* Função do Aperto do Botão Enviar */
function newRound(){
    // Zera mostrador do ano
    document.getElementById("ano-selecionado").innerHTML = "----";

    if (round != 5) {
        if(round != 0){
            var ano_escolhido = document.getElementById(input-ano).value;
            console.log("Ano Escolhido: " + ano_escolhido);

            // Retorna visual do elemento atual
            var elemento_round = document.getElementById(round.toString());
            elemento_round.style.backgroundColor = "#fff";
            elemento_round.style.color = "#8448d7";
        }

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
    }
    
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
        case 0: return 20;
        case 1: return 10;
        case 2: return 5;
        default: return 0;
    }
}