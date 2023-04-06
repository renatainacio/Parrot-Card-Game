let numeroCartas;

while (numeroCartas < 2 || numeroCartas % 2 != 0 || numeroCartas > 14)
   numeroCartas = prompt("Informe a quantidade de cartas (min:2, max:14):");

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
   <div class="card" onclick="showCard(this)">
      <div class="front-face face">
         <img src="img/back.png"/>
      </div>
      <div class="back-face face">
         <img src="${imagensGameAtual[i]}"/>
      </div>
   </div>
   `
}

function showCard(card){
   card.querySelector(".front-face").classList.toggle("front");
   card.querySelector(".back-face").classList.toggle("back");
}