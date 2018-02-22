	$(function(){
		/*search ctrl start*/
		/*搜索框...*/
		$("#search").mouseenter(function(){
			$("#search").addClass("enter").removeClass("search_input");
		}).mouseout(function(){
			$("#search").removeClass("enter").addClass("search_input");
		})
		/*导航...*/
		$(".sky_header_nav li:not(:first-child,:last-child)").on("click",function(index){
			$(this).addClass("active").siblings(true).removeClass("active");
			if ($(this)[0].innerHTML === "技术分享") {
				$(".left_menu").css("display","block");
			} else{
				$(".left_menu").css("display","none");
			}
		})
		/*search ctrl end*/
		
		/*left_menu start*/
		    $('.left_menu_change dl dt').click(function(){
		        $(this).siblings('dd').slideToggle();
		    });
		/*left_menu end*/
	})


