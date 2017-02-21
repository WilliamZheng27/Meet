loadAdminFlow = function(){
	losefocus();
	$("#adminFlow").addClass("active");
	$.ajax({
		type:"post",
		url:"loadsql.php",
		contentType:"application/x-www-form-urlencoded;charset=utf-8",
		scriptCharset:"utf-8",
		async:false,
		dataType: "text",
		success: function(data){
			$("#panel").empty();
			//alert(data);
			var result = data.substring(0,data.length-1);
			//alert(result);
			var temp = "[" + result +"]";
			var obj = eval("(" + temp + ")");
			//alert(obj);
			$.each(obj, function() {
        		//alert(this.activity);
        		var activityid = this.activityid;
				var finaldata = {
					flowactivity: this.activity,
					flowauthor: this.author,
					flowtel: this.tel,
					flowdate: this.activitydate,
					flowpeople: this.people,
					flowpeopleleft: this.peopleleft,
					flowpeoplepercent: Math.round(this.peopleleft / this.people * 100),
					flowdetail: this.detail,
					flowid: this.id,
					flowactivityid: this.activityid,
					flowstart: this.start,
					flowend: this.end,
				};
				var html = template('artemplate4',finaldata);
				$("#panel").append(html);
				isFull(this.people,this.peopleleft,this.activityid);
				if ($("#id").val() == ""){
					$("#" + this.activityid).addClass("hidden");
				}
    		});
		}
	});
}

loadAdminCourse = function(){
	losefocus();
	$("#adminCourse").addClass("active");
	$.ajax({
		type:"post",
		url:"loadcourse.php",
		contentType:"application/x-www-form-urlencoded;charset=utf-8",
		scriptCharset:"utf-8",
		async:false,
		dataType: "text",
		success: function(data){
			$("#panel").empty();
			//alert(data);
			var result = data.substring(0,data.length-1);
			//alert(result);
			var temp = "[" + result +"]";
			var obj = eval("(" + temp + ")");
			//alert(obj);
			$.each(obj, function() {
        		//alert(this.activity);
        		var activityid = this.activityid;
				var finaldata = {
					flowactivity: this.activity,
					flowauthor: this.author,
					flowtel: this.tel,
					flowdate: this.activitydate,
					flowpeople: this.people,
					flowpeopleleft: this.peopleleft,
					flowpeoplepercent: Math.round(this.peopleleft / this.people * 100),
					flowdetail: this.detail,
					flowid: this.id,
					flowactivityid: this.activityid,
					flowstart: this.start,
					flowend: this.end,
				};
				var html = template('artemplate4',finaldata);
				$("#panel").append(html);
				isFull(this.people,this.peopleleft,this.activityid);
				if ($("#id").val() == ""){
					$("#" + this.activityid).addClass("hidden");
				}
    		});
		}
	});
}

loadAdminWait = function(){
	losefocus();
	$("#adminWait").addClass("active");
	$.ajax({
		type:"post",
		url:"loadwait.php",
		contentType:"application/x-www-form-urlencoded;charset=utf-8",
		scriptCharset:"utf-8",
		async:false,
		dataType: "text",
		success: function(data){
			$("#panel").empty();
			//alert(data);
			var result = data.substring(0,data.length-1);
			//alert(result);
			var temp = "[" + result +"]";
			var obj = eval("(" + temp + ")");
			//alert(obj);
			$.each(obj, function() {
        		//alert(this.activity);
        		var activityid = this.activityid;
				var finaldata = {
					flowactivity: this.activity,
					flowauthor: this.author,
					flowtel: this.tel,
					flowdate: this.activitydate,
					flowpeople: this.people,
					flowpeopleleft: this.peopleleft,
					flowpeoplepercent: Math.round(this.peopleleft / this.people * 100),
					flowdetail: this.detail,
					flowid: this.id,
					flowactivityid: this.activityid,
					flowstart: this.start,
					flowend: this.end,
				};
				var html = template('artemplate5',finaldata);
				$("#panel").append(html);
    		});
		}
	});
}

