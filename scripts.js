$(function() {
	var contacts = ['Jenny Hess', 'Elliot Fu', 'Stevie Feliciano','Christian', 'Matt'];
	$("div").append('<ul>');
	$("ul").append('<span>');
	
	for (var i = 0; i < contacts.length; i++) {
		$("ul").append('<li><a>' + contacts[i] + '</a></li>');
	}
	$("li").append('<a>');

});
$(document).ready(function () {
	$("span").addClass("dropdown").text("Select Friend").prependTo("ul");
	$("ul").addClass("list");
	$(".list").click(function() {
		$("li").toggle(300);
	})
	$('li').click(function() {
		$('.dropdown').html($(this).text())
	});
});