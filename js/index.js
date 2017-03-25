$(function(){
	$('.wp-inner').fullpage({
		beforeChange: function(index) {
			var pages=$(".wp-inner").children(".page").length;
			var indexData=index.next+1;
			var width=1/pages*100*indexData+"%";
			$("#width").width(width);
			$("#yeshu").html(indexData+"/"+pages);
			console.log(index.next);
			if(index.next==6) {
				$(".start").hide();
			} else {
				$(".start").show();



			}
		}
	});

	var bodyWidth = window.screen.width;
	var bodyHeight = window.screen.height;
	//alert(bodyWidth);
	//alert(bodyHeight);
	if(bodyWidth==320 && bodyHeight==480){  //iphne4
		$(".page1_3").css({"top":"31%"});
		$(".page1_1").css("width","75%");
		$(".page1_5").css("height","16%");
		$(".page2_2_1").css({"marginTop":"16%","marginLeft":"27%"});
		$(".page2_3_1").css({"marginTop":"39%"});
		$(".page2_4_1").css({"marginTop":"18%"});
		$(".page2_6_1").css({"marginTop": "1%"});
		$(".page2_6_2").css({"top": "-2%"});
		$(".page2_6_3").css({"top": "9%"});
		$(".page3_4").css({backgroundPosition:"0% 0%",backgroundSize:"103%"});
		$(".page3_text_text").css("lineHeight","12px");
		$(".page3_text").css("bottom","27%");
		$(".page4_1").css({"width":"65%"});
		$(".page4_zhiwei").css({"margin":"-3% auto 0;"});
		$(".page5_7").css({"bottom":"32%"});
		$("ul.page6_fuli").css({"lineHeight":"20px"});
		$(".page6_1").css({"backgroundSize":"84%"});
		$(".page6_dingwei").css({"height":"24%"});
		$(".page6_naozhong,.page6_liwu").css({"height":"18%"});
		$(".page6_jinqian").css({"height":"20%"});
		$(".page7_2").css({"top":"53%"});
		$(".page7_yuan").css({"top":"66%"});
		$(".page7_tel").css({"top":"75%","left": "20%"});
		$(".page7_text").css({"top":"77%"});
	}
	if(bodyWidth==320 && bodyHeight==568){
		$(".page_67").css({"marginTop":"10%"});
		$(".page3_text_text").css({"lineHeight":"15px"});
	}
	if(bodyWidth==360 && bodyHeight==640){  //360 640
		$(".page1_1").css("width","80%");
		$(".page1_5").css({"marginTop":"4%",height:"15%"});
		$(".page2_2_1").css("marginTop","16%");
		$(".page2_2_3").css("top","25%");
		$(".page2_3_2").css({"top":"24%"});
		$(".page2_3_3").css("top","39%");
		$(".page2_4_3").css("top","35%");
		$(".page2_6_1").css("marginTop","-14%");
		$(".page3_text_text").css({"lineHeight":"16px","fontSize":"14px"});
		$(".page3_1").css({"height":"80%"});
		$(".page3_2_2").css("top","20px");
		$(".page3_4").css({"backgroundSize":"100%"});
		$(".page3_3").css({"height":"44%","bottom":"1%"});
		$(".page3_text").css({"bottom":"34%"});
		$(".page4_1").css({"marginTop":"17%","height":"42%"});
		$(".page4_renyuan").css({"left":"8%"});
		$(".page4_3").css({"bottom":"1%","height":"45%"});
		$(".page4_jieshao").css({"fontSize":"12px","lineHeight":"14px"});
		$(".page5_4").css("top","25%");
		$(".page5_7").css({"height":"26%","bottom":"30%"});
		$(".page5_text").css({fontSize:"13px","width":"90%"});
		$(".page6_1").css({"height":"100%","backgroundSize":"85%"});
		$(".page6_dingwei").css({"height":"30%","left":"26%"});
		$(".page6_naozhong").css("height","26%");
		$(".page6_liwu").css("height","26%");
		$(".page6_jinqian").css("height","26%");
		$(".page7_2").css("top","50%");
		$(".page7_yuan").css("top","65%");
		$(".page7_bottom").css("height","8%");
		$(".page7_tel").css("top","73%");
		$(".page7_tel_tel").css("left","-16%");
		$(".page7_num").css("left","3%");
		$(".page7_text").css({"fontSize":"14px","top":"77%","lineHeight":"24px"});
	}
	if(bodyWidth==375 && bodyHeight==667){  //iphne6
		$(".page1_5 ").css({"height":"15%"});
		$(".page1_1 ").css({"width":"82%"});
		$(".page2_2_1").css({"marginTop":"18%","marginLeft":"27%"});
		$(".page2_3_1").css({"marginTop":"44%"});
		$(".page2_4_1").css({"marginTop":"19%"});
		$(".page2_6_1").css({"marginTop":"-16%"});
		$(".page3_1 ").css({"height":"52%"});
		$(".page3_4 ").css({"height":"100%","backgroundSize":"107%"});
		$(".page3_3 ").css({"height":"45%","backgroundSize":"114%"});
		$(".page3_text ").css({"bottom":"34%"});
		$(".page3_text_text").css({"fontSize":"14px","lineHeight":"21px"});
		$(".page4_3 ").css({"height":"45%"});
		$(".page4_zhiwei ").css({"margin":"7% auto 0"});
		$(".page4_renyuan").css({"fontSize":"16px","left":"8%"});
		$(".page4_jieshao").css({"margin":"0 0 0 3%","lineHeight":"17px","fontSize":"13px"});
		$(".page5_4").css({"top":"22%"});
		$(".page5_5").css({"width":"100%","left":"1%","bottom":"9%"});
		$(".page5_6").css({"width":"99%","height":"39%","backgroundSize":"131%"});
		$(".page5_7").css({"fontSize":"22px","bottom":"29%"});
		$(".page5_text").css({"fontSize":"14px","width":"93%","lineHeight":"26px","bottom":"0%"});
		$(".page6_1").css({"height":"100%","backgroundSize":"85%"});
		$(".page6_dingwei").css({"height":"30%","left":"26%"});
		$(".page6_naozhong").css("height","26%");
		$(".page6_liwu").css("height","26%");
		$(".page6_jinqian").css("height","26%");
		$(".page7_2").css("top","45%");
		$(".page7_yuan").css({"top":"60%","left":"28%"});
		$(".page7_bottom").css("height","8%");
		$(".page7_tel").css("top","70%");
		$(".page7_tel_tel").css("left","-8%");
		$(".page7_num").css({"fontSize":"20px","left":"10%"});
		$(".page7_text").css({"fontSize":"14px","top":"77%","lineHeight":"24px"});
	}
	if(bodyWidth==414 && bodyHeight==736){  //iphne6 plus
		$(".page_67").css({"marginTop":"10%"});
		$(".page3_text_text").css({"fontSize":"14px","lineHeight":"19px"});
		$(".page4_renyuan").css({"fontSize":"18px","left":"8%"});
		$(".page4_jieshao").css({fontSize:"14px","lineHeight":"19px","marginTop":"0"});
		$(".page5_7").css({"bottom":"19%","fontSize":"20px"});
		$(".page5_text").css({fontSize:"14px","width":"93%","lineHeight":"21px"});
		$(".page7_text").css({"fontSize":"14px"});
	}



	//音乐
	var bgAudio = new Audio();
	bgAudio.loadStatus = 'unload';
	bgAudio.loop = true;
	function loadAudio(audio, url, callback) {
		audio.src = url;
		audio.load();
		audio.addEventListener('canplay', function () {
			bgAudio.loadStatus = 'loaded';
			callback();
		});
		audio.addEventListener('loadstart', function () {
			bgAudio.loadStatus = 'loading';
		});
	}
	function playAudio(){
		if (bgAudio.loadStatus === 'unload') {
			loadAudio(bgAudio, 'media/bg.mp3', function () {
				playAudio();
			});
			return 1;
		}

		bgAudio.play();
	}
	function stopAudio() {
		bgAudio.pause();
	}
	bgAudio.addEventListener('playing' ,function (e) {
		$('#music .music-btn').addClass('play');
	});
	bgAudio.addEventListener('pause' ,function (e) {
		$('#music .music-btn').removeClass('play');
	});

	$('body').one('touchstart', function () {
		playAudio();
		$('#music').on('touchstart', function (e) {
			if (bgAudio.paused) {
				playAudio();
				return 0;
			}
			stopAudio();
			return 1;
		});
	});
	window.onload = function() {
		if (bgAudio.loadStatus !== 'unload') {return;}
		playAudio();
	};
});

