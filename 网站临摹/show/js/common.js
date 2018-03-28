$(function(){
				//输入栏提示内容变化规则
				$(".input-show").focus(function(){
					if(this.value==this.name) this.value=""
				});
				$(".input-show").blur(function(){
					if(this.value=="") this.value=this.name
				});
				// 当前页菜单项字体变黑
				(function(){
	            	var a=document.title;
	            	if(a=="index"){
	            		$(".index").removeClass().addClass("menu-list active");
	            	}else if(a=="company"){
	            		$(".company").removeClass().addClass("menu-list active");
	            	}else if(a=="services"){
	            		$(".services").removeClass().addClass("menu-list active");
	            	}else if(a=="project"){
	            		$(".project").removeClass().addClass("menu-list active");
	            	}else if(a=="contact"){
	            		$(".contact").removeClass().addClass("menu-list active");
	            	};
                })();
			});