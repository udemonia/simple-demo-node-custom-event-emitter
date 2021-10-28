const Emitter = require('events'); //! Node JS Event Emitter Constructor

const emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Hello');
})
emtr.on('greet', () => {
    console.log('A greeting has occurred');
})

emtr.emit('greet');

