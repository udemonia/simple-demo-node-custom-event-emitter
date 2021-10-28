const moduleSystem = require("../moduleSystem");


//? create an function Emitter creator w/ an empty object
function Emitter() {
  this.events = {};
} 

//? Lets add on methods to the prototype of any object that uses this constructor

//* an event lister is the code that responds to an event!!!

//* take in a type and a listener function
Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    //? e.g. if there is no event of type 'type' then iterate through the array of listeners and invoke each one
    if (this.events[type]) {
        //? if there are any functions within the array, invoke each one
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;