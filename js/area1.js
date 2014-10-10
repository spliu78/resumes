	var area1Util={
		a1 : null,
		a2 : null,
		a3 : null,
		
		speed : null,
		tan : null,
		
		a1offtop : null,
		a2offtop : null,
		a1offleft : null,
		a2offleft : null,
		
		a1top : null,
		a2top : null,
		a1left : null,
		a2left : null,
		a3opc : null,
		
		l : null,
		t : null,
				
		forward : function(){
			with(this){				
				updateoffset();	//万一用户视窗改变了呢？
				a1.css('top',a1top-t+'px');									
				a2.css('top',a2top+t+'px');
				a1.css('left',a1left-l+'px');
				a2.css('left',a2left+l+'px');				
				a3.css('opacity', a3opc);
			}
		},
		backward : function(){
			with(this){				
				updateoffset();
				a1.css('top',a1top+t+'px');									
				a2.css('top',a2top-t+'px');
				a1.css('left',a1left+l+'px');
				a2.css('left',a2left-l+'px');					
				a3.css('opacity',a3opc);			
			}
		},
		
		updateoffset : function(){
			var winH=window.innerHeight;
			var winW=window.innerWidth;
			this.a1top = this.a1[0].offsetTop;
			this.a2top = this.a2[0].offsetTop;
			this.a1left = this.a1[0].offsetLeft;
			this.a2left = this.a2[0].offsetLeft;
			//这里的opcity用a1来控制了，原本应该是a3opc = a3opc + 1/speed，
			//原因是在webkit下，鼠标滚轮的问题，滚轮动作如果连续触发，a3有可能来不及赋值。
			this.a3opc = (1-this.a1top/winH)*2;			
			// console.log(this.a3opc);
			this.l = winH*this.tan/this.speed;
			this.t = winH/this.speed;
		},
		Util : function(deg,timenode,speed,a1,a2,a3){
			
			this.a1 = $(a1);
			this.a2 = $(a2);
			this.a3 = $(a3);
			this.a3opc = Number(this.a3.css('opacity'));
			this.speed = speed;
			
			var winH=window.innerHeight;
			var winW=window.innerWidth;
			
			var a1h =this.a1[0].scrollHeight; 
			var a1w =this.a1[0].scrollWidth;
			var a2h =this.a2[0].scrollHeight; 
			var a2w =this.a2[0].scrollWidth;		
			
			if(!!deg){
				this.tan = Math.tan(deg);
			}else{
				this.tan = winW/winH;				
			}
			
			this.updateoffset();
			this.a1offtop = winH+winH*(timenode-1);
			this.a2offtop = 0-a2h-winH*(timenode-1);
			this.a1offleft = this.a1offtop*this.tan;
			this.a2offleft = this.a2offtop*this.tan;
			this.a1.css('top',this.a1offtop+"px");
			this.a2.css('top',this.a2offtop+"px");
			this.a1.css('left',this.a1offleft+"px");
			this.a2.css('left',this.a2offleft+"px");
		}
		
		//旧版本
		/*
		 oforward : function(callback){
			with(this){
				// console.log(a1offleft);
				// console.log(a2offleft);
				
				updateoffset();	//万一用户视窗改变了呢？
				var flag=1;
				var a1top = a1[0].offsetTop;
			 	var	a2top = a2[0].offsetTop;
				var a1left = a1[0].offsetLeft;
				var a2left = a2[0].offsetLeft;
				if(a1top-t<=0&&false){
					a1.css('top',0+"px");
				}else{
					flag=0;
					a1.css('top',a1top-t+'px');
				}
		
				if(a2top+t>=0&&false){
					a2.css('top',0+"px");
				}else{
					flag=0;
					a2.css('top',a2top+t+'px');
				}
		
				if(a1left-l<=0&&false){
					a1.css('left',0+"px");
				}else{
					flag=0;
					a1.css('left',a1left-l+'px');
				}
		
				if(a2left+l>=0&&false){
					a2.css('left',0+"px");
				}else{
					flag=0;
					a2.css('left',a2left+l+'px');
				}
				return flag;
			}
		},
		obackword : function(callback){
			with(this){
				
				updateoffset();
				var flag=1;
				var a1top = a1[0].offsetTop;
			 	var	a2top = a2[0].offsetTop;
				var a1left = a1[0].offsetLeft;
				var a2left = a2[0].offsetLeft;
				if(a1top+t>=a1offtop&&false){
					a1.css('top',a1offtop+"px");
				}else{
					flag=0;
					a1.css('top',a1top+t+'px');
				}
				if(a2top-t<=a2offtop&&false){
					a2.css('top',a2offtop+"px");
				}else{
					flag=0;
					a2.css('top',a2top-t+'px');
				}
				
				if(a1left+l>=a1offleft&&false){
					a1.css('left',a1offleft+"px");
				}else{
					flag=0;
					a1.css('left',a1left+l+'px');
				}
		
				if(a2left-l<=a2offleft&&false){
					a2.css('left',a2offleft+"px");
				}else{
					flag=0;
					a2.css('left',a2left-l+'px');
				}
				return flag;
			}
		},
		*/
	};