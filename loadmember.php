<?php header("Content-Type: application/xml; charset=utf-8");
$servername = "localhost";
$username = "root";
$password = "zhengyuxiao12345";
$database = "acti_db";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
mysqli_query($conn,'set names utf8');
//echo "Connected successfully";
$id = $_POST["activityid"];
//echo $id;
$sel = mysqli_select_db($conn,$database);
$sql = "SELECT * FROM activity_".$id;
$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
		echo json_encode($row);
		echo ",";			
	}
}

$conn -> close();
?>