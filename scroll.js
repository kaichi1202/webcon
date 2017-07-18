$(function(){
	setTopButton();

	$(window).scroll(function(){
		setTopButton();
	});
});

function setTopButton(){
	if($(window).scrollTop() + $(window).height() >= $('html').height() - 83){
		$('.totop').css('position', 'absolute');
		$('.totop').css('top', $('html').height() - 180);
	}else{
		$('.totop').css('position', 'fixed');
		$('.totop').css('top', '');
	}
}
