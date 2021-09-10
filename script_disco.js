$(document).ready(function() {

	$(".popup-me_4").click(function(){

		pop_init_4( "Il disco serviva a disporre le pertiche in successione e per il livellamento della pertica attraverso un filo a piombo che, se tangente alla superficie, assicurava la perfetta orizzontalità dello strumento." );

	});

});

function pop_init_4( my_content ) {

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