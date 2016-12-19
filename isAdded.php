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
$str = $_POST["trans"];
$obj = json_decode($str,true);
$activityid = $obj["activityid"];
$id = $obj["id"];
$sel = mysqli_select_db($conn,$database);
$sql = "select * from activity_".$activityid;
$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()){
		if ($row["userid"] == $id){
			echo "exist";
			exit;
		}
	}
	echo "nonexist";
}
$conn->close();			
?>