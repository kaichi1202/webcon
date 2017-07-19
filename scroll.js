$(function(){
	setTopButton();

	$(window).scroll(function(){
		setTopButton();
	});
});

function setTopButton(){
	if($(window).scrollTop() + $(window).height() >= $('html').height() - 130){
		$('.totop').css('position', 'absolute');
		$('.totop').css('top', $('html').height() - 180);
		$('.totop').css('bottom', '');
	}else{
		$('.totop').css('position', 'fixed');
		$('.totop').css('top', '');
		$('.totop').css('bottom', '0');
	}
}
