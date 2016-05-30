/*HKing 2016-04-29*/


function sm(msg){
	chrome.runtime.sendMessage(
	    {
	    	url: msg
	    },
		function( response ){}
	);
}


jQuery(document).ready(function($) {

	var oUrl = "http://1024.xp303.info/pw/thread.php?fid=3&page=";
	for (var i = 1; i < 69; ++i) {
		$.ajax({
			url: oUrl+i,
			async: true,
			success:function(data){
				var target = $(data).find("#ajaxtable tr.t_one");
				target.each(function(index,el){
					var t = $(el).find('td:eq(1) h3 a');
					$.ajax({
						url: t.attr('href'),
						async: true,
						success:function(data){
							if(/新山/.test(data)){
								sm(t.attr('href'));
								console.log("写入");
							}else{
								console.log("没找到！");
							};
						}
					});
				});
			}
		});
	}


	//var target = $("#ajaxtable tr.t_one");

	/*
	target.each(function(index,el){
		var t = $(el).find('td:eq(1) h3 a');
		$.ajax({
			url: t.attr('href'),
			async: true,
			success:function(data){
				if(/花井/.test(data)){
					sm(t.attr('href'));
					console.log("写入");
				}else{
					console.log("没找到！");
				};
			}
		});
	});
	*/


});
