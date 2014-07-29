$(document).ready(function() {
	var i = 0;
	$.getJSON("http://rs.hankyates.com:3000/content", function(data) {
		data.forEach(function (tab, index) { //create as many tabs as there are names in the data set
			$(".tabs").append("<li class='tab' id=" + i + ">" + tab.name + "</li>");
			i++;
		});

		$(".tab").click(function() {
			$(".content").html(data[this.id].content); //find content by tab's id
			$(".tab").removeClass('selected');
			$(this).addClass('selected');
		});
	});
});