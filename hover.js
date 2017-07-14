var mouseX;
var mouseY;
var beforeMouseX;
var beforeMouseY;

$(function(){
		$('.box1').hover(
				function(){
						$('.hover').css('opacity', '1');
						switch (check('.box1')){
								case 0:
										$('hover').css('color', 'blue');
										break;
								default:
										break;
						}
				},
				function(){
						$('.hover').css('opacity', '0');
				}
		);

		$(window).mousemove(function(e){
			 beforeMouseX = mouseX;
			 beforeMouseY = mouseY;
			 mouseX = e.pageX;
			 mouseY = e.pageY;

			 console.log(mouseX, mouseY, beforeMouseX, beforeMouseY);
		});
});

function check(element){
		// 上:0 下:1 左:2 右:3
		var elementX = $(element).offset().top;
		var elementY = $(element).offset().left;
		var elementWidth = $(element).width();

		if(beforeMouseY >= elementY) return 0;
		if(beforeMouseY >= elementX + 220) return 1;
		if(beforeMouseX <= elementX) return 2;
		if(beforeMouseX >= elementX + elementWidth) return 3;
}
