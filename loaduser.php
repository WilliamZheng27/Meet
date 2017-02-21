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
//echo $id;
mysqli_select_db($conn,"user_db");
		$sql = "select * from users";
		//echo $row["userid"];
		$result1 = $conn->query($sql);
		if ($result1->num_rows > 0){
			while($row1 = $result1->fetch_assoc()){
				$row1["pwd"] = "";
				echo json_encode($row1);
				echo ",";
			}
		}			


$conn -> close();
?>