var http=require("http");
var server=http.createServer(function(req,res){
	if(req.url!=="/favicon.ico"){
		res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"});
		res.write("hello,我是获取到的");
	}
	res.end();
});
server.listen(8888,"localhost",function(){
	console.log("开始监听...");
});