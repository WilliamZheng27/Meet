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
	/*if ($("#tel").length != 11){
		$("#tel").addClass("alert-danger");
		count ++;
	}
	else {
		$("#tel").removeClass("alert-danger");
	}*/
	if (people <= 0){
		$("#people").addClass("alert-danger");
		count ++;
	}
	else {
		$("#people").removeClass("alert-danger");
	}
	if (activitydate == "" || date1 < date2){
		$("#activitydate").addClass("alert-danger");
		count ++;
	}
	else {
		$("#activitydate").removeClass("alert-danger");
	}
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
//清除模态框表单的内容
cleanform = function(){
	$("#activity").val("");
	$("#author").val("");
	$("#tel").val("");
	$("#people").val("");
	$("#activitydate").val("");
	$("#detail").val("");
}
