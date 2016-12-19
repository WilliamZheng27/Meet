<?php header("Content-Type: application/xml; charset=utf-8");
$servername = "localhost";
$username = "root";
$password = "zhengyuxiao12345";
$database = "user_db";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
mysqli_query($conn,'set names utf8');
$user = $_POST["username"];
$pwd = $_POST["password"];
//$user = "16337328";
//$pwd = "123456";
//echo $user;
//echo $pwd;
$sel = mysqli_select_db($conn,$database);
$sql = "SELECT * FROM users";
$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
//		echo $row["username"];
//		echo $row["pwd"];
		if ($row["username"] == $user){
			if ($row["pwd"] == $pwd){
				echo "success";
				exit;
			}
		}
	}
	echo "failed";
}
$conn -> close();
//$id = mysqli_insert_id($conn);//获取上一条SQL语句的插入数据的ID，以便再次通过该ID进行增删改查
/*if(mysqli_affected_rows($conn)>0) {
 echo "成功执行";
}else{
 echo "未成功执行";
}
*/
?>