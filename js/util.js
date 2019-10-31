function tpl(url){
	let tpl;
	$.ajax({
        url: url, //这里是静态页的地址
        type: "GET", //静态页用get方法，否则服务器会抛出405错误
        async:true,
        success: function(data){
        	tpl = data;
        }
    });
    return tpl;
}