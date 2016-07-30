window.onload=function(){
// 先获取元素
/*var list=$(".list");
var ltem=$(".ltem");
// 循环分别给每一添加个元素onmouseover onmouseout
for(var i=0;i<list.length;i++){
	// 先执行for后执行事件
	list[i].index=i;
	 list[i].onmouseover=function(){
   ltem[this.index].style.display="block";
},	
	 list[i].onmouseout=function(){
   ltem[this.index].style.display="none";
		}
}*/


// 方法2
/*window.onload=function(){
// 先获取元素
var list=$(".list");
var ltem=$(".ltem");
// 循环分别给每一添加个元素onmouseover onmouseout
for(let i=0;i<list.length;i++){
	// 先执行for后执行事件
	list[i].index=i;
	 list[i].onmouseover=function(){
   ltem[i].style.display="block";
},	
	 list[i].onmouseout=function(){
      ltem[i].style.display="none";
	}	
 }

}*/

// 方法3

// 先获取元素
var list=$(".list");
var ltem=$(".ltem");
// 循环分别给每一添加个元素onmouseover onmouseout
for(var i=0;i<list.length;i++){
	// 先执行for后执行事件
	(function(n){
	 list[n].onmouseover=function(){
   ltem[n].style.display="block";
},	
	 list[n].onmouseout=function(){
      ltem[n].style.display="none";
	}	
 })(i);
}
    // 以下是banner轮波
   
   var win=$(".banner_middle")[0];//获取窗口元素
    var as=$("a",win);//获取图片元素
    var lis=$(".point")[0];//获取轮播点元素
    var point=$("li",lis);//获取轮播点元素
    var btnl=$(".btnl")[0];//获取左按钮元素
    var btnr=$(".btnr")[0];//获取右按钮元素
    var num=0;


    //点击图标中间按钮 btnr btnl
     var flag=true
     btnr.onclick=function(){
    	if(flag){
    		flag=false;
    		moreR()
    	}
    }//右按钮点击轮播
    btnl.onclick=function(){
        if(flag){
    		flag=false;
    		moreL()
    	}

    }//左按钮点击轮播


    //鼠标移上去停止时间函数
    as[0].style.zIndex=10; //第一个图片层级是10
    point[0].style.background="red";//按钮点击时红色

    var t=setInterval(moreR,1000)//时间间隔函数
    win.onmouseover=function(){
       clearInterval(t)
    }//鼠标放上去清除时间函数
    win.onmouseout=function(){
    	t=setInterval(moreR,1000)
    }//鼠标挪开恢复时间间隔函数


    //轮播点跟着图轮播，换颜色  	

    	for(var i=0;i<point.length;i++){
    		point[i].index=i;//轮播点下标
    		//轮播点点击事件
    		point[i].onclick=function(){
    			for(var j=0;j<as.length;j++){
    				/*as[j].style.zIndex=5;*/
    				if(num==this.index){
            return

    	  }
    				animate(as[j],{opacity:0},function(){
    					flag=true
    				});
    		        point[j].style.background="#ccc"
    			}
    			point[this.index].style.background="red"
    			/*as[this.index].style.zIndex=10*/
    			animate(as[this.index],{opacity:1},function(){
    				flag=true
    			});
    			num=this.index
    		}
    	}


    //轮播图向右循环
    function moreR(){
    	num++;
    	if(num==as.length){
    		num=0;
    	}
    	 for(var i=0;i<as.length;i++){
    		/*as[i].style.zIndex=5;*/
    		animate(as[i],{opacity:0},function(){
    			flag=true
    		});
    		point[i].style.background="#ccc"/*className="hot";*/
    }
   /* as[num].style.zIndex=10;*/
   animate(as[num],{opacity:1},function(){
   	   flag=true
   });
    point[num].style.background="red"/*className=""*/
 }
    //轮播图向左循环
  function moreL(){
    	num--;
    	if(num<0){
    		num=as.length-1;
    	}
    	 for(var i=0;i<as.length;i++){
    		/*as[i].style.zIndex=5;*/
    		animate(as[i],{opacity:0},function(){
    			flag=true
    		});
    		point[i].style.background="#ccc"/*className="hot";*/
    }
   /* as[num].style.zIndex=10;*/
   animate(as[num],{opacity:1},function(){flag=true});
    point[num].style.background="red"/*className=""*/
 }




 var flag=true;
  var bonL=$(".bonL")[0];
  var bonR=$(".bonR")[0];
  bonL.onclick=function(){
       if(flag){
        flag=false;
        mnveLl();
       }
  }
  bonR.onclick=function(){
     if(flag){
      flag=false;
      mnveRr();
     }
       
  }




  var imgBox=$(".imgBox")[0];
  var ass=$("a",imgBox);
  var widths=parseInt(getStyle(ass[0],"width"))+10;
  imgBox.style.width=widths*ass.length+"px"
  var s=setInterval(mnveRr,2000);

  var win=$(".win")[0];
  win.onmouseover=function(){
       clearInterval(s)
    }//鼠标放上去清除时间函数
    win.onmouseout=function(){
      s=setInterval(mnveRr,2000)
    }//鼠标挪开恢复时间间隔函数


  function mnveLl(){
    animate(imgBox,{left:-widths},function(){
      var first=firstChild(imgBox);
      imgBox.appendChild(first);
      imgBox.style.left=0;
      flag=true;
    })
  }

  function mnveRr(){
    var first=firstChild(imgBox);
    var last=lastChild(imgBox);
    imgBox.insertBefore(last,first);
    
    imgBox.style.left=-widths+"px";
    animate(imgBox,{left:0},function(){
      flag=true;
    });
  }




//$("<div>")创建div
//函数 window.onload=function(){}
 
function $(select,content){
  if(typeof select=="string"){
     var content=content?content:document
   var first=select.charAt(0);
       if (first==".") {
          return getClass(select.slice(1),content)
       } 
       else if(first=="#"){
         return content.getElementById(select.slice(1))
       }
       else if (/^[a-z][a-z1-6]{0,8}$/.test(select)) { 
         return content.getElementsByTagName(select)
       }
       else if(/^<[a-z][a-z1-6]{0,8}>$/.test(select)){
        return document.createElement(select.slice(1,-1))
       }

  }else if(typeof select=="function"){
      window.onload=function(){
        select();
      }
  }
}
function getClass(className,range){
	// 设置范围
	var range=range?range:document;
	// 判断浏览器
	if(document.getElementsByClassName){
		// w3c
		return range.getElementsByClassName(className);
	}else{
		// ie6~8
		// arr 保存指定的className对象
		// 获取所有的元素
		var all=range.getElementsByTagName("*");
		// 挑选指定的元素
		var arr=[];
		for(var i=0;i<all.length;i++){
			// 函数：判断当前元素的className是否包含指定的className
			if(checkClass(all[i].className,className)){
				arr.push(all[i]);
			}
		}
		// 挑选完毕。将数组输出
		return arr;

	}
}

function checkClass(obj,className){
	// 检查obj里面是否包含className
	// obj one two
	// className  "one"
	var arr=obj.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==className){
			return true;

		}
	}
	return false;
}



}