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