loadAdminWaitCourse = function(){
	losefocus();
	$("#adminWaitCourse").addClass("active");
	$.ajax({
		type:"post",
		url:"loadwaitcourse.php",
		contentType:"application/x-www-form-urlencoded;charset=utf-8",
		scriptCharset:"utf-8",
		async:false,
		dataType: "text",
		success: function(data){
			$("#panel").empty();
			//alert(data);
			var result = data.substring(0,data.length-1);
			//alert(result);
			var temp = "[" + result +"]";
			var obj = eval("(" + temp + ")");
			//alert(obj);
			$.each(obj, function() {
        		//alert(this.activity);
        		var activityid = this.activityid;
				var finaldata = {
					flowactivity: this.activity,
					flowauthor: this.author,
					flowtel: this.tel,
					flowdate: this.activitydate,
					flowpeople: this.people,
					flowpeopleleft: this.peopleleft,
					flowpeoplepercent: Math.round(this.peopleleft / this.people * 100),
					flowdetail: this.detail,
					flowid: this.id,
					flowactivityid: this.activityid,
					flowstart: this.start,
					flowend: this.end,
				};
				var html = template('artemplate6',finaldata);
				$("#panel").append(html);
    		});
		}
	});
}

loadAdminUser = function(){
	losefocus();
	$("#adminUser").addClass("active");
	$("#panel").empty();
	var html = template('artemplate7');
	$("#panel").append(html);
	$.ajax({
		type:"post",
		url:"loaduser.php",
		async:true,
		dataType: "text",
		success: function(data){
			var result = data.substring(0,data.length - 1);
			var temp = "[" + result + "]";
			var obj = eval("(" + temp + ")");
			var membersex;
			$.each(obj, function() {
				if (this.sex == "1"){
					membersex = "男";
				}
				else{
					membersex = "女";
				}
				if (this.type == 0){
					usertype = "学生";
				}
				else{
					usertype = "讲师";
				}
				var finaldata = {
					userid: this.username,
					username: this.studentname,
					usertel: this.tel,
					usersex: membersex,
					usertype: usertype
				};
				var html = template('artemplate8',finaldata);
				$("#adminusertable").append(html);
			});
		}
	});
}

loadUserActi = function(id){
	$.ajax({
			type:"post",
			url:"loaduseracti.php",
			async:true,
			data: {"id": id},
			dataType: "text",
			success: function(data){
				//alert(data);
				var result = data.substring(0,data.length - 1);
				//alert(result);
				var temp = "[" + result +"]";
				var obj = eval("(" + temp + ")");
				//alert(obj);
				var finaldata = {
					userid: id,
				};
				var html = template('artemplate11',finaldata);
				$("#panel").append(html)
				$.each(obj, function() {
	        		//alert(this.activity);
	        		var activityid = this.activityid;
					var finaldata = {
						userid: id,
						flowactivity: this.activity,
						flowauthor: this.author,
						flowtel: this.tel,
						flowdate: this.activitydate,
						flowdetail: this.detail,
						flowid: this.id,
						flowactivityid: this.activityid,
						flowstart: this.start,
						flowend: this.end,
					};
					var html = template('artemplate10',finaldata);
					var app = "#" + id + "-list";
					$(app).append(html);
	    		});
			}
	});
}

loadAdminTeacher = function(){
	losefocus();
	$("#adminTeacher").parent().addClass("active");
	$("#adminusertable").empty();
	var html = template('artemplate9');
	$("#adminusertable").append(html);
	$.ajax({
		type:"post",
		url:"loadteacher.php",
		async:true,
		dataType: "text",
		success: function(data){
			var result = data.substring(0,data.length - 1);
			var temp = "[" + result + "]";
			var obj = eval("(" + temp + ")");
			var membersex;
			$.each(obj, function() {
				if (this.sex == "1"){
					membersex = "男";
				}
				else{
					membersex = "女";
				}
				if (this.type == 0){
					usertype = "学生";
				}
				else{
					usertype = "讲师";
				}
				var finaldata = {
					userid: this.username,
					username: this.studentname,
					usertel: this.tel,
					usersex: membersex,
					usertype: usertype
				};
				var html = template('artemplate8',finaldata);
				$("#adminusertable").append(html);
				loadUserActi(this.username);
			});
		}
	});
}

