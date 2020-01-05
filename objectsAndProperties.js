/*video 25: objects and properties

each value that has a name which is the key

in Arrays orders matter alot while in objects it does not matter at all.

object literal is a way of defining objects using this syntax with the 
curly braces. 

*/

//object literal
var john = 
{
	firstName: 'john', //key value //firstName is a property of john object
	lastName: 'Smith',
	birthYear: 1990,
	family: ['jane', 'mark', 'bob', 'emily'],
	job: 'teacher', 
	isMarried: false
};
console.log(john); 

//how to access from the john object
console.log(john.firstName); //dot notation

console.log(john['lastName']); //[string] another way to access the onj

var x = 'birthYear'; 
console.log(john[x]); 

john.job = 'desihner'; //mutate the data like this
john['isMarried'] = true; //another way to change it
console.log(john);

// new obj syntax
var jane = new Object(); //to create a new empty object. 
jane.name = 'jane';
jane.birthYear = 1969;
jane['lastName'] = 'smith'; 
console.log(jane);   