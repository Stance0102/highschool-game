$(function(){
	"use strict";
	$(".top").click(function(){
		$("html").animate({scrollTop:$("#index").offset().top},1500);
	});
	$(".down").click(function(){
		$("html").animate({scrollTop:$("#one").offset().top},1500);
	});
	$("a[href=#index]").click(function(){
		$("html").animate({scrollTop:$("#index").offset().top},1500);
	});
	$("a[href=#one]").click(function(){
		$("html").animate({scrollTop:$("#one").offset().top},1500);
	});
	$("a[href=#two]").click(function(){
		$("html").animate({scrollTop:$("#two").offset().top},1500);
	});
	$("a[href=#three]").click(function(){
		$("html").animate({scrollTop:$("#three").offset().top},1500);
	});
	$("a[href=#four]").click(function(){
		$("html").animate({scrollTop:$("#four").offset().top},1500);
	});
	topnav();
	function topnav(){
		var lastid,
			nav=$("#nav"),
			navheight=nav.outerHeight()+1,
			navitem=nav.find("a"),
			scrollitem=navitem.map(function(){
				var item=$($(this).attr("href"));
				if(item.length){return item;}
			});
		$(window).scroll(function(){
			var formtop=$(this).scrollTop()+navheight,
				cur=scrollitem.map(function(){
					if($(this).offset().top<formtop){return this;}
				});
			cur=cur[cur.length-1];
			var id=cur&&cur.length?cur[0].id:"";
			if(lastid!==id){
				lastid=id;
				navitem.parent().removeClass("ing").end().filter("[href=#"+id+"]").parent().addClass("ing");
			}
			if($(window).scrollTop()>$("#one").offset().top){
				nav.css({position:"fixed",top:0});
				nav.style.backgroundColor="#FFF";
			}else{
				nav.css({position:"relative",top:100+"%"});
			}
		});
	}
	index();
	function index(){
		var i,cur=0,img=$(".index"),down=$(".down");
		slide();
		function slide(){
			for(i=0;i<img.length;i++){
				img[i].style.display="none";
			}
			cur++;
			if(cur>img.length){cur=1;}
			img[cur-1].style.display="block";
			setTimeout(slide,4000);
		}
		downOn();
		function downOn(){
			down.animate({bottom:3+"%"},800,function(){
				rerun();
			});
			function rerun(){
				down.animate({bottom:5+"%"},800,function(){
					downOn();
				});
			}
		}
	}
	one();
	function one(){
		var i,cur=0,now,interval,width=$(".oneslide").width(),dot=$(".dot");
		slideOn();
		dotcur();
		function slideOn(){
			now=cur+1;
			interval=setInterval(slide,4000);
		}
		function slideOff(){
			clearInterval(interval);
		}
		$("#dot1").click(function(){
			now=cur=0;
			slide();
		});
		$("#dot2").click(function(){
			now=cur=1;
			slide();
		});
		$("#dot3").click(function(){
			now=cur=2;
			slide();
		});
		$("#dot4").click(function(){
			now=cur=3;
			slide();
		});
		function slide(){
			if(now>3){now=0;}
			slideOff();
			dotcur();
			cur=now;
			$(".oneimg").animate({left:-width*now},1500,function(){
				slideOn();
				dotcur();
			});
		}
		function dotcur(){
			for(i=0;i<dot.length;i++){
				dot[i].style.backgroundColor="#FFF";
			}
			dot[cur].style.backgroundColor="#333";
		}
	}
	three();
	function three(){
		var i,img=$(".threeimg"),cur=0;
		slide();
		function slide(){
			for(i=0;i<img.length;i++){
				img[i].style.display="none";
			}
			img[cur].style.display="block";
		}
		$(".s1").click(function(){
			cur=0;
			slide();
		});
		$(".s2").click(function(){
			cur=1;
			slide();
		});
		$(".s3").click(function(){
			cur=2;
			slide();
		});
	}
	labar();
	function labar(){
		var now1,now2,now3,now4,times=0,height=$(".labar").height();
		$(".labarbtn").click(function(){
			now1=Math.floor(Math.random()*4);
			now2=Math.floor(Math.random()*4);
			now3=Math.floor(Math.random()*4);
			now4=Math.floor(Math.random()*4);
			times=times+1;
			if(times>1){
				slide();
			}else{
				win();
			}
		});
		function slide(){
			$(".labarmask").animate({opacity:0},1000);
			$(".labar1").animate({bottom:-height*now1},1500);
			$(".labar2").animate({top:-height*now2},1500);
			$(".labar3").animate({bottom:-height*now3},1500);
			$(".labar4").animate({top:-height*now4},1500,function(){
				isWin();
			});
			function isWin(){
				if(now1===0&&now2===0&&now3===0&&now4===0||
				  now1===1&&now2===1&&now3===1&&now4===1||
				  now1===2&&now2===2&&now3===2&&now4===2||
				  now1===3&&now2===3&&now3===3&&now4===3){
					alert("恭喜你！獲得王台南手工冰淇淋兌換券一張！");
				}else{
					alert("沒關係！再接再厲吧！");
				}
			}
		}
		function win(){
			$(".labarmask").animate({opacity:0},1000);
			$(".labar1").animate({bottom:-height*3},1500);
			$(".labar2").animate({top:-height*3},1500);
			$(".labar3").animate({bottom:-height*3},1500);
			$(".labar4").animate({top:-height*3},1500,function(){
				alert("恭喜你！獲得王台南手工冰淇淋兌換券一張！");
			});
		}
	}
	sub();
	function sub(){
		$(".sub").click(function(){
			alert("已提交表單");
		});
	}
});