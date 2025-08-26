// MAP E LISTAS

var fotos = new Map();
fotos.set("fotos-6b/foto2019.jpg", 2019);
fotos.set("fotos-6b/foto2020.jpg", 2020);
fotos.set("fotos-6b/foto2022_2.jpg", 2022);
fotos.set("fotos-6b/foto2022.jpeg", 2022);
fotos.set("fotos-6b/foto2024_2.jpg", 2024);
fotos.set("fotos-6b/foto2024.jpg", 2024);
fotos.set("fotos-6b/foto2025.jpeg", 2025)

const acertos = [];
const numerosUsados = [];
const fotosEscolhidas = [];

// VARIÁVEIS
var round = 1;
var ano_escolhido;
var pontuacaoFinal = 0;
numDeFotos = fotos.size;

//----------------------------------------------------------//
// CONFIGURAÇÃO INICIAL
//----------------------------------------------------------//

/// Botão Round 1 selecionado
document.getElementById("1").style.color = "#fff";
document.getElementById("1").style.backgroundColor = "#8448d7"

/// Escolha da foto
escolhaDeFoto();

/** Exibição de ano selecionado */
var anoMostrador = document.getElementById("ano-selecionado");
const inputAno = document.querySelector("input");
inputAno.addEventListener("change", () => {
    anoMostrador.innerHTML = inputAno.value;
})

// ----------------------------------------------------------//
// FUNÇÕES
//----------------------------------------------------------//

/** Função do Aperto do Botão Enviar */
function newRound(){
    // Analisa se o ano foi escolhido
    if (anoMostrador.innerHTML == "----"){
        alert("Escolha um ano");
        return;
    }

    // Esconde a dica
    document.querySelector("section").innerHTML = "";

    // Captura os pontos da rodada
    let fotoTela = document.getElementById("foto-palpite"); // foto atual
    let anoFotoTela = fotos.get(fotoTela.getAttribute("src"));

    pontuacaoFinal += pontuacao(anoFotoTela, inputAno.value);

    // Exibe pontuação
    document.getElementById("pontos-atuais").innerHTML = pontuacaoFinal + "/100"

    // Muda mostrador
    mudaMostradorRound();

    // Troca a foto
    escolhaDeFoto();

}

/* Lógica dos pontos */
// Diferença = Pontos
// 0 = 20 pnts
// 1 = 10 pnts
// 2 = 5 pnts
// +3 = 0 pnts


/** Função de Cálculo de Pontução */
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

/** Função para Alterar Round (Aparência e Página)*/
function mudaMostradorRound(){
// Zera mostrador do ano
    document.getElementById("ano-selecionado").innerHTML = "----";

    if (round != 5) {

        // DEBUG
        var ano_escolhido = inputAno.value;
        console.log("Ano Escolhido: " + ano_escolhido);
        // FIM DEBUG

        // Retorna visual do elemento atual
        var elemento_round = document.getElementById(round.toString());
        elemento_round.style.backgroundColor = "#fff";
        elemento_round.style.color = "#8448d7";

        // Muda o round e visual do elemento
        round++;
        elemento_round = document.getElementById(round.toString());
        elemento_round.style.backgroundColor = "#8448d7";
        elemento_round.style.color = "#fff";

    } else {
        // Final dos Palpites
        
        //console.log("Próxima Tela");
        console.log("Pontuação Final: " + pontuacaoFinal);
        console.log("Acertos: " + acertos);

        // Guarda informações (temporariamente) para próxima página 
        sessionStorage.setItem('pontuacao-final', pontuacaoFinal);
        sessionStorage.setItem('acertos', JSON.stringify(acertos));
        sessionStorage.setItem('fotos-escolhidas', JSON.stringify(fotosEscolhidas));

        // Muda de página
        window.location.href ="tela-resultado.html";
    }
}

/** Função de Número Aleatório */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Função de Escolha de Foto */
function escolhaDeFoto(){
    //// uma chave aleatória da biblioteca fotos
while (true){
    var numeroAletorio = getRandomIntInclusive(1, fotos.size)

    // se o número não foi usado:
    if (numerosUsados.indexOf(numeroAletorio) == -1){
        numerosUsados.push(numeroAletorio);
        break;
    } else {
        if(numerosUsados.length == numDeFotos){ break; }
        continue;
    }
}

// Procura pela foto
const iteradorFotos = fotos.keys();
var fotoAleatoria;
for (let i = 0; i < numeroAletorio; i++){
    fotoAleatoria = iteradorFotos.next().value;
}

// Adiciona foto na página
document.getElementById("foto-palpite").setAttribute("src", fotoAleatoria);

// Guarda foto escolhida
fotosEscolhidas.push(fotoAleatoria);
}

/** Função de Dica */
function dica(){
    const sect = document.querySelector("section")
    sect.textContent = "Dica: Aí fica fácil demais, pensa ae";

}