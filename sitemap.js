$(function() {
	set();
});

$(window).resize(function() {
	set();
});

function set() {
	$("#one").css("top", $("#articles").offset().top + $("#articles").height() / 2 + 10);
	$("#one").css("left", $("#articles").offset().left + $("#articles").width() + 5);
	$("#one").css("width", $("#pc").offset().left - ($("#articles").offset().left + $("#articles").width()) - 4);

	$("#two").css("top", $("#priv").offset().top + $("#priv").height() / 2 + 10);
	$("#two").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width() / 2);

	$("#three").css("top", $("#badsite").offset().top + $("#badsite").height() / 2 + 10);
	$("#three").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width() / 2);

	$("#four").css("top", $("#sns").offset().top + $("#sns").height() / 2 + 10);
	$("#four").css("left", $("#articles").offset().left + $("#articles").width() + 5 + $("#one").width() / 2);

	$("#five").css("top", $("#pc").offset().top + $("#pc").height() + 31);
	$("#five").css("left", $("#pc").offset().left + ($("#twobox").offset().left - $("#pc").offset().left) / 2);
	$("#five").css("height", $("#twobox").offset().top - ($("#pc").offset().top + $("#pc").height()));
}