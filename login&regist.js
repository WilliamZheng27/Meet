var reg=/^[1-9]\d*$|^0$/;

login = function()
{
	studentID = document.getElementById("username").value;
	var pwd = $("#pwd").val();
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
	else if(pwd == ""){
		alert("请输入密码");
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
				if(data == "failed"){
					alert("用户名或密码不匹配，请重试");
					document.getElementById("pwd").value = "";
					studentID = "";
				}
				else {
					var obj = eval("(" + data + ")");
					$("#author").val(obj.studentname);
					$("#author-course").val(obj.studentname);
					//alert(obj.studentname);
					$("#tel").val(obj.tel);
					$("#tel-course").val(obj.tel);
					$("#courseflow").removeClass("hidden");
					$("#flow").removeClass("hidden");
					if (obj.type == 0){
						$("#other").removeClass("hidden");
						$("#searchform").removeClass("hidden");
					}
					else{
						$("#add").parent().removeClass("hidden");
						$("#addcourse").parent().removeClass("hidden");
						$("#my").removeClass("hidden");
						$("#searchform").removeClass("hidden");
					}
					$("#userlogin").addClass("hidden");
					$("#user").text(studentID);
					$("#id").val(studentID);
					$("#id-course").val(studentID);
					$("#userinfo").removeClass("hidden");
					$("#username").val("");
					$("#pwd").val("");
					refresh();
				}
			}	
		});				
	}		
}

adminlogin = function()
{
	studentID = document.getElementById("username").value;
	var pwd = $("#pwd").val();
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
	else if(pwd == ""){
		alert("请输入密码");
	}
	else {
		//alert($("#userlogin").serialize());
		$.ajax({
			type:"post",
			url:"adminlogin.php",
			data:$("#userlogin").serialize(),
			dataType:"text",
			async:true,
			success: function(data){
				//alert(data);
				if(data == "failed"){
					alert("用户名或密码不匹配，请重试");
					document.getElementById("pwd").value = "";
					studentID = "";
				}
				else {
					var obj = eval("(" + data + ")");
					$("#author").val(obj.studentname);
					$("#adminFlow").addClass("active");
					//alert(obj.studentname);
					$("#tel").val(obj.tel);
					$("#adminFlow").removeClass("hidden");
					$("#adminWait").removeClass("hidden");
					$("#adminUser").removeClass("hidden");
					$("#adminCourse").removeClass("hidden");
					$("#adminWaitCourse").removeClass("hidden");
					$("#userlogin").addClass("hidden");
					$("#user").text(studentID);
					$("#id").val(studentID);
					$("#userinfo").removeClass("hidden");
					$("#username").val("");
					$("#pwd").val("");
					$("#registbtn").removeClass("hidden");
					loadAdminFlow();
				}
			}	
		});				
	}		
}

regist = function(){
	studentID = document.getElementById("modal-form-register-id").value;
	var tel = $("#modal-form-register-tel").val();
	var name = $("#modal-form-register-name").val();
	var count = 0;
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
	if (name == ""){
		$("#modal-form-register-name").addClass("alert-danger");
		count ++;
	}
	if (tel.length != 11){
		$("#modal-form-register-tel").addClass("alert-danger");
		count ++;
	}
	if (count > 0){
		return 0;
	}
	else {
		//alert($("#userlogin").serialize());
		//向后台传输数据
		$.ajax({
			type:"post",
			url:"regist.php",
			data:$("#modal-form-register").serialize(),
			dataType:"text",
			async:true,
			success: function(data){
				//alert(data);
				//判断是否注册成功
				if (data === "success"){
					alert("注册成功");
					$("#modal-form-register-id").val("");
					$("#modal-form-register-pwd").val("");
					$("#modal-form-register-name").val("");
					$("#modal-form-register-tel").val("");
					$("#modal-register").modal("hide");
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
	location.reload();
	refresh();
}
