// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function sm(msg){
	$("#wrap").append('<p><a href="'+msg+'" target="_blank">'+msg+'</a></p>')
}

function search1024(keyword){
	var reg = new RegExp(keyword);
	var rUrl = "http://1024.xp303.info/pw/";
	var oUrl = "http://1024.xp303.info/pw/thread.php?fid=3&page=";
	for (var i = 1; i < 69; ++i) {
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
