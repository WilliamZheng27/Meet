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
$str = $_POST["transition"];
//echo $str;
//$activity = $obj["activity"];
//$author = $obj["author"];
//$tel = $obj["tel"];
//echo $activity;
//$activitydate = $obj["activitydate"];
//$detail = $obj["detail"];
$obj = json_decode($str,true);
$id = $obj["id"];
$activityid = $obj["activityid"];
//echo $id;
//echo $activityid;
$sel = mysqli_select_db($conn,$database);
$sql = "delete from user".$id." where activityid = "."\"".$activityid."\"";
$result = $conn->query($sql);
$sql = "update flow set peopleleft = peopleleft - 1 where activityid = \"".$activityid."\"";
$result = $conn->query($sql);
$sql = "update course set peopleleft = peopleleft - 1 where activityid = \"".$activityid."\"";
$result = $conn->query($sql);
if ($result){
	$database = "acti_db";
	$sel = mysqli_select_db($conn,$database);
	$sql = "delete from activity_".$activityid." where userid = "."\"".$id."\"";
	$result = $conn->query($sql);
	if($result){
		echo "success";
	}
	else {
		echo "failed1";
	}	
}
else {
	echo "failed2";
}
?>