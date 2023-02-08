/* Fonction pour faire apparaître le fond noir de la barre de navigation */
$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('nav').addClass('changeTransparence')
      } else {
         $('nav').removeClass('changeTransparence')
      }
   });
});

/* Fonction qui change le texte de .moisburger */
var text = ["It's the best of the best<div>Gordon Ramsay</div>", "J'adore le steak, très juteux<div>Jean-Paul Weber</div>", "Incomparable aux autres burgers<div>Georges St-Pierre</div>", "Mmmmm...<div>Moi</div>"];
var counter = 1;
var elem = $("#quote");
setInterval(change, 4000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn(1200);
    });
}
change();
/* Fonction pour carousel*/
let img = document.getElementById("defile");
let classes = ["burgerdefile", "paindefile", "bacondefile"];
let i = 1;

function changeClass() {
	if(i > 2) {
		i = 0;
	}
	img.className = classes[i];
	i++;
}

function timer() {
	setInterval(changeClass, 3000);
}

function scriptStart(){
   timer();
}