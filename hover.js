var mouseX;
var mouseY;
var beforeMouseX;
var beforeMouseY;
var elementWidth;
var distancePlus;
var distanceMinus;
var distance2;
$(function() {
	set();
	$('#box1').hover(function() {
		hover('#box1', '#hover1');
	}, function() {
		out('#box1', '#hover1');
	});
	$('#box2').hover(function() {
		hover('#box2', '#hover2');
	}, function() {
		out('#box2', '#hover2');
	});
	$('#box3').hover(function() {
		hover('#box3', '#hover3');
	}, function() {
		out('#box3', '#hover3');
	});
	$('#box4').hover(function() {
		hover('#box4', '#hover4');
	}, function() {
		out('#box4', '#hover4');
	});
	$('#box5').hover(function() {
		hover('#box5', '#hover5');
	}, function() {
		out('#box5', '#hover5');
	});
	$('#box6').hover(function() {
		hover('#box6', '#hover6');
	}, function() {
		out('#box6', '#hover6');
	});
	$('#box7').hover(function() {
		hover('#box7', '#hover7');
	}, function() {
		out('#box7', '#hover7');
	});
	$('#box8').hover(function() {
		hover('#box8', '#hover8');
	}, function() {
		out('#box8', '#hover8');
	});
	$(window).mousemove(function(e) {
		beforeMouseX = mouseX;
		beforeMouseY = mouseY;
		mouseX = e.pageX;
		mouseY = e.pageY;
	});
	$(window).resize(function() {
		set();
	});
});

function hover(box, hover) {
	$(hover).css('top', '-' + elementWidth + 'px');
	$(hover).css('left', '0px');
	switch (inCheck(box)) {
		case 0:
			$(hover).animate({
				top: distancePlus
			}, 'fast');
			break;
		case 1:
			$(hover).css('top', distance2);
			$(hover).animate({
				top: distanceMinus
			}, 'fast');
			break;
		case 2:
			$(hover).css('top', distancePlus);
			$(hover).css('left', distanceMinus);
			$(hover).animate({
				left: distancePlus
			}, 'fast');
			break;
		case 3:
			$(hover).css('top', distancePlus);
			$(hover).css('left', distancePlus);
			$(hover).animate({
				left: distanceMinus
			}, 'fast');
			break;
		default:
			break;
	}
}

function out(box, hover) {
	switch (outCheck(box)) {
		case 0:
			$(hover).stop(false, true).animate({
				top: distanceMinus
			}, 'fast');
			break;
		case 1:
			$(hover).stop(false, true).animate({
				top: distancePlus
			}, 'fast');
			break;
		case 2:
			$(hover).stop(false, true).animate({
				left: distanceMinus
			}, 'fast');
			break;
		case 3:
			$(hover).stop(false, true).animate({
				left: distancePlus
			}, 'fast');
			break;
		default:
			break;
	}
}

function inCheck(element) {
	var elementX = $(element).offset().left;
	var elementY = $(element).offset().top;
	if (beforeMouseY <= elementY) return 0;
	if (beforeMouseY >= elementY + elementWidth) return 1;
	if (beforeMouseX <= elementX) return 2;
	if (beforeMouseX >= elementX + elementWidth) return 3;
	return 4;
}

function outCheck(element) {
	var elementX = $(element).offset().left;
	var elementY = $(element).offset().top;
	var centerX = elementX + elementWidth / 2;
	var centerY = elementY + elementWidth / 2;
	var defferenceX = mouseX - centerX;
	var defferenceY = mouseY - centerY;
	var radian = Math.atan2(defferenceY, defferenceX);
	var degree = radian * (180 / Math.PI);
	if (degree >= -135 && degree < -45) return 0;
	if (degree >= 45 && degree < 135) return 1;
	if (degree >= 135 && degree < 180 || degree >= -180 && degree < -135) return 2;
	if (degree >= -45 && degree < 45) return 3;
	return 4;
}

function set() {
	elementWidth = $('.box img').width();
	$('.box').css('height', elementWidth);
	$('#hover1, #hover2, #hover3, #hover4, #hover5, #hover6, #hover7, #hover8').css('width', elementWidth);
	$('#hover1, #hover2, #hover3, #hover4, #hover5, #hover6, #hover7, #hover8').css('height', elementWidth);
	$('#hover1, #hover2, #hover3, #hover4, #hover5, #hover6, #hover7, #hover8').css('top', '-' + elementWidth + 'px');
	$('#hover1, #hover2, #hover3, #hover4, #hover5, #hover6, #hover7, #hover8').css('left', '0px');
	distancePlus = '+=' + elementWidth;
	distanceMinus = '-=' + elementWidth;
	distance2 = '+=' + elementWidth * 2;
}