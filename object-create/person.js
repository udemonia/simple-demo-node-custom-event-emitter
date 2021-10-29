const person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

const john = Object.create(person);

john.firstName = 'John';
john.lastName = 'Doe';

//? Now, because of the prototype chain, john.greet() will call the greet() method of the person object.

console.log(john.firstName);

//! The Prototype Chain 

//? is a good way to setup objects that inherit from each other.


/*
 ! __proto__ VS. prototype in JavaScript
 *
 * __proto__ is the actual object that is used in the lookup chain to
 * resolve methods, etc.  prototype is the object that is used to build
 * __proto__ when you create an object with new:


?       ( new Foo ).__proto__ === Foo.prototype;
?       ( new Foo ).prototype === undefined;
*/

//! THE PROTOTYPE CHAIN IS KEY TO UNDERSTANDING HOW THE EVENT EMITTER WORKS