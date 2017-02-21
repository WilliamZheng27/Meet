<?php
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
$activityid = $_POST["activityid"];
 
$sel = mysqli_select_db($conn,$database);
$sql = "insert into flow select * from wait where activityid = "."\"".$activityid."\"";
$result = $conn->query($sql);
$sql = "delete from wait where activityid = \"".$activityid."\"";
$result = $conn->query($sql);
if ($result){
		echo "success";
}
else {
	echo "failed2";
}


?>