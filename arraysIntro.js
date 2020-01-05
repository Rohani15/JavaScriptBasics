// video 22: ARRAYS

var names = ['john', 'mark', 'jane'];
var years = new Array(1990, 1969, 1948); //array function
//arrays are 0 based

//inititalize new array
console.log(names[0]); //john is element 0
console.log(names.length); //shows how many elements are there 

//mutate array data
names[1] = 'ben'; 
console.log(names); //will make ben position 1 and no longer mark

//add data
names[5] = 'mary'; 
names[names.length] = 'mary'; //adds it as last array at position number 3
console.log(names); 


//different data types
var john = ['john', 'smith', 1990, 'designer', false];

//methods
john.push('blue'); //add an element at the end of the array
john.unshift('Mr') //adds to the beginning of the array
console.log(john); 

john.pop() //removes element from the end
john.shift() //removes from the beginning 
console.log(john);

john.indexOf(1990); //returns the position of what it appears in the array
console.log(john.indexOf(1990)); //return -1 is element is not in the array

//ternary operator
var isDesigner = john.indexOf('designer') === -1 ? 'john is Not a designer'
: 'john is a designer'
console.log(isDesigner); 