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
$sql = "drop database acti_db";
$conn->query($sql);
$sql = "create database acti_db";
$conn->query($sql);
$sel = mysqli_select_db($conn,$database);
$sql = "show tables";
$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
		if ($row["Tables_in_user_db"] == "users"){
			continue;
		}
		$sql = "delete from ".$row["Tables_in_user_db"];
		$conn->query($sql);
		}			
}
$conn -> close();
?>