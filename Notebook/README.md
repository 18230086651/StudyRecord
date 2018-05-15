# 成长之旅-零散笔记
*PHP返回数据集方式
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



