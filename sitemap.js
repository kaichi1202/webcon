$(function() {
	set();
});

$(window).resize(function() {
	set();
});

function set() {
	$("#one").css("top", $("#articles").offset().top + $("#articles").height() / 2 + 10);
	$("#one").css("left", $("#articles").offset().left + $("#articles").width() + 5);
	$("#one").css("width", ($("#pc").offset().left - ($("#articles").offset().left + $("#articles").width()) - 4) / 2 + 2);

	$("#after").css("top", $("#one").offset().top + 1);
	$("#after").css("left", $("#one").offset().left + $("#one").width() - 1);
	$("#after").css("height", ($("#cyo").offset().top + $("#cyo").height() / 2) - $("#one").offset().top + 10);

	$("#two").css("top", $("#pc").offset().top + $("#pc").height() / 2 + 10);
	$("#two").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#three").css("top", $("#priv").offset().top + $("#priv").height() / 2 + 10);
	$("#three").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#four").css("top", $("#badsite").offset().top + $("#badsite").height() / 2 + 10);
	$("#four").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#five").css("top", $("#sns").offset().top + $("#sns").height() / 2 + 10);
	$("#five").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#six").css("top", $("#com").offset().top + $("#com").height() / 2 + 10);
	$("#six").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#seven").css("top", $("#iot").offset().top + $("#iot").height() / 2 + 10);
	$("#seven").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#eight").css("top", $("#cyo").offset().top + $("#cyo").height() / 2 + 10);
	$("#eight").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#one-one").css("top", $("#pc").offset().top + $("#pc").height() + 31);
	$("#one-one").css("left", $("#pc").offset().left + ($("#twobox").offset().left - $("#pc").offset().left) / 2);
	$("#one-one").css("height", $("#twobox").offset().top - ($("#pc").offset().top + $("#pc").height()));

	$("#one-two").css("top", $("#cyo").offset().top + $("#cyo").height() / 2 + 10);
	$("#one-two").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());

	$("#eight").css("top", $("#cyo").offset().top + $("#cyo").height() / 2 + 10);
	$("#eight").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width());
}
