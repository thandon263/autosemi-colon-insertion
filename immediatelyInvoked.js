// Function statement
function greet(name) {
	console.log("hello ", name)
}
greet("Thando")

// using function expression
var greetFunc = (name) => {
	console.log('Hi! ' + name)
}

greetFunc('Thando')

// using an Immediately invoked function expression
var greeting = function (name) {
	console.log('Hello ', name)
}('Thando')

var firstname = "Thando"
// An IIFE
(function(name) {
	var greeting = 'Inside IIFE: Hello'
	console.log(greeting + ' ' + name)
})(firstname)




