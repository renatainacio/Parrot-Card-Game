let numeroCartas = 0;
let cartasViradasJogada = 0;
let jogadas = 0;
let primeiraCarta;
let segundaCarta;
let pontos = 0;

while (numeroCartas < 4 || numeroCartas % 2 != 0 || numeroCartas > 14)
   numeroCartas = prompt("Informe a quantidade de cartas (min:4, max:14):");

const gifs = ["img/bobrossparrot.gif",
               "img/explodyparrot.gif",
               "img/fiestaparrot.gif",
               "img/metalparrot.gif",
               "img/revertitparrot.gif",
               "img/tripletsparrot.gif",
               "img/unicornparrot.gif"]

const imagensGameAtual = [];

for(i = 0; i < numeroCartas/2; i++) {

   imagensGameAtual.push(gifs[i]);
   imagensGameAtual.push(gifs[i]);
}

imagensGameAtual.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

for (i = 0; i < numeroCartas; i++) {
   document.querySelector(".cards").innerHTML += `
   <div class="card" onclick="clickCard(this)">
      <div class="front-face face">
         <img src="img/back.png"/>
      </div>
      <div class="back-face face">
         <img src="${imagensGameAtual[i]}"/>
      </div>
   </div>
   `
}

function clickCard(card){
   if (cartasViradasJogada <= 1) {
      flipCard(card);
      if (cartasViradasJogada == 0)
         primeiraCarta = card;
      else
         segundaCarta = card;
      cartasViradasJogada++;
   }
   if (cartasViradasJogada == 2) {
      if(primeiraCarta.querySelector(".back-face").innerHTML == segundaCarta.querySelector(".back-face").innerHTML)
      {
         pontos += 2;
         cartasViradasJogada = 0;
         jogadas++;
         console.log(pontos);
      }   
      else
         setTimeout(notAMatch, 1000);
   }
}

function notAMatch() {
   flipCard(primeiraCarta);
   flipCard(segundaCarta);
   cartasViradasJogada = 0;
   jogadas++;
}

function flipCard(card){
   card.querySelector(".front-face").classList.toggle("front");
   card.querySelector(".back-face").classList.toggle("back");
}