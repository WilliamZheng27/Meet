search = function(){
	var searchcont = $("#searchcontent").val();
	if (searchcont == ""){
		refresh();
	}
	$.ajax({
		type:"post",
		url:"search.php",
		async:true,
		dataType:"text",
		data:$("#searchform").serialize(),
		success:function(data){
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
					flowpeoplepercent: this.peopleleft / this.people * 100,
					flowdetail: this.detail,
					flowid: this.id,
					flowactivityid: this.activityid
				};
				var html = template('artemplate1',finaldata);
				$("#panel").append(html);
				isFull(this.people,this.peopleleft,this.activityid);
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
					}
				});
    		});
		}
	});
}