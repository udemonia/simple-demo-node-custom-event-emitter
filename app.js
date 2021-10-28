const Emitter = require('./emitter');

const myEmitter = new Emitter();

//!! by registering the on and emit methods w/ prototype, we can use them on instances of the emitter class

//? two listeners setup, with functions sitting inside of an array, just awaiting the event to run
myEmitter.on('greet', function() {
    console.log('Somewhere, someone said hello.');
});

myEmitter.on('greet', function() {
    console.log('A greeting occurred!');
})


myEmitter.emit('greet');