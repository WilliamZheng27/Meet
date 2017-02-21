
//在页面载入时响应式调整导航条并载入数据
$(document).ready(function(){
	navheight();
	refresh();	
})

//在窗口大小变化时响应式调整导航条
$(window).resize(function(){
	navheight();
}
)

//根据屏幕高度响应式调整导航条高度与样式
navheight = function(){
	if ($(window).width() < 768){
		$("#nav").removeClass("nav-custom");
		$("#userlogin").removeClass("form-custom");
		$("#userinfo").removeClass("pull-right");
		$("#loginbtn").addClass("btn-block");
		$("#adminloginbtn").addClass("btn-block");
		$("#registbtn").addClass("btn-block");
		$("#logoutbtn").addClass("btn-block");
		$("#searchbtn").addClass("btn-block");
	}
	else{
		$("#nav").addClass("nav-custom");
		$("#userlogin").addClass("form-custom");
		$("#userinfo").addClass("pull-right");
		$("#loginbtn").removeClass("btn-block");
		$("#adminloginbtn").removeClass("btn-block");
		$("#registbtn").removeClass("btn-block");
		$("#logoutbtn").removeClass("btn-block");
		$("#searchbtn").removeClass("btn-block");
	}
}
//从数据库获取活动数据并用模板引擎渲染
refresh = function(){
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
				var html = template('artemplate1',finaldata);
				$("#panel").append(html);
				isFull(this.people,this.peopleleft,this.activityid);
				if ($("#id").val() == ""){
					$("#" + this.activityid).addClass("hidden");
				}
				//判断该活动是否已被添加
				var transition = {
					"activityid": this.activityid,
					"id": $("#id").val()
				};
				var jsonStr = JSON.stringify(transition);
				$.ajax({
					type:"post",
					url:"isAdded.php",
					data: {"trans": jsonStr},
					dataType:"text",
					async:false,
					success:function(data){
						if (data === "exist"){
							//alert("success");
							isAdded(activityid);
							//alert(this.activityid);
						}
					},
					error: function(data){
						//alert(data);
						if (data === "exist"){
							alert("fail");
							isAdded(this.activityid);
							//alert(this.activityid);
						}
					}
				});
    		});
		}
	});
}

loadCourse = function(){
	losefocus();
	$("#pills").children().removeClass("acitive");
	$("#courseflow").addClass("active");
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
				var html = template('artemplate1',finaldata);
				$("#panel").append(html);
				isFull(this.people,this.peopleleft,this.activityid);
				if ($("#id").val() == ""){
					$("#" + this.activityid).addClass("hidden");
				}
				//判断该活动是否已被添加
				var transition = {
					"activityid": this.activityid,
					"id": $("#id").val()
				};
				var jsonStr = JSON.stringify(transition);
				$.ajax({
					type:"post",
					url:"isAdded.php",
					data: {"trans": jsonStr},
					dataType:"text",
					async:false,
					success:function(data){
						if (data === "exist"){
							//alert("success");
							isAdded(activityid);
							//alert(this.activityid);
						}
					},
					error: function(data){
						//alert(data);
						if (data === "exist"){
							alert("fail");
							isAdded(this.activityid);
							//alert(this.activityid);
						}
					}
				});
    		});
		}
	});
}

//选中活动流菜单时执行的操作
loadflow = function(){
	losefocus();
	$("#flow").addClass("active");
	$("#other").removeClass("active");
	$("#my").removeClass("active");
	refresh();
}
//选中我创建的活动菜单时执行的操作
loadmy = function(){
	losefocus();
	$("#flow").removeClass("active");
	$("#other").removeClass("active");
	$("#my").addClass("active");
	$.ajax({
			type:"post",
			url:"loadmy.php",
			async:false,
			data: {"id": $("#id").val()},
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
						flowdetail: this.detail,
						flowid: this.id,
						flowactivityid: this.activityid,
						flowstart: this.start,
						flowend: this.end,
					};
					var html = template('artemplate2',finaldata);
					$("#panel").append(html);
					loadmember(activityid);
	    		});
			}
	});
}

//选中我参加的活动菜单时所执行的操作
loadother = function(){
	var id = $("#id").val();
	losefocus();
	$("#flow").removeClass("active");
	$("#my").removeClass("active");
	$("#other").addClass("active");
	$.ajax({
			type:"post",
			url:"loadother.php",
			async:false,
			data: {"id": id},
			dataType: "text",
			success: function(data){
				$("#panel").empty();
				//alert(data);
				var result = data.substring(0,data.length - 1);
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
						flowdetail: this.detail,
						flowid: this.id,
						flowactivityid: this.activityid,
						flowstart: this.start,
						flowend: this.end,
					};
					var html = template('artemplate2',finaldata);
					$("#panel").append(html);
					loadmember(activityid);
	    		});
			}
	});
}
//在我创建的活动与我参加的活动中从数据库载入活动成员并渲染
loadmember = function(activityid){
	$.ajax({
		type:"post",
		url:"loadmember.php",
		async:false,
		data: {"activityid": activityid},
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
				var finaldata = {
					flowactivityid: activityid,
					membername: this.studentname,
					memberid: this.username,
					membertel: this.tel,
					membersex: membersex
				};
				var html = template('artemplate3',finaldata);
				$("#" + activityid + "-member").append(html);
			});
		}
	});
}

//若活动已满，改变button的样式并移除点击事件
isFull = function(people,peopleleft,activityid){
	if (people == peopleleft){
		$("#" + activityid).addClass("disabled");
		$("#" + activityid).text("已满");
		$("#" + activityid).unbind("click");
	}
}

//若活动已经被添加，改变button的样式
isAdded = function(activityid){
	$("#" + activityid).removeClass("btn-primary");
	$("#" + activityid).addClass("btn-success");
	$("#" + activityid).addClass("disabled");
	$("#" + activityid).text("已添加");	
	$("#" + activityid).append("<span class='glyphicon glyphicon-ok'></span>");
	$("#" + activityid).unbind("click");
}

losefocus = function(){
	$("#courseflow").removeClass("active");
	$("#flow").removeClass("active");
	$("#adminCourse").removeClass("active");
	$("#adminFlow").removeClass("active");
	$("#adminWait").removeClass("active");
	$("#adminWaitCourse").removeClass("active");
	$("#adminUser").removeClass("active");
	$("#my").removeClass("active");
	$("#other").removeClass("active");
	$("#adminTeacher").parent().removeClass("active");
	$("#adminStudent").parent().removeClass("active");
	$("#adminAdmin").parent().removeClass("active");
}