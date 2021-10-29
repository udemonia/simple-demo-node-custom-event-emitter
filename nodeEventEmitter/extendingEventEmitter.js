var Emitter = require('events');
var util = require('util');



function Greeter() {
    this.greeting = 'Hello world!';
}

//? anything that is created with greeter will inherit from emitter
utils.inherits(Greeter, Emitter);


Greeter.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');
}

var greeter = new Greeter();

greeter.on('greet', function() {
    console.log('Someone greeted!');
});