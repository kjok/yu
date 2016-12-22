
$(window).scroll(function () {
	var s = $(this).scrollTop();
	var m = 300;
	if(s > m) {
		$("#page-top").fadeIn('slow');
	}else{
		$("#page-top").fadeOut('slow');
	}
}); 

$(function() {
	$("#page-top").css('cursor','pointer');
	$("#page-top").css('display','none');
	$("#page-top").click(function(){
		$("html,body").animate({scrollTop:0},'slow');
	});
});

