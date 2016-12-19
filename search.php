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
$strfind = $_POST["searchcontent"];
mysqli_query($conn,'set names utf8');
$sel = mysqli_select_db($conn,$database);
$sql = "select * from flow";
$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
		$str = $row["activity"];
		if (strpos($str,$strfind) !== false){
			echo json_encode($row);
			echo ",";
		}			
	}
}
$conn -> close();
?>