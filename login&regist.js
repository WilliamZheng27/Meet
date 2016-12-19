var reg=/^[1-9]\d*$|^0$/;

login = function()
{
	studentID = document.getElementById("username").value;
	if (studentID == ""){
		alert("请输入您的学号");
	}
	else if (!(reg.test(studentID))){
		alert("请输入合法的学号");
		document.getElementById("username").value = "";
	}
	else if (studentID.length != 8){
		alert("请输入八位学号")
	}	
	else {
		//alert($("#userlogin").serialize());
		$.ajax({
			type:"post",
			url:"login.php",
			data:$("#userlogin").serialize(),
			dataType:"text",
			async:true,
			success: function(data){
				//alert(data);
				if (data == "success"){
					$("#pills").removeClass("hidden");
					$("#search").removeClass("hidden");
					$("#userlogin").addClass("hidden");
					$("#user").text(studentID);
					$("#id").val(studentID);
					$("#userinfo").removeClass("hidden");
					$("#username").val("");
					$("#pwd").val("");
					refresh();
				}
				else if(data == "failed"){
					alert("用户名或密码不匹配，请重试");
					document.getElementById("pwd").value = "";
					studentID = "";
				}
			}	
		});				
	}		
}

regist = function(){
	studentID = document.getElementById("username").value;
	if (studentID == ""){
		alert("请输入您的学号");
	}
	else if (!(reg.test(studentID))){
		alert("请输入合法的学号");
		document.getElementById("username").value = "";
	}
	else if (studentID.length != 8){
		alert("请输入八位学号")
	}	
	else {
		//alert($("#userlogin").serialize());
		//向后台传输数据
		$.ajax({
			type:"post",
			url:"regist.php",
			data:$("#userlogin").serialize(),
			dataType:"text",
			async:true,
			success: function(data){
				//alert(data);
				//判断是否注册成功
				if (data === "success"){
					alert("注册成功");
					studentID = "";
				}
				else if(data === "exist"){
					alert("用户已存在");
					studentID = "";
				}
				else if(data === "failed"){
					alert("未知错误，请重试");
					document.getElementById("pwd").value = "";
					studentID = "";
				}
			}	
		});				
	}
}
logout = function() {
	$("#pills").addClass("hidden");
	$("#search").addClass("hidden");
	$("#userlogin").removeClass("hidden");
	$("#user").text("");
	$("#id").val("");
	$("#userinfo").addClass("hidden");
	refresh();
}
