
	var area2Util={
		a1 : null,
		a1h : null,
		a1w : null,
		
		a1defaultH : null,
		a1defaultW : null,
		
		a2 : null,
		a3 : null,
		a2left : null,
		a3left : null,
		a2defaultleft : null,
		a3defaultleft : null,
		a3distans : null,
		stage : null,//stage1:向上运动过程；stage2：变大过程；stage3：完全变大；stage4：a3完全进入视野，左边横条开始转移
		speed : null,
		tan : null,
		
		winW:null,
		winH:null,//
		a1offtop : null,//起点top		
		a1top : null,//运动参考点top
		
		l : null,
		t : null,
		
		a1change : function(h,w){
			with(this){
				if(h>winH||w>winW){
					stage=3;
					a1.css("height",winH+"px");
					h=winH;
					a1.css("width",winW+"px");
					w=winW;
				}
				else if(h<a1defaultH||w<=a1defaultW){
					stage = 1;
					a2.fadeOut(1000);
					a3.fadeOut(1000);
					a1.css("width",a1defaultW+"px");
					a1w = a1defaultW;
					a1.css("height",a1defaultH+"px");
					a1h = a1defaultH;
				}
				else{
					a1.css("height",h+"px");
					a1.css("width",w+"px");
				}
			}			
		},
		a2_a3change:function(a2_left,a3_left){
			with(this){
				if(a2_left<a2defaultleft||a3_left<a3defaultleft){
					console.log('stage:'+stage+'a3:'+a3defaultleft+" / "+a3_left);
					stage=2;
					a2left = a2defaultleft;
					a3left = a3defaultleft;
					a2.css("left",a2defaultleft+"px");
					a3.css("left",a3defaultleft+"px");
				}else if(a3_left>winW/5){
					console.log('stage:'+stage+'a3:'+a3defaultleft+" / "+a3_left);
					stage=4;
					a2.css("left",a2_left+"px");
					a3.css("left",a3_left+"px");
				}else{
					console.log('stage:'+stage+'a3:'+a3defaultleft+" / "+a3_left);
					stage=3;
					a2.css("left",a2_left+"px");
					a3.css("left",a3_left+"px");
				}
			}
		},
		
		forward1 : function(){
			with(this){		
				updateoffset();		
				if((a1top-t)>0){
					a1top = a1top-t;
					a1.css("top",a1top+"px");
				}else
				{
					a1top = 0;
					a1.css("top",a1top+"px");
					a2.fadeIn(1000);
					a3.fadeIn(1000);
					stage = 2;
				}
			}
			this.a1h =this.a1defaultH; 
			this.a1w =this.a1defaultW; 
			
			this.a2defaultleft=0;//实在不想用回调函数了。。。
			this.a3defaultleft=this.a3distans;//实在不想用回调函数了。。。
			
			this.a2left = this.a2defaultleft;
			this.a3left = this.a3defaultleft;
		},
		forward2 : function(){
			with(this){		
				updateoffset();
				a1.css("border-radius","0px");
			
				a1h=a1h+t;
				a1w=a1w+l;
				a1change(a1h,a1w);
			}
		},
		forward3 : function(){
			with(this){
				a1h=a1h+t;
				a1w=a1w+l;				
				a2left = a2left+l/2;
				a3left = a3left+l/2;
				a2_a3change(a2left,a3left);
			}
		},
		
		backward3 : function(){
			with(this){
				a1h=a1h-t;
				a1w=a1w-l;
				a1change(a1h,a1w);
				a2left = a2left-l/2;
				a3left = a3left-l/2;
				a2_a3change(a2left,a3left);
			}
		},
		backward2 : function(){
			with(this){
				updateoffset();
			
				a1h=a1h-t;
				a1w=a1w-l;
				a1change(a1h,a1w);
			}
		},
		backward1 : function(){
			with(this){
				a1.css("border-radius","100px");
				updateoffset();
				a1top = a1top+t;
				a1.css("top",a1top+"px");
			}
		},
		
		forward : function(){
			with(this){		
				
				if(stage == 1){	
					forward1();
				}else if(stage==2){
					forward2();
				}else if(stage>=3){
					forward3();
				}
				return stage;
			}
		},
		backward : function(){
			with(this){		
				if(stage == 1){	
					backward1();
				}else if(stage==2){
					backward2();
				}else if(stage>=3){
					backward3();
				}
				return stage;
			}
		},
		
		updateoffset : function(){
			this.winH=window.innerHeight;
			this.winW=window.innerWidth;

			this.t = this.winH/this.speed;
			this.l = this.winW/this.speed;
			// this.a1.css("border-radius",this.winH+"px");
		},
		Util : function(timenode,speed,a1,a2,a3,a3distans){
			// timenode=1;
			// speed=5;
			this.a1 = $(a1);
			this.a2 = $(a2);
			this.a3 = $(a3);
			this.a3distans = a3distans;
			this.stage = 1;
			this.speed = speed;
			this.a1defaultH = this.a1[0].clientHeight; 
			this.a1defaultW = this.a1[0].clientWidth; 
			
			
			
			console.log("Util dh,dw="+this.a1defaultH+","+this.a1defaultW);
			this.updateoffset(); 			
			// this.a2.css("height",this.a1h/2+"px");
			// this.a2.css("width",this.a1w/2+"px");
			
			
			this.a1offtop = this.winH+this.winH*(timenode-1);
			this.a1top = this.a1offtop;
			this.a1.css('top',this.a1offtop+"px");
		}
		
	};