var os=require('os');
var fs=require('fs');
var EventEmitter=require('events');
var totalMemory=os.totalmem();
var freeMemory=os.freemem();
var log=require('./logger')
console.log(totalMemory, freeMemory);

const files=fs.readdirSync('./');
console.log(files);
fs.readdir('./', function(err,files){
    if(err){
        console.log("error")
    }
    else{
        console.log(files,"files")
    }
})


//events
const emitter=new EventEmitter();
emitter.on('messageLoaded', function(){
    console.log('listener called')
})
emitter.emit('messageLoaded');

//event arguments
const emitter2=new EventEmitter();
emitter2.on('messageLoaded2' , function(arg){
console.log('listener called',arg)
})
emitter2.emit('messageLoaded2', {id:1,name:"mounika"});
//logging message example for event arguiments
const emitter3=new EventEmitter();
emitter3.on('logging', function(e){
    console.log('logging message', e.message)
})
emitter3.emit('logging',{message:"how are you"})
log('hellooooooooooo');