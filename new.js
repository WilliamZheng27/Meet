newact = function(){
	var activity = document.getElementById("activity").value;
	var author = document.getElementById("author").value;
	var tel = document.getElementById("tel").value;
	var people = document.getElementById("people").value;
	var activitydate = document.getElementById("activitydate").value;
	var detail = document.getElementById("detail").value;
	var count = 0;
	var mydate = new Date();
	var date1 = new Date(activitydate).getTime();
	//alert(activity);
	var date2 = mydate.getTime();
	//alert(author);
	//alert(tel);
	if (activity == ""){
		$("#activity").addClass("alert-danger");
		count ++;
		alert("acti");
	}
	else {
		$("#activity").removeClass("alert-danger");
	}
	if (author == ""){
		$("#author").addClass("alert-danger");
		count ++;
		alert("auth");
	}
	else {
		$("#author").removeClass("alert-danger");
	}
	if (people <= 0){
		$("#people").addClass("alert-danger");
		count ++;
		alert("peo");
	}
	else {
		$("#people").removeClass("alert-danger");
	}
	if (activitydate == "" || date1 < date2){
		$("#activitydate").addClass("alert-danger");
		count ++;
		alert("date");
	}
	else {
		$("#activitydate").removeClass("alert-danger");
	}
	alert(count);
	if (count != 0){
		return 0;
	}
	$.ajax({
		type:"post",
		url:"new.php",
		data: $("#newactivity").serialize(),
		dataType:"text",
		async:true,
		success: function(data){
			if (data === "success1"){
				alert("创建成功");
				$("#newactivity").reset;
				$("#new").modal("hide");
				cleanform();
				refresh();
			}
			if (data === "failed0" || data === "failed1" || data === "failed2" || data === "failed3"){
				alert("创建失败");
			}
		}
	});
}

newcourse = function(){
	var activity = document.getElementById("course").value;
	var author = document.getElementById("author").value;
	var tel = document.getElementById("tel").value;
	var people = document.getElementById("coursepeople").value;
	var detail = document.getElementById("coursedetail").value;
	var count = 0;
	if (activity == ""){
		$("#activity").addClass("alert-danger");
		count ++;
	}
	else {
		$("#activity").removeClass("alert-danger");
	}
	if (author == ""){
		$("#author").addClass("alert-danger");
		count ++;
	}
	else {
		$("#author").removeClass("alert-danger");
	}
	if (people <= 0){
		$("#people").addClass("alert-danger");
		count ++;
	}
	else {
		$("#people").removeClass("alert-danger");
	}
	if (count != 0){
		return 0;
	}
	$.ajax({
		type:"post",
		url:"newcourse.php",
		data: $("#newcourseform").serialize(),
		dataType:"text",
		async:true,
		success: function(data){
			if (data === "success1"){
				alert("创建成功");
				$("#newcourse").modal("hide");
				cleanform();
				refresh();
			}
			if (data === "failed0" || data === "failed1" || data === "failed2" || data === "failed3"){
				alert("创建失败");
			}
		}
	});
}
//清除模态框表单的内容
cleanform = function(){
	$("#activity").val("");
	$("#author").val("");
	$("#tel").val("");
	$("#people").val("");
	$("#activitydate").val("");
	$("#activitytimestart").val("");
	$("#activitytimeend").val("");
	$("#detail").val("");
	$("#course").val("");
	$("#coursepeople").val("");
	$("#coursedetail").val("");
}
