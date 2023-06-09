let primeiraCarta;
let segundaCarta;
let numeroCartas = 0;
let cartasViradasJogada = 0;
let jogadas = 0;
let pontos = 0;
let tempoDeJogo;
let idInterval;
let reiniciar = "sim";

iniciarJogo();

function iniciarJogo() {
   numeroCartas = 0;
   cartasViradasJogada = 0;
   jogadas = 0;
   pontos = 0;
   tempoDeJogo = 0;
   while (numeroCartas < 4 || numeroCartas % 2 != 0 || numeroCartas > 14)
      numeroCartas = prompt("Informe a quantidade de cartas (min:4, max:14):");
   document.querySelector(".cards").innerHTML = "";
   document.querySelector(".relogio").innerHTML = tempoDeJogo;
   const gifs = ["img/bobrossparrot.gif",
                  "img/explodyparrot.gif",
                  "img/fiestaparrot.gif",
                  "img/metalparrot.gif",
                  "img/revertitparrot.gif",
                  "img/tripletsparrot.gif",
                  "img/unicornparrot.gif"]

   const imagensGameAtual = [];

   for(let i = 0; i < numeroCartas/2; i++) {

      imagensGameAtual.push(gifs[i]);
      imagensGameAtual.push(gifs[i]);
   }

   imagensGameAtual.sort(comparador);
   for (let i = 0; i < numeroCartas; i++) {
      document.querySelector(".cards").innerHTML += `
      <div class="card" onclick="clickCard(this)" data-test="card">
         <div class="front-face face">
            <img src="img/back.png" data-test="face-down-image"/>
         </div>
         <div class="back-face face">
            <img src="${imagensGameAtual[i]}" data-test="face-up-image"/>
         </div>
      </div>
      `
   }
   idInterval = setInterval(contaTempo, 1000);
}


function comparador() { 
	return Math.random() - 0.5; 
}


function clickCard(card){
   if (reiniciar == "sim")
   {
      if (cartasViradasJogada == 0 || (cartasViradasJogada == 1 && card != primeiraCarta) ){
         flipCard(card);
         if (cartasViradasJogada == 0)
            primeiraCarta = card;
         else
            segundaCarta = card;
         cartasViradasJogada++;
         jogadas++;
         if (cartasViradasJogada == 2) {
            if(primeiraCarta.querySelector(".back-face").innerHTML == segundaCarta.querySelector(".back-face").innerHTML)
            {
               pontos += 2;
               cartasViradasJogada = 0;
               if(pontos == numeroCartas)
                  setTimeout(ganhou, 100);
            }   
            else
               setTimeout(notAMatch, 1000);
         }
      }
   }
}

function notAMatch() {
   flipCard(primeiraCarta);
   flipCard(segundaCarta);
   cartasViradasJogada = 0;
}

function ganhou(){
   clearInterval(idInterval);
   alert(`Você ganhou em ${jogadas} jogadas! A duração do jogo foi de ${tempoDeJogo} segundos!`);
   reiniciar = "";
   while (reiniciar != "sim" && reiniciar != "não")
      reiniciar = prompt("Você gostaria de reiniciar a partida? (sim ou não)");
   if (reiniciar == "sim")
      iniciarJogo();
}

function flipCard(card){
   card.querySelector(".front-face").classList.toggle("front");
   card.querySelector(".back-face").classList.toggle("back");
}

function contaTempo() {
   tempoDeJogo++;
   document.querySelector(".relogio").innerHTML = tempoDeJogo;
}
