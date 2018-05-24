# 成长之旅-零散笔记

## 移动端小知识点
* 用正则替换冒个字符
~~~
  var a = 'abc;def;hij;';
  a = a.replace(/;/g,',');
  结果：abc,def,hij,
~~~
* 将字符串拆分成数组形式
~~~
  var data='a-b';
  data.split('-');
  结果：[a,b]
~~~
* 字体图标[fontawesome](http://fontawesome.dashgame.com)
* 图表插件[echarts](http://echarts.baidu.com/index.html)
* tap和click的区别
  1. 两者都会在点击时触发，但是在web手机端，clikc会有200-300ms的延时，所以要用tap代替click作为点击事件，singleTap和doubleTap分别作为单次点击和双击，但是使用tap会带来点透事件(事件穿透)。

  2. 原因：首先要知道tap事件是通过监听绑定document上的touch事件来模拟的，并且tap事件是冒泡到document上才触发的；touchstart：在这个dom上用手触摸就能开始click：在这个dom上用手触摸，且手指未曾移动，且在这个dom上手指离开屏幕，且触摸和离开时间很短（有的浏览器可能不检测时间间隔，照样可以触发click），才开始触发。也就是说在移动端的事件触发从早到晚排序：touchstart  touchstop click 。 所以click的触发是有延时的，about 300ms由于我们在touchstart阶段就已经隐藏了A，当click被触发时，能够被点击的就是B。

* 移动端常用框架
1. zepto.js 语法与jquery几乎一样~ 
2. iscroll.js 解决页面不支持弹性滚动，不支持fixed引起的问题~ 实现下拉刷新，滑屏，缩放等功能~ 
3. underscore.js 该库提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。 
4. fastclick 加快移动端点击响应时间 
5. animate.css CSS3动画效果库 
6. Normalize.css Normalize.css是一种现代的、CSS reset为HTML5准备的优质替代方案
7. MUI接近原生APP体验的高性能前端框架[MUI文档](http://dev.dcloud.net.cn/mui/ui/)[演示](http://dcloud.io/hellomui/)
* 滑屏框架
  适合上下滑屏、左右滑屏等滑屏切换页面的效果 
slip.js 
iSlider.js 
fullpage.js 
swiper
* 瀑布流框架
  masonry
* 工具推荐
  caniuse 各浏览器支持html5属性查询 
paletton 调色搭配

~~~
    /*viewport功能*/
    1. width：device-width //当前设备宽度
    2. height
    3. initial-scale //设置默认缩放比
    4. user-scalable //设置用户是否允许自行缩放
    5. maxinum-scale //设置最大缩放比例
    6. mininum-scale //设置最小缩放比例
    标准适配方案：<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0">
----------------------------------------------------------------------------------------
    //部分css初始化代码
    *，*：：before，*：：after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    //点击高亮效果清除
    tap-highlight-color:transparent;
    -webkit-tap-highlight-color:transparent;
    }
~~~
* PHP返回数据集方式
~~~
    1：mysqli_fetch_array(resource result [,int result_type]); $rows['id']或$rows[0]
    2：mysqli_fetch_abject(resource result); $rows=>id
    3：mysqli_fetch_row(resource result);  $rows[0]
    4：mysqli_fetch_assoc(resource result);  $rows['id']
~~~
* 10.世界上有表示气温有两种方法:摄氏度和华氏度。两者的关系是
华氏度 = 9/5*摄氏度+32
~~~
    <script>
        var a=prompt("请输入摄氏温度");
        var b=a*(9/5)+32;
        alert("相对应的华氏温度为"+b+"°");
    </script>
~~~
* 输入3个数，用三元表达式找出之间最大的一个数
~~~
  <script>
       var a=prompt("请输入一个数字");
       var b=prompt("请输入一个数字");
       var c=prompt("请输入一个数字");
       // a>b?(a>c?alert(a):alert(c)):(b>c?alert(b):alert(c));
       // a>b&&a>c?alert(a):(b>c?alert(b):alert(c));
       alert((a>b?a:b)>c?(a>b?a:b):c);
  </script>
~~~
* 求出1~100以内的质数
~~~
  <script>
            for(i=1;i<=100;i++){
                var b=0;
                for(a=2;a<i;a++){
                    if(i%a==0){
                        b=1;
                        break;
                    }
                }
                if(b==1){
                    console.log(i);
                }
            }
        </script>
~~~

* [ LING•璐の博客](http://www.zhenglinglu.cn/)



