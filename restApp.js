var express=require('express');
var Joi=require('joi')
var middleware =require('./Middleware');
var helmet=require('helmet');
var morgan=require('morgan');
var config=require('config');
const app=express();
//dynamic html from pug
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/pug', function(req,res){
    res.render('index',{title:'myTalentScreen App',message:'welcome to talentscreen'});
 })
//Configuaration
console.log("Application Name" +config.get('name'));
console.log("Mail server" + config.get('mail.host'));
// console.log("Mail server password" + config.get('mail.password'));
var env=process.env.NODE_ENV;
console.log(env,"enviroment");
console.log(app.get('env'))
 app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
//app.use(morgan('tiny'));
if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log('morgan loaded')
}
app.use(function(req,res,next){
    console.log("logging.....");
    next();

})
app.use(function(req,res,next){
    console.log("authenticating.....");
    next();
    
})
app.use(middleware)

const courses=[
    {
        id:1,
        course:"java"
    },
    {
        id:2,
        course:"javaScript"
    },
    {
        id:3,
        course:"dotnet"
    }
]
const subjects=[
    {
        id:1,
        subject:"telugu"
    },
    {
        id:2,
        subject:"english"
    },
    {
        id:3,
        subject:"hindi"
    }
]
app.get('/', function(req,res){
   res.send("hello worldsssssssssssssss");
})
app.get('/api/courses', function(req,res){
    res.send( courses);
 })
 app.get('/api/courses/:id', function(req,res){
const course=courses.find(c=>c.id===parseInt(req.params.id))
if(!course){
    res.status(400).send('data not found')
}
res.send(course);

 })
 app.post('/api/courses/' ,function(req,res){

     if(!req.body.course || req.body.course.length <3){
         res.status(400).send('please mention course atleast 3 characters')
     }
    const newCourse={
            id:courses.length+1,
            course: req.body.course
        }
        console.log(newCourse,"newwwwwwwwwwwww")
    
    
      res.send(newCourse)
      courses.push(newCourse) 
  
 })
 app.get('/api/subjects', function(req,res){
    res.send( subjects);
 })
 app.post('/api/subjects/', function(req,res){
  const schema={
      subject:Joi.string().min(3).required()
  }
  const result=Joi.validate(req.body,schema);

if(result.error){
    res.status(400).send('subject is reqquired && it should be more than 3 characters')
}
   
    res.send(result);
    subjects.push(result)

 })

app.listen(8080,()=>{
    console.log("appp is running on port 8080 ")
});