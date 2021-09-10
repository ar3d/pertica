$(document).ready(function() {

	$(".popup-me_3").click(function(){

		pop_init_3( "L'asta in legno terminava sulle estremità con due puntali a base circolare detti capituli (al singolare capitulum). Per aiutare l’agrimensore nelle misurazioni minori, anche le estremità erano graduate con segni indicanti i sottomultipli del piede. Puntali di questo tipo sono stati ritrovati a Pompei, in Via dell’Abbondanza, in una bottega appartenuta ad un certo Verus e nell’antico insediamento militare di Lauriacum, nei pressi dell’attuale città di Enns nell’Austria settentrionale." );

	});

});

function pop_init_3( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}