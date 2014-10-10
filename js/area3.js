	var area3Util={
		a : [],
		r1 : null,
		r2 : null,
		aW : [],
		winW : null,
		speed : null,
		timenode : null,
		stage : null,
		forward : function(){
			with(this){		
				updateoffset();
				// console.log("area3");
				var flag = 0;
				for(var i = 0 ; i < a.length; i++){
					aW[i] = aW[i]+winW/speed*((Math.random()-0.45)+1);
					a[i].css('width',aW[i]+"px");
					if(aW[i]>winW*2){
						stage = 3;
						r1.removeClass('round_1');
						r2.removeClass('round_2');
						// console.log(stage);
					}else if(aW[i]>winW/2){
						stage = 2;
						r1.removeClass('round_1');
						r2.removeClass('round_2');
						// console.log(stage);
					}
				}
				return stage;
			}
		},
		backward : function(){
			with(this){	
				updateoffset();
				// console.log("area3");
				for(var i = 0 ; i < a.length; i++){
					aW[i] = aW[i]-winW/speed*((Math.random()-0.45)+1);
					a[i].css('width',aW[i]+"px");
					
					if(aW[i]<winW*1.5&&aW[i]>winW/2){
						stage = 2;
					}else if(aW[i]<winW/2){
						stage = 1;						
					}
				}	
				if(stage == 1){
					r1.addClass('round_1');
					r2.addClass('round_2');
					// console.log(stage);
				}
				return stage;
			}
		},
		
		updateoffset : function(){
			with(this){
				winW=window.innerWidth;
			}
		},
		reset : function(){
			with(this){
				aW[0] = -winW*0.08;
				aW[1] = -winW*0.05;
				aW[2] = -winW*0.02;
				aW[3] = -winW*0.05;
				aW[4] = -winW*0.08;
				for(var i = 0 ; i < a.length; i++){
					aW[i] = aW[i] - winW*timenode/10;
					a[i].css('width',0+"px");
				}
				r1.addClass('round_1');
				r2.addClass('round_2');
				// console.log("reset");
			}
		},
		Util : function(timenode,speed,a1,a2,a3,a4,a5,r1,r2){
			this.a = [$(a1),$(a2),$(a3),$(a4),$(a5)];
			this.r1 = $(r1);
			this.r2 = $(r2);
			this.speed = speed;		
			this.timenode = timenode;	
			this.stage=1;
			with(this){
				
			
				updateoffset();
				stage=1;
				aW[0] = -winW*0.04;
				aW[1] = -winW*0.02;
				aW[2] = -winW*0.00;
				aW[3] = -winW*0.02;
				aW[4] = -winW*0.04;
				for(var i = 0 ; i < a.length; i++){
					aW[i] = aW[i] - winW*timenode/10;
				}
			}
		}
		
	};