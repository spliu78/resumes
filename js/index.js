$(document).ready(function(){
	$(".loading1").addClass('load1in');
	$(".loading2").addClass('load2in');
	console.log("begin");
	var fun = function(event){
		event = EventUtil.getEvent(event);
		EventUtil.preventDefault(event);
		var delta = event.wheelDelta?event.wheelDelta:(-event.detail);
		var a2stage=0;
		var a3stage=0;
		var a4stage=0;
		if(delta<0){
			area1Util.forward();
			a2stage=area2Util.forward();
			if(a2stage == 3){
				a3stage = area3Util.reset();
			}
			if(a2stage == 4){
				a3stage = area3Util.forward();
				console.log("for3:"+a3stage);
				if(a3stage == 3){
					a4stage = area4Util.forward();
				}
			}
			
		}
		else{
			area1Util.backward();
			a2stage=area2Util.backward();
			if(a2stage == 3){
				area3Util.reset();
			}
			if(a2stage == 4){
				a3stage = area3Util.backward();
				console.log("back3:"+a3stage);
				if(a3stage == 3){
					a4stage = area4Util.backward();
				}
				if(a3stage == 2){
					a4stage = area4Util.reset();
				}
			}
			
		}		
	};
				
	area1Util.Util(null,1,5,'#area1_1','#area1_2','#area1_3');
	area2Util.Util(3,8,'#area2',"#area2_1","#area2_2",-1400);
	area3Util.Util(1,4,'#area3_1','#area3_2','#area3_3','#area3_4','#area3_5','#area3_6_1','#area3_6_2');
	area4Util.Util(1,12,'#area4_1',"#area4_2");
	
	window.setTimeout(function(){
		$("#load-btn").fadeIn(1000);
		$("#load-btn").click(function(){
			$("#loading").slideUp(500,function(){			
				EventUtil.addHandler(document,'mousewheel',fun);
				EventUtil.addHandler(window,'DOMMouseScroll',fun);
			});
		});		
	},1500);
});
