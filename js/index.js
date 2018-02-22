/*search ctrl start*/
	$(function(){
		/*搜索框...*/
		$("#search").mouseenter(function(){
			$("#search").addClass("enter").removeClass("search_input");
		}).mouseout(function(){
			$("#search").removeClass("enter").addClass("search_input");
		})
	})
	/*导航...*/
	$(".sky_header_nav li:not(:first-child,:last-child)").on("click",function(){
		$(this).addClass("active").siblings(true).removeClass("active");
	})

/*search ctrl end*/
