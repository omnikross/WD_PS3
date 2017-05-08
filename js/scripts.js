$(document).ready(function () {
	var contacts = ["Jenny Hess", "Elliot Fu", "Stevie Feliciano","Christian", "Matt"];
	$(".wrapperDropdown").append('<ul>');
	$(".wrapperDropdown ul").append('<span>');
	
	for (var i = 0; i < contacts.length; i++) {
		$(".wrapperDropdown ul").append('<li><a>' + contacts[i] + '</a></li>');
	}

	$(".wrapperDropdown span").addClass("dropdown").text("Select Friend").prependTo(".wrapperDropdown ul"); 
	$(".wrapperDropdown ul").addClass("list");
	$(".list").click(function() {
		$(".wrapperDropdown li").toggle(300);
	})
	$(".wrapperDropdown li").click(function() {
		$(".dropdown").html($(this).text())
	});
});
