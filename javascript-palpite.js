// MAIN
var round = 0;

newRound();
/* Função para exibir ano selecionado */
const input_ano = document.querySelector("input");
input_ano.addEventListener("change", () => {
    document.getElementById("ano-selecionado").innerHTML = input_ano.value;
})


/* Função para mudar aparência dos Rounds */
function newRound(){

    if (round != 5) {
        if(round != 0){
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