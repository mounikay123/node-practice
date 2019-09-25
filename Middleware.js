const middleware=function(req,res,next){
    console.log("exporting midsdlewares");
    next();
    
}
module.exports=middleware;