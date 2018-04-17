/*
* @Author: Marte
* @Date:   2018-04-15 17:26:45
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-15 23:22:10
*
*说明： 1.load是局部方法
*       2.$.post与$.get是全局的
*       3.get与post的区别：
*         GET请求是通过URL提交的，而POST请求是HTTP消息实体提交的
*         GET提交有大小限制（2kb）,而POST不受限制
*         GET方式会被缓存下来，可能有安全问题，而POST没有此类问题
*         GET方式通过$_GET[]获取，POST方式通过$_POST[]获取
*       4.$.getJSON()与$.getScript()是jQuery提供的一组用于特定异步加载的方法：
*         $.getJSON()专门用于加载json文件，$.getScript()专门用于加载script文件
*
*
*/

$(function(){
 // $('form input[type=text]').click(function(event) {
 //           $('#box').html($(this).serializeArray());
 //          // console.log($(this).serializeArray());
 //          var json=$(this).serializeArray();
 //          $('#box').html(json[0].value);
 //    });
})
/****************ajax初始化重复属性*********************/
/*
$.ajaxSetup({
    url: 'xt.php',
    type: 'POST',
    data: $('form').serialize(),
});

$('form input[type=button]').click(function(event) {
       $.ajax({
           success: function(response,status,xhr){
             $('#box').html(response);
           }
       });
    });
*/
/****************json方法ajax表单序列化*********************/
/*
$('form input[name=sex]').click(function(event) {
           $('#box').html($(this).serializeArray());
          // console.log($(this).serializeArray());
          var json=$(this).serializeArray();
          $('#box').html(json[0].value);
    });
*/
/*
$('form input[name=sex]').click(function(event) {
           $('#box').html(decodeURIComponent($(this).serialize()));//获取字符串键值对，并解码。针对复选框、下拉菜单等
    });
*/

/****************ajax表单序列化*********************/
/*
$('form input[type=button]').click(function(event) {
       $.ajax({
           type: 'POST',
           url: 'xt.php',
           data: $('form').serialize(),//字符串键值对，并且还对URL进行的编码
           success: function(response,status,xhr){
             $('#box').html(response);
           }
       });
    });
*/
/*
 $('form input[type=button]').click(function(event) {
       $.ajax({
           type: 'POST',
           url: 'xt.php',
           data: {
                 user:$('form input[name=user]').val(),
                 email:$('form input[name=email]').val(),
           },
           success: function(response,status,xhr){
             $('#box').html(response);
           }
       });
    });
    //表单元素特别多的情况下，写起来麻烦，date属性修改的很多，容易出错
*/


/****************ajax最底层post方法运用*********************/
/*
   $('input').click(function(event) {
       $.ajax({
           url: 'xt.php',
           type: 'POST',
           data: {
                 url:'www.zhenglinglu.cn'
           },
           success: function(response,status,xhr){
             $('#box').html(response);
           }
       });
    });
*/
/****************$.getJSON()与$.getScript()***************/
/*
$('input').click(function(event) {
       $.getScript('4.js');
       });
*/
/*
$('input').click(function(event) {
       $.getJSON('3.json',{
          url:'www.zhenglinglu.cn'
       },function(response,stutas,xhr){
           alert(response[0].url);
       });
    });
*/

/**********************post传参**************************/
/*
$('input').click(function(event) {
       $.post('3.json',{
          url:'www.zhenglinglu.cn'
       },function(response,stutas,xhr){
           alert(response[0].url);
       });
    });
    //获取json文件中的数据内容方法

*/
/*
$('input').click(function(event) {
       $.post('2.xml',{
          url:'www.zhenglinglu.cn'
       },function(response,stutas,xhr){
           $('#box').html($(response).find('root').find('url').text());
       });
    });
    //获取xml文件中的数据内容方法
*/
/*
$('input').click(function(event) {
       $.post('xt.php',{
          url:'www.zhenglinglu.cn'
       },function(response,stutas,xhr){
           $('#box').html(response); //返回的内容
            if(stutas=='success'){alert(stutas);}

       });//PHP文件返回的数据是纯文本，默认是html或是text
                 //本身是纯文本，如果强行转化xml或json数据格式，就无法获取数据
    });

/*
$('input').click(function(event) {
       $.post('xt.php',{
          url:'www.zhenglinglu.cn'
       },function(response,stutas,xhr){
           $('#box').html(response); //返回的内容
            if(stutas=='success'){alert(stutas);}

       });
    });
    //post 提交可以使用对象键值对
*/
/*
$('input').click(function(event) {
        $.post('xt.php','url=www.zhenglinglu.cn',function(response,stutas,xhr){
            $('#box').html(response);
       });
    });
    //post 提交可以使用字符串形式的键值对传参，自动转换为http消息实体传参
*/
/**********************get传参**************************/
/*
  $('input').click(function(event) {
       $.get('xt.php',{
          url:'www.zhenglinglu.cn'
       },function(response,stutas,xhr){
           $('#box').html(response); //返回的内容
            if(stutas=='success'){alert(stutas);}

       });
    });
    //通过第二个参数data，对象形式的键值对传参，然后自动转换为直接在URL问号紧跟传参

*/
/*
$('input').click(function(event) {
        $.get('xt.php','url=www.zhenglinglu.cn',function(response,stutas,xhr){
            $('#box').html(response);
       });
    });
   //通过第二个参数data，字符串形式的键值对传参，然后自动转换为直接在URL问号紧跟传参
*/
/*
 $('input').click(function(event) {
       $.get('xt.php?url=www.zhenglinglu.cn',function(response,stutas,xhr){
            $('#box').html(response);
       });
    });
   //通过直接在URL问号紧跟传参
*/
/*
    $('input').click(function(event) {
       // $('#box').load('xt.php?url=www.zhenglinglu.cn');
       $('#box').load('xt.php',{
          url:'www.zhenglinglu.cn'
       },function(response,stutas,xhr){
            // $('#box').html(response); //返回的内容
            // $('#box').html(response+'123');
            // stutas 返回状态，做判断用  值：success
            if(stutas=='success'){alert(stutas);}

       });
    });
*/
