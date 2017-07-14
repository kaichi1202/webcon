var mouseX;
var mouseY;
var beforeMouseX;
var beforeMouseY;

$(function(){
	$('.box1').hover(
		function(){
			switch (check('.box1')){
				case 0:
					$('.hover').css('background-color', 'blue');
					$('.hover').show();
					break;
				case 1:
					$('.hover').css('background-color', 'red');
					$('.hover').show();
					break;
				case 2:
					$('.hover').css('background-color', 'green');
					$('.hover').show();
					break;
				case 3:
					$('.hover').css('background-color', 'white');
					$('.hover').show();
				default:
					break;
			}
		},
		function(){
			$('.hover').hide();
		}
	);

	$(window).mousemove(function(e){
		beforeMouseX = mouseX;
		beforeMouseY = mouseY;
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
});

/**
 * 引数で受け取った要素にどの方向からカーソルが入ったかを返します。
 * @param  {string} element 要素
 * @return {number}         方向(上:0 下:1 左:2 右:3)
 */
function check(element){
	var elementX = $(element).offset().left;
	var elementY = $(element).offset().top;
	var elementWidth = $(element).width();

	if(beforeMouseY <= elementY) return 0;
	if(beforeMouseY >= elementY + 220) return 1;
	if(beforeMouseX <= elementX) return 2;
	if(beforeMouseX >= elementX + elementWidth) return 3;
}
