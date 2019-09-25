
var EventEmitter=require('events');
var Logger=require('./logger2');
const logger=new Logger();
logger.on('messageLoaded2', function(arg){
    console.log('listener called',arg)
})
logger.log('i am new to react');