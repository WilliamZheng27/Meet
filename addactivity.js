
//将活动id及其它信息提交到后台以添加活动
addactivity = function(){
	var id = $("#id").val();
	var currentbtn = event.target;
	var activityid = event.target.id;
	//alert(activityid);
	var activity = $("#"+activityid+"-activity").text();
	//alert(activity);
	var author = $("#"+activityid+"-author").text();
	var tel = $("#"+activityid+"-tel").text();
	var activitydate = $("#"+activityid+"-date").text();
	var detail = $("#"+activityid+"-detail").text();
	var authorid = $("#"+activityid+"-id").text();
	
	var transition = {"activity": activity,
				 "author": author,
				 "tel": tel,
				 "activitydate": activitydate,
				 "detail": detail, 
				 "authorid": authorid,
				 "id": id,
				 "activityid": activityid
		};
	var jsonStr = JSON.stringify(transition);
	//alert(jsonStr);
	$.ajax({
		type:"post",
		url:"addactivity.php",
		async:true,
		data: {"transition": jsonStr},
		dataType:"text",
		success: function(data){
				//alert(data);
				if (data === "success"){
					//alert (data);
					//alert("加入成功");
					isAdded(activityid);
					$("#" + activityid).blur();
					var people = parseInt($("#" + activityid + "-people").text());
					var peopleleft = parseInt($("#" + activityid + "-peopleleft").text());
					//alert(people);
					//alert(peopleleft);
					peopleleft = peopleleft + 1;
					$("#" + activityid + "-rate").text(peopleleft + "/" +people);
					var percent = peopleleft / people * 100;
					var rate = percent.toString();
					//alert(rate);
					$("#" +activityid + "-bar").width(rate + "%");
					$("#" +activityid + "-bar").text(rate + "%");
					
				}
				else {
					alert("添加失败");
				}			
		}
	});
}
