// creating server &routing
var http=require('http');
//const server=http.createServer(); -->basic
const server=http.createServer(function(req,res){
if(req.url==='/'){
    res.write('hello world');
    res.end()
}
if(req.url==='/read'){
    res.write('reading');
    res.end()
}
})


server.listen(8080);

console.log('port listening at 8080');
