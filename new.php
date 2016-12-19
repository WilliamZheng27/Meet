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
$activity = $_POST["activity"];
$author = $_POST["author"];
$tel = $_POST["tel"];
$people = $_POST["people"];
$peopleleft = 1;
$activitydate = $_POST["activitydate"];
$detail = $_POST["detail"];
$id = $_POST["userid"];
$activityid = uniqid();


//echo $id;
$sel = mysqli_select_db($conn,$database);
$sql = "insert into flow values (\"".$activity."\", \"".$author."\", \"".$tel."\", \"".$activitydate."\", \"".$detail."\", \"".$id."\", \"".$people."\", \"".$peopleleft."\", \"".$activityid."\")";
$result = $conn->query($sql);
if (mysqli_affected_rows($conn) > 0){
	$sql = "insert into user".$id." values (\"".$activity."\", \"".$author."\", \"".$tel."\", \"".$activitydate."\", \"".$detail."\", \"".$id."\", \"".$activityid."\")";
	$result = $conn->query($sql);
	if (mysqli_affected_rows($conn) > 0){
		$database = "acti_db";
		$sel = mysqli_select_db($conn,$database);
		$sql = "create table activity_".$activityid." (userid char(8))";
		$result = $conn->query($sql);
		if ($result){
				$sql = "insert into activity_".$activityid." values (\"".$id."\")";
				$result = $conn->query($sql);
				if ($result){
					echo "success1";
				}
				else {
					echo "failed0";
				}
		}
		else {
			echo "failed1";
		}
	}
	else {
		echo "failed2";
	}
}
else {
	echo "failed3";
}
$conn->close();
?>