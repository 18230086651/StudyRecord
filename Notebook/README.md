# 成长之旅-零散笔记
### mouseover事件与mouseout事件的区别  mouseenter事件与mouseleave事件的区别

    1.不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。对应mouseout
    
    2.只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。对应mouseleave
    
    3.这样的话，mouseenter子元素不会反复触发事件，否则在IE中经常有闪烁情况发生。
    
### 纯css border向上三角形
~~~
.triangle_border_up{
    width:0;
    height:0;
    border-width:0 30px 30px;
    border-style:solid;
    border-color:transparent transparent #333;/*透明 透明  灰*/
    margin:40px auto;
    position:relative;
}
.triangle_border_up span{
    display:block;
    width:0;
    height:0;
    border-width:0 28px 28px;
    border-style:solid;
    border-color:transparent transparent #fc0;/*透明 透明  黄*/
    position:absolute;
    top:0px;
    left:0px;
}
~~~
* [纯CSS写三角形-border法](https://www.cnblogs.com/blosaa/p/3823695.html) 

### 背景属性

* background-size 属性规定背景图片的尺寸。
* background-origin 属性规定背景图片的定位区域。
* background-clip 背景绘制区域
    - center-box
    - padding-box
    - border-box
* border-color: transparent; 颜色透明
* 清除浮动
~~~
    .clearfix:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0;
    }

    .clearfix {
        zoom: 1;
    }
~~~
* 引入字体，将字体导入到本地
 ```
 @font-face{
      font-family:haha;
      src:url('font/BebasNeue-webfont.eot'),
          url('font/BebasNeue-webfont.svg'),
          url('font/BebasNeue-webfont.ttf'),
          url('font/BebasNeue-webfont.woff');
    }
    .fonts{
        font-family:haha;
        font-size:18px;
    } 
```
    
## 移动端小知识点
* 点击高亮效果
在移动端浏览器会遇见点击出现高亮的效果，在某项项目是不需要这个默认的效果的。那么我们通常会把这个点击的颜色设置成透明。

css代码
~~~
-webkit-tap-highlight-color:transparent;/*清除点击高亮效果*/
~~~
* 盒子模型
通过css3的新属性box-sizing我们能够让盒子有限顾及自己的尺寸而不是内容,避免出现多余的滚动条

css代码
~~~
/*设置宽度以边框开始计算*/
-webkit-box-sizing: border-box;/*webkit内核兼容性写法*/
box-sizing: border-box;
~~~
* Input默认样式清除
在移动设备的浏览器中input标签一般会有默认的样式,通过border=none,outline=none无法去除,比如立体效果,3d效果等等,我们需要添加下列样式

css代码
~~~
/*在移动端清除浏览器默认样式*/
-webkit-appearance: none;
~~~
* 最小宽度和最大的宽度
考虑到移动设备在大尺寸的的屏幕不会过度缩放 失去清晰度,在小尺寸的屏幕中不会出现布局错乱的问题

css代码
~~~
注 下列代码取值不是固定的,根据实际情况需要进行调整
max-width: 640px;  /*在行业当中的移动端的设计图一般使用的是640px*/
min-width: 300px;  /*在移动设备当中现在最小的尺寸320px*/
~~~
* 结构伪类选择器
nth-child()如果有多个不同兄弟节点获取的时候,索引需要特殊计算,我们可以限定在某一个类型上,语法如下
~~~
E:first-of-type匹配同类型中的第一个元素E。
E:last-of-type匹配同类型中的最后一个元素E。
E:nth-of-type(n) 匹配同类型中的第n个元素E。
~~~
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



