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
$sel = mysqli_select_db($conn,$database);
$sql = "select activityid from flow where date < curdate()";
$result = $conn->query($sql);
echo $result;
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
		$id = $row["activityid"];
		$sel = mysqli_select_db($conn,"acti_db");
		$sql = "drop table activity_".$id;
		$result = $conn->query($sql);
		if ($result) {
			echo "success";
		}			
		else {
			echo "failed";
		}
	}
}
?>