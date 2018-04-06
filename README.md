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
