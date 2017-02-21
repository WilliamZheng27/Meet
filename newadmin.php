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
$user = $_POST["modal-form-admin-id"];
$pwd = $_POST["modal-form-admin-pwd"];
$studentname = $_POST["modal-form-admin-name"];
$studenttel = $_POST["modal-form-admin-tel"];
$temp = $_POST["modal-form-admin-sex"];
$temp2 = $_POST["modal-form-admin-type"];
//echo $user;
//echo $pwd;
//echo $studentname;
//echo $studenttel;
//echo $temp;
$studentsex;
//echo ($temp == "男");
if ($temp == "男") {
	$studentsex = 1;
}
else {
	$studentsex = 0;
}
if ($temp2 == "学生"){
	$type = 0;
}
else {
	$type = 1;
}
//echo $studentsex;
//$user = "16337328";
//$pwd = "123456";
//echo $user;
//echo $pwd;
//Check if the user already exists
$sel = mysqli_select_db($conn,$database);
$sql = "SELECT * FROM admin";
$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
//		echo $row["username"];
//		echo $row["pwd"];
		if ($row["username"] == $user){
				echo "exist";
				exit;
		}
	}
}
$sel = mysqli_select_db($conn,$database);
$sql = "INSERT into admin values ('$user','$pwd','$studentname','$studenttel',$studentsex)";
$result = $conn->query($sql);
if (mysqli_affected_rows($conn)>0) {
	echo "success";
}
else{
	 echo "failed";
}
$conn->close();
