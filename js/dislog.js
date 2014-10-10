var dialogUtil = {
			fadeIn:function(ele){
				$(ele).fadeIn(250);
				$("body").addClass("dialog-open");
			},
			fadeOut:function(ele){
				$("body").removeClass("dialog-open");
				$(ele).fadeOut(250);
			}
		};

$(document).ready(
	function(){		
		var dialogList = [];
		var dialogNode = {};	
		$("body").find("*").each(function(i,e){
			var ele = $(e);
			if(ele.data("role") == "btn"){
				ele.on("click",function(){
					var id = $(this).data("target");
					var target = $(id);
					if($(id).data("role")=="dialog"){
						dialogUtil.fadeIn(id);
					}
				});
			}else if(ele.data("role") == "dialog"){				
				ele.children("*").each(function(i,e){
					var ele = $(e);
					if(ele.data("role") == "dialog-contain"){
						ele.click(function(event){
							event.stopPropagation();
						});	
					}
				});
				
				ele.on("click",function(){
					dialogUtil.fadeOut('#'+this.id);
				});
			}
			
			if(ele.data("dismiss")){
				ele.on("click",function(){
					var id = $(this).data("dismiss");
					var target = $(id);
					if($(id).data("role")=="dialog"){
						dialogUtil.fadeOut(id);
					}
				});
			}
		});
	}
);
