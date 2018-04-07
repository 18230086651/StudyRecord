# StudyRecord
my study timeline.

## 1．页面加载状态事件（loading.html文件）

  * 加载状态事件

      document.onreadystatechange 页面加载状态改变时的事件
   
      document.readystate 返回页面当前文档的状态
   
  * 有四种状态：

      uninitialized - 还未开始载入
  
      loading - 载入中
   
      interactive - 已载入，文档与用户开始交互
   
      complete - 载入完成
   
  * 根据这四个状态我们可以通过载入完成后隐藏进度条，而显示内容。

## 2．焦点轮播图自动播放特效（demo.html文件）

  * 获取轮播图触发事件id值，注意待页面加载完后执行：window.onload=function(){}

      var next=document.getElementById('next');
      
      var list=document.getElementById('list');
      
      var prev=document.getElementById('prev');
      
      var contains=document.getElementById('container');
      
      var buttons=document.getElementById('buttons').getElementsByTagName('span');
     
     注意： id 与标签连用时id可以看做是一个数组名：for(var i = 0;i < buttons.length;i++) 与 buttons[i].className == 'on'
     
  * 循环执行定时器timestime：

      var times=setInterval(function(){next.onclick();},2500);
  
  * 获取自定义属性：    var myIndex=parseInt(this.getAttribute('index'));
  
  * 取整函数：    var newleft=parseInt(list.style.left);
  
  * 标签a无超链接指向地址时可以这样写：    
  ~~~
     <a href="javascript:;" >文本</a> 
  ~~~
  
## 3．侧框缓冲运动特效（Buffer-movement.html文件）

* opacity不透明属性总结：

    Css3 opacity透明度设置,所有主流浏览器都支持opacity属性。

    IE8和早期版本支持另一种过滤器属性。像：filter:Alpha(opacity=50),早期全兼容写法：

~~~
    .style {          
       filter:alpha(opacity=50);          
       -moz-opacity:0.5;          
       -khtml-opacity: 0.5;          
       opacity: 0.5;     
    } 
~~~

   从Firefox3.5+不再支持私有属性-moz-opacity,IE9+才开始支持CSS3 opacity，而对IE6-IE8我们习惯使用filter滤镜属性来进行实现。

~~~
     opacity{
     　opacity: 0.3;
       filter:alpha(opacity=30);  //filter 过滤器   兼容IE678
     }
~~~

* offsetLeft与style.left的区别
   
     offsetLeft 获取的是相对于父对象的左边距, left 获取或设置相对于具有定位属性(position定义为relative)的父对象 的左边距。
   
     style.left 返回的是字符串，如28px，offsetLeft返回的是数值28，如果需要对取得的值进行计算，还用offsetLeft比较好。
   
* math取值举例:

~~~
    Math.ceil</a>(2.4));  //3 
    Math.floor</a>(2.4));  //2
    Math.round(2.5));   //3
~~~ 
   
* clearInterval()与setTimeout()定时器的区别:

     setInterval()是一种定时器，它按照指定的设置时间（以毫秒计）来调用函数的方法。clearInterval()是结束定时器的循环调用函数。
     
     setTimeout()同理也是一种定时器，对应的结束定时的方法是clearTimeout()。与setInterval()不同的是，此定时器只执行一次。

~~~ 
    举例:
    
     var i = 0; //定义一个变量i
          var t = setInterval(function(){
            if(i === 60){
                clearInterval(t);  //假如i是60，则清除此定时器，结束循环回调
            }else{
                  i++;
                  console.log(i);
                 }
          },1000);
          
          var t = setTimeout(function(){
              console.log("OK");    //一秒后在控制台输出字符串"OK"
     },1000);
~~~
  
  
