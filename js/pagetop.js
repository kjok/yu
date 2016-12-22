$(window).scroll(function() {
	var s = $(this).scrollTop();
	var m = 300;
	if (s > m) {
		$("#page-top").fadeIn('slow');
	} else {
		$("#page-top").fadeOut('slow');
	}
});

$(function() {
	$("#page-top").css('cursor', 'pointer');
	$("#page-top").css('display', 'none');
	$("#page-top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 'slow');
	});

	$.pjax({
		area: '#pjaxContent',
		load: {
			head: 'base, meta, link',
			css: true,
			script: true
		},
		cache: {
			click: true,
			submit: false,
			popstate: true
		},
		link: 'a.pjax',
		//読み込み待機時間（オーバーした場合通常の遷移）
		ajax: {
			timeout: 3000
		}
	});
});
