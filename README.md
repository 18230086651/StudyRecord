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

      var times=setInterval(function(){next.onclick();},2500)
  
  * 获取自定义属性：var myIndex=parseInt(this.getAttribute('index'));
  
  * 取整函数：var newleft=parseInt(list.style.left)；
  
  * 标签a无超链接指向地址时可以这样写：<a href="javascript:;" >文本</a>
  
  
  
  
  
  
  
