	var area4Util={
		a1 : null,
		a2 : null,
		a1offtop : null,
		a1top : null,
		a1h : null,
		a2h : null,
		timenode : null,
		speed : null,
		winH : null,
		t : null,
		forward : function(){
			with(this){
				console.log("for");
				update();
				a1top = a1top - t;
				
				console.log("a2h:"+a2h);
				console.log("winH:"+winH);
				console.log("a1top:"+a1top);
				// if(winH-a1top>winH*0.15&&0){
					// console.log("1");
					// var n = winH*3/2 - a1h;
					// a1.animate({top:n+'px'},300);
					// a1.addClass('endshow');
				if(winH*3/2-a1top>a1h){
				}else{
					console.log("2");
					// a1.animate({top:a1top+'px'},300);
					a1.css('top',a1top+"px");
				}
			}
		},
		backward : function(){
			with(this){
				console.log("for");
				update();
				a1top = a1top + t;
				
				console.log("a2h:"+a2h);
				console.log("winH:"+winH);
				console.log("a1top:"+a1top);
				// if(winH-a1top>winH*0.15&&0){
					// console.log("1");
					// var n = winH*3/2 - a1h;
					// a1.animate({top:n+'px'},300);
					// a1.addClass('endshow');
				if(winH*3/2-a1top>a1h){
				}else{
					console.log("2");
					// a1.animate({top:a1top+'px'},300);
					a1.css('top',a1top+"px");
				}
			}
		},
		reset : function(){
			with(this){
				console.log("reset");
				// a1.animate({top:a1offtop+'px'},1000);
				// a1.removeClass('endshow');				
				a1top = a1offtop;
				a1.css('top',a1offtop+"px");
				// a1.animate({top:a1top+'px'},300);
			}
		},
		update : function(){
			with(this){
				winH = window.innerHeight;
				t = winH/speed;
			}
		},
		//监测<head>是否已经完全进入视野，是，action
		Util : function(timenode,speed,a1,a2){
			this.a1 = $(a1);
			this.a2 = $(a2);
			this.speed = speed;		
			this.timenode = timenode;	
			with(this){
				a1h = a1[0].offsetHeight;
				a2h = a2[0].offsetHeight;
				a1offtop = a1[0].offsetTop;
				a1top = a1offtop;
				update();
				
			}
		}
		
	};