loadAdminStudent = function(){
	losefocus();
	$("#adminStudent").parent().addClass("active");
	$("#adminusertable").empty();
	var html = template('artemplate9');
	$("#adminusertable").append(html);
	$.ajax({
		type:"post",
		url:"loadstudent.php",
		async:true,
		dataType: "text",
		success: function(data){
			var result = data.substring(0,data.length - 1);
			var temp = "[" + result + "]";
			var obj = eval("(" + temp + ")");
			var membersex;
			$.each(obj, function() {
				if (this.sex == "1"){
					membersex = "男";
				}
				else{
					membersex = "女";
				}
				if (this.type == 0){
					usertype = "学生";
				}
				else{
					usertype = "讲师";
				}
				var finaldata = {
					userid: this.username,
					username: this.studentname,
					usertel: this.tel,
					usersex: membersex,
					usertype: usertype
				};
				var html = template('artemplate8',finaldata);
				$("#adminusertable").append(html);
				loadUserActi(this.username);
			});
		}
	});
}

loadAdminAdmin = function(){
	losefocus();
	$("#adminAdmin").parent().addClass("active");
	$("#adminusertable").empty();
	var html = template('artemplate9');
	$("#adminusertable").append(html);
	$.ajax({
		type:"post",
		url:"loadadmin.php",
		async:false,
		dataType: "text",
		success: function(data){
			var result = data.substring(0,data.length - 1);
			var temp = "[" + result + "]";
			var obj = eval("(" + temp + ")");
			var membersex;
			$.each(obj, function() {
				if (this.sex == "1"){
					membersex = "男";
				}
				else{
					membersex = "女";
				}
				usertype = "管理员";
				var finaldata = {
					userid: this.username,
					username: this.studentname,
					usertel: this.tel,
					usersex: membersex,
					usertype: usertype
				};
				var html = template('artemplate8',finaldata);
				$("#adminusertable").append(html);
			});
		}
	});
}

newadmin = function(){
	studentID = document.getElementById("modal-form-admin-id").value;
	var tel = $("#modal-form-admin-tel").val();
	var name = $("#modal-form-admin-name").val();
	var count = 0;
	if (studentID == ""){
		alert("请输入您的学号");
	}
	else if (!(reg.test(studentID))){
		alert("请输入合法的学号");
		$("#modal-form-admin-id").val("");
	}
	if (name == ""){
		$("#modal-form-admin-name").addClass("alert-danger");
		count ++;
	}
	if (tel.length != 11){
		$("#modal-form-admin-tel").addClass("alert-danger");
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
			url:"newadmin.php",
			data:$("#modal-form-admin").serialize(),
			dataType:"text",
			async:true,
			success: function(data){
				//alert(data);
				//判断是否注册成功
				if (data === "success"){
					alert("注册成功");
					$("#modal-form-admin-id").val("");
					$("#modal-form-admin-pwd").val("");
					$("#modal-form-admin-name").val("");
					$("#modal-form-admin-tel").val("");
					$("#modal-admin").modal("hide");
				}
				else if(data === "exist"){
					alert("用户已存在");
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

approveactivity = function(){
	var activityid = event.target.id;
	$.ajax({
		type:"post",
		url:"approveacti.php",
		async:true,
		data: {"activityid": activityid},
		success: function(data){
			if (data == 'success')
				alert("成功通过");
			else
				alert("通过失败");
			loadAdminFlow();
		}
	});
}

approvecourse = function(){
	var activityid = event.target.id;
	$.ajax({
		type:"post",
		url:"approvecourse.php",
		async:true,
		data: {"activityid": activityid},
		success: function(data){
			if (data == 'success')
				alert("成功通过");
			else
				alert("通过失败");
			loadAdminFlow();
		}
	});
}

removeactivity = function(){
	var activityid = event.target.id;
	$.ajax({
		type:"post",
		url:"removeacti.php",
		async:true,
		data: {"activityid": activityid},
		success: function(data){
			if (data == 'success')
				alert("成功移除");
			else
				alert("移除失败");
			loadAdminFlow();
		}
	});
}

quit = function(id, activityid){
	var transition = {"activityid": activityid,
				  "id": id,};
	var jsonStr = JSON.stringify(transition);
	$.ajax({
		type:"post",
		url:"quit.php",
		async:true,
		data:{"transition": jsonStr},
		dataType:"text",
		success:function(data){
			if (data == 'success'){
				alert('成功退出');
			}
			else {
				alert("退出失败");
			}
		}
	});
}
