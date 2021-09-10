$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "Lo strumento era realizzato in legno, scelto tra essenze poco deformabili per minimizzare gli errori dovuti all'alterazione nel tempo, e veniva anche sottoposto a trattamenti che ne riducevano la sensibilità alle variazioni di temperatura e umidità." );

	});

});

function pop_init_1( my_content ) {

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