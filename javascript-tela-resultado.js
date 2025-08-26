//----------------------------------------------------------//
// Recuperar dados do sessionStorage
//----------------------------------------------------------//
const pontuacaoFinal = sessionStorage.getItem('pontuacao-final');
const acertos = JSON.parse(sessionStorage.getItem('acertos'));
const numAcertos = sessionStorage.getItem('num-acertos');
const fotosEscolhidas = JSON.parse(sessionStorage.getItem('fotos-escolhidas'));


console.log(acertos);

//----------------------------------------------------------//
// Mostrar fotos
// Mostrar erros e acertos
//----------------------------------------------------------//
const numFotos = 5;
const divFotos = document.getElementById("fotos");
var aux = 0; // auxiliar

while(aux != numFotos){
    // liga a imagem que aparece à lista de imagens fotosEscolhidas
    let foto = divFotos.children[aux];
    foto.setAttribute('src', fotosEscolhidas[aux]);
    if (acertos[aux] == 0){
        // Desatura respostas erradas
        document.getElementById(foto.id).style.filter = "saturate(0)";
    } else {
        // Aplica borda verde às corretas
        document.getElementById(foto.id).style.borderColor = "#72cb26"
        document.getElementById(foto.id).style.borderWidth = "0.5rem"
    }
    aux++;
}

//----------------------------------------------------------//
// Mostrar Pontuação
//----------------------------------------------------------//
document.getElementById("resultado").innerHTML = numAcertos + "/5"

//----------------------------------------------------------//
// Mensagens
//----------------------------------------------------------//
var mensagemFinal;

if (numAcertos == 0){
    mensagemFinal = "Paia ó"
} else if(numAcertos < 3){
    mensagemFinal = "Tá no caminho"
} else if(numAcertos < 5){
    mensagemFinal = "Boa! Tá quase lá"
} else {
    mensagemFinal = "MANDOU MUITO BEM!!!"
}

document.getElementById("mensagem-resultado").innerHTML = mensagemFinal;

//----------------------------------------------------------//
// Lógica de Liberação do botão de conquista
//----------------------------------------------------------//
if(numAcertos == 5){
    // Altera aparência
    document.getElementById("div-conquista").style.filter = "none";
    document.getElementById("div-conquista").style.opacity = "100%";

    // Habilita os confetis
    document.getElementById("div-conquista").setAttribute("onclick", "jogarConfeti()")
}

//----------------------------------------------------------//
// Animação do Confete
//----------------------------------------------------------//
function jogarConfeti(){
    const confettiWrapper = document.querySelector('.confetti-wrapper');
    // Generate confetti
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.setProperty('--fall-duration', `${Math.random() * 3 + 3}s`);
        confetti.style.setProperty('--confetti-color', getRandomColor());
        confettiWrapper.appendChild(confetti);
        }
        function getRandomColor() {
        const colors = ['#ff6347', '#ffa500', '#32cd32', '#1e90ff', '#ff69b4'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

//----------------------------------------------------------//
// Função Botão Tentar Novamente
//----------------------------------------------------------//
function novaTentativa(){
    sessionStorage.clear();
    window.location.href = "tela-palpite.html";
}