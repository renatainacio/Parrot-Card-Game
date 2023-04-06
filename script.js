let numeroCartas;
while (numeroCartas < 2 || numeroCartas % 2 != 0 || numeroCartas > 14)
   numeroCartas = prompt("Informe a quantidade de cartas:");
alert("o numero de cartas escolhido foi " + numeroCartas);
function showCard(card){
   card.querySelector(".front-face").classList.toggle("front");
   card.querySelector(".back-face").classList.toggle("back");
}