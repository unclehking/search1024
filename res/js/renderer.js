// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function sm(msg){
	$("#wrap").append('<p><a href="'+msg+'" target="_blank">'+msg+'</a></p>')
}

function fuckImg(msg){
	$("#wrap").append('<p><img src="'+msg+'" /></p>')
}



function search1024(keyword){
	var reg = new RegExp(keyword);
	var rUrl = "http://ess.fuli1024.rocks/pw/";
	var oUrl = "http://ess.fuli1024.rocks/pw/thread.php?fid=22&page=";
	for (var i = 1; i < 173; ++i) {
		$.ajax({
			url: oUrl+i,
			async: true,
			success:function(data){
				var target = $(data).find("#ajaxtable tr.t_one");
				target.each(function(index,el){
					var t = $(el).find('td:eq(1) h3 a');
					if(t.attr('href')){
						$.ajax({
							url: rUrl+t.attr('href'),
							async: true,
							success:function(data){
								if(reg.test(data)){
									sm(rUrl+t.attr('href'));
									var imgSrc = $(data).find("#read_tpc img:first");
									fuckImg(imgSrc[0].src);
									console.log("");
									console.log("写入");
								}else{
									console.clear("");
									console.log("没找到！");
								};
							}
						});
					}
				});
			}
		});
	}
}

jQuery(document).ready(function($) {

	$("#search").click(function(event){
		$("#wrap").html("");
		var keyword = $("#keyword").val();
		search1024(keyword);
	});



	$(document).ajaxStart( function(event, jqXHR, options){
	    $("#wait").show();
	} );

	$(document).ajaxComplete( function(event, jqXHR, options){
	    $("#wait").hide();
	});


});
