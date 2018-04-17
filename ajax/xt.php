

<?php
header("Content-type: text/html; charset=utf-8");

// a.php
// <form action="b.php" method="post">
//     <input type="text" name="name" />
//     <input type="submit" name="submited" value="提交" />
// </form>

// // b.php
// if( isset( $_POST['submited'] ) )
// {
//     // codes
//     $name = $_POST['name'];
// }
// // other codes
 echo $_POST['user'];
 echo $_POST['email'];

/***********************post传参*************/
// if($_POST['name']=='user'){
//         echo '<h2 style="color:red;">www.zhenglinglu.cn</h2>';
//     }else {
//         echo "没有";
//     }
/***********************get传参*************/


?>