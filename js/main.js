var pos=0;
var intervalo;

$(document).on('ready',function(){ //esto indica que el doc ha sido cargado (evento ready cuando la pag es cargada)
	init();
})

function init(){
	$(".slider_controls li").on("click",handelClick);
	var width = $(".slider-containter").width();
	$(".slide").each(function(i,e){
		var url=$(e).data("background");
		$(e).css('background-image', "url("+(url+".jpg")+")");
		$(e).css('width', width+'px');
	});
	//clearInterval(intervalo);
	intervalo=setInterval(handelClick,10000);
}

function handelClick(){
	var slide_target=0;
	if($(this).parent().hasClass("slider_controls")){
		slide_target= $(this).index(); //el index se refiere al orden de las etiquetas en relacion al padre
		pos=slide_target;
		clearInterval(intervalo);
		intervalo=setInterval(handelClick,10000);
	}else{
		pos++;
		if(pos>=$(".slide").length){
			pos=0;
		}
		slide_target=pos;
	}

	/*$(".slideContainer").fadeOut('slow',function(){
		$(this).animate({
			'margin-left':-(slide_target * $(".slider-containter").width())+"px"
		},"slow", function(){
			$(this).fadeIn();
		});
	});*/ //este fragmento hace el fade para las imagenes que se muestran

	
		$(".slideContainer").animate({
			'margin-left':-(slide_target * $(".slider-containter").width())+"px"
		},"slow"); //este codigo mueve los slides 
}

