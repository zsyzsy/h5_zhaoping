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






//if(isWeiXin()){
//		alert("在微信中打开");
//}
//function isWeiXin() {
//	var ua = window.navigator.userAgent.toLowerCase(); //获取判断用的对象
//	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
//		return true;
//	} else {
//		return false;
//	}
//}


	var bodyWidth = window.screen.width;
	var bodyHeight = window.screen.height;
	alert(bodyWidth);
	alert(bodyHeight);
	if(bodyWidth==320 && bodyHeight==480){  //iphne5
		$(".page1_1").css("width","75%");
		$(".page1_5").css("height","16%");
		$(".page3_4").css({backgroundPosition:"0% 0%",backgroundSize:"103%"});
		$(".page3_text_text").css("lineHeight","12px");
		$(".page3_text").css("bottom","25%");
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
		$(".page2_2_1").css({"marginTop":"17%","marginLeft":"26%"});
		$(".page2_3_1").css({"marginTop":"40%"});
		$(".page2_4_1").css({"marginTop":"19%"});
		$(".page2_6_1").css({"marginTop":"-15%"});
		$(".page3_1 ").css({"height":"52%"});
		$(".page3_4 ").css({"height":"100%","backgroundSize":"100%"});
		$(".page3_3 ").css({"height":"45%"});
		$(".page3_text ").css({"bottom":"34%"});
		$(".page3_text_text").css({"fontSize":"14px","lineHeight":"16px"});
		$(".page4_3 ").css({"height":"45%"});
		$(".page4_zhiwei ").css({"margin":"4% auto 0"});
		$(".page4_renyuan").css({"fontSize":"16px","left":"8%"});
		$(".page4_jieshao").css({"margin":"5% 0 0 3%","lineHeight":"16px","marginTop":"0"});
		$(".page5_4").css({"top":"25%"});
		$(".page5_7").css({"fontSize":"16px","bottom":"24%"});
		$(".page5_text").css({"fontSize":"14px","width":"93%","lineHeight":"14px","bottom":"0%"});
		$(".page6_1").css({"height":"100%","backgroundSize":"85%"});
		$(".page6_dingwei").css({"height":"30%","left":"26%"});
		$(".page6_naozhong").css("height","26%");
		$(".page6_liwu").css("height","26%");
		$(".page6_jinqian").css("height","26%");
		$(".page7_2").css("top","48%");
		$(".page7_yuan").css({"top":"65%","left":"28%"});
		$(".page7_bottom").css("height","8%");
		$(".page7_tel").css("top","75%");
		$(".page7_tel_tel").css("left","-8%");
		$(".page7_num").css({"fontSize":"20px","left":"10%"});
		$(".page7_text").css({"fontSize":"14px","top":"77%","lineHeight":"24px"});
	}
	if(bodyWidth==414 && bodyHeight==736){  //iphne6 plus
		$(".page3_text_text").css({"fontSize":"14px","lineHeight":"18px"});
		$(".page4_renyuan").css({"fontSize":"18px","left":"8%"});
		$(".page4_jieshao").css({fontSize:"14px","lineHeight":"19px","marginTop":"0"});
		$(".page5_7").css({"bottom":"19%","fontSize":"20px"});
		$(".page5_text").css({fontSize:"14px","width":"93%","lineHeight":"21px"});
		$(".page7_text").css({"fontSize":"14px"});
	}
	if(bodyWidth==44 && bodyHeight==76){

	}



	//音乐
	//var bgAudio = new Audio();
	//bgAudio.loadStatus = 'unload';
	//bgAudio.loop = true;
	//function loadAudio(audio, url, callback) {
	//	audio.src = url;
	//	audio.load();
	//	audio.addEventListener('canplay', function () {
	//		bgAudio.loadStatus = 'loaded';
	//		callback();
	//	});
	//	audio.addEventListener('loadstart', function () {
	//		bgAudio.loadStatus = 'loading';
	//	});
	//}
	//function playAudio(){
	//	if (bgAudio.loadStatus === 'unload') {
	//		loadAudio(bgAudio, 'media/bg.mp3', function () {
	//			playAudio();
	//		});
	//		return 1;
	//	}
    //
	//	bgAudio.play();
	//}
	//function stopAudio() {
	//	bgAudio.pause();
	//}
	//bgAudio.addEventListener('playing' ,function (e) {
	//	$('#music .music-btn').addClass('play');
	//});
	//bgAudio.addEventListener('pause' ,function (e) {
	//	$('#music .music-btn').removeClass('play');
	//});
    //
	//$('body').one('touchstart', function () {
	//	playAudio();
	//	$('#music').on('touchstart', function (e) {
	//		if (bgAudio.paused) {
	//			playAudio();
	//			return 0;
	//		}
	//		stopAudio();
	//		return 1;
	//	});
	//});
	//window.onload = function() {
	//	if (bgAudio.loadStatus !== 'unload') {return;}
	//	playAudio();
	//};
})

