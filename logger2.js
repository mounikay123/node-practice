// extending eventEmitterClass
var EventEmitter=require('events');
class Logger extends EventEmitter{
  log(message){
        console.log(message)
        //raise an event
    this.emit('messageLoaded2', {id:1,name:"mounika"});

    }
    
}
module.exports=Logger;