$(function() {
	set();
});

$(window).resize(function() {
	set();
});

function set() {
	$("#one").css("top", $("#articles").offset().top + $("#articles").height() / 2 + 10);
	$("#one").css("left", $("#articles").offset().left + $("#articles").width() + 4);
	$("#one").css("width", ($("#pc").offset().left - ($("#articles").offset().left + $("#articles").width()) - 4) / 2 + 2);

	$("#after").css("top", $("#one").offset().top + 1);
	$("#after").css("left", $("#one").offset().left + $("#one").width() - 1);
	$("#after").css("height", ($("#cyo").offset().top + $("#cyo").height() / 2) - $("#one").offset().top + 10);
	
	$("#two, #three, #four, #five, #six, #seven, #eight").css("left", $("#after").offset().left);
	$("#two, #three, #four, #five, #six, #seven, #eight").css("width", $("#pc").offset().left - $("#after").offset().left + 1);

	$("#two").css("top", $("#pc").offset().top + $("#pc").height() / 2 + 10);
	$("#three").css("top", $("#priv").offset().top + $("#priv").height() / 2 + 10);
	$("#four").css("top", $("#badsite").offset().top + $("#badsite").height() / 2 + 10);
	$("#five").css("top", $("#sns").offset().top + $("#sns").height() / 2 + 10);
	$("#six").css("top", $("#com").offset().top + $("#com").height() / 2 + 10);
	$("#seven").css("top", $("#iot").offset().top + $("#iot").height() / 2 + 10);
	$("#eight").css("top", $("#cyo").offset().top + $("#cyo").height() / 2 + 10);
	
	$("#one-one, #two-one, #three-one, #four-one, #five-one, #six-one").css("left", $("#pc").offset().left + ($("#twobox").offset().left - $("#pc").offset().left) / 2);

	$("#one-one").css("top", $("#pc").offset().top + $("#pc").height() + 30);
	$("#one-one").css("height", $("#twobox").offset().top - ($("#pc").offset().top + $("#pc").height()) - 1);
	$("#two-one").css("top", $("#priv").offset().top + $("#priv").height() + 30);
	$("#two-one").css("height", $("#twobox").offset().top - ($("#pc").offset().top + $("#pc").height()) - 1);
	$("#three-one").css("top", $("#badsite").offset().top + $("#badsite").height() + 30);
	$("#three-one").css("height", $("#fourbox").offset().top - ($("#badsite").offset().top + $("#badsite").height()) - 1);
	$("#four-one").css("top", $("#sns").offset().top + $("#sns").height() + 30);
	$("#four-one").css("height", $("#fourbox").offset().top - ($("#badsite").offset().top + $("#badsite").height()) - 1);

	$("#one-two, #one-three, #two-two, #two-three, #three-two, #three-three, #three-four, #three-five").css("left", $("#one-one").offset().left + 1)
	.css("width", $(".sitemappagebox a:eq(3)").offset().left - $("#one-one").offset().left);

	$("#one-two").css("top", $(".sitemappagebox a:eq(3)").offset().top + $(".sitemappagebox a:eq(3)").height() / 2 + 10);
	$("#one-three").css("top", $(".sitemappagebox a:eq(4)").offset().top + $(".sitemappagebox a:eq(4)").height() / 2 + 10);
	$("#two-two").css("top", $(".sitemappagebox a:eq(6)").offset().top + $(".sitemappagebox a:eq(6)").height() / 2 + 10);
	$("#two-three").css("top", $(".sitemappagebox a:eq(7)").offset().top + $(".sitemappagebox a:eq(7)").height() / 2 + 10);
	$("#three-two").css("top", $(".sitemappagebox a:eq(9)").offset().top + $(".sitemappagebox a:eq(7)").height() / 2 + 10);
	$("#three-three").css("top", $(".sitemappagebox a:eq(10)").offset().top + $(".sitemappagebox a:eq(7)").height() / 2 + 10);
	$("#three-four").css("top", $(".sitemappagebox a:eq(11)").offset().top + $(".sitemappagebox a:eq(7)").height() / 2 + 10);
	$("#three-five").css("top", $(".sitemappagebox a:eq(12)").offset().top + $(".sitemappagebox a:eq(7)").height() / 2 + 10);
}
