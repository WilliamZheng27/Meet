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
//Check if the user already exists
$sel = mysqli_select_db($conn,$database);
$sql = "SELECT * FROM users";
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
$sql = "INSERT into users values ($user,$pwd)";
$result = $conn->query($sql);
if (mysqli_affected_rows($conn)>0) {
	$sel = mysqli_select_db($conn,$database);
	$sql = "CREATE TABLE user".$user.
	" (activity char(20),
	    author char(20),
	    tel char(11),
	    activitydate date,
	    detail char(40),
	    id char(8),
	    activityid varchar(20)
	)";
	$result = $conn->query($sql);
	echo "success";
}
else{
	 echo "failed";
}
$conn->close();
