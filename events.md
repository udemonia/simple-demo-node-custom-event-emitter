# Events in Node.js

> An event is something that happens in our app that we can respond to

In node, we talk about two different kinds of events; yet talk about them as the same thing 'events'

- System Events

> events coming from the computer system, by way of C++ and the libuv library

- Custom Events

> JavaScript core events - events you can create yourself - this is the event emitter inside of Node JS core

C++ Side _When an event happens in Libuv it triggers a JS side event (faked event)_

## Understanding the Event Emitter - build your own event emitter 😀

JavaScript Aside

```JavaScript
var obj = {
    greet: 'hello!'
}

console.log(obj.greet);
console.log(obj['greet']);

//! this is the key!
const prop = 'greet';
console.log(obj[prop]);

var array = ['a', 'b', 'c'];
array.push('d');

//? we can push a function to an array
array.push(function(name) {
    console.log('Hello ' + name);
})

array.push(function() {
    console.log('Hello World!');
})

console.log(array)

array.forEach(function(item) {
    console.log(item);
})

```

## Building our own Event Emitter

> an event lister is the code that responds to an event!!!
