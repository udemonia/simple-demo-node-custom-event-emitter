const Emitter = require('events'); //! Node JS Event Emitter Constructor
const { events } = require('./config'); //! Importing Event Constants

const emtr = new Emitter();
const GREET = events.GREET;

emtr.on(GREET, () => {
    console.log('Hello');
})
emtr.on(GREET, () => {
    console.log('A greeting has occurred');
})

emtr.emit(GREET);

