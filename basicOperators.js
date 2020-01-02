//video 10: basic operators

var year, yearJohn, yearMark; 
now = 2020; 
ageJohn = 23;
ageMark = 24; 

//Math operators
yearJohn = now - ageJohn; 
yearMrk = now - ageMark; 

console.log(yearJohn); 

console.log(now + 2);
console.log(now * 2); 
console.log(now / 10); 

//logical operators 
var johnOlder = ageJohn < ageMark; //comes out as true: BOOLEAN
console.log(johnOlder); 

//typeof operator
console.log(typeof johnOlder); 
console.log(typeof ageJohn); 
console.log(typeof "mark is older than john"); 
var x; 
console.log(typeof x); //undefined 


//video 11: Operator Precedence

//declare variables
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJohn >= fullAge; 
console.log(isFullAge); //returns true

//grouping
var ageJohn = now - yearJohn; 
var ageMark = 35; 
var average = (ageJohn + ageMark) / 2;
console.log(average); 

//mu;tiple assignments
var x, y;
x = y = (3 + 5) * 4 - 5; //t o assign this to x and y at the same time
//grouping will have precedence 
//8 * 4 - 6 // 32 - 6 // ==> 26
console.log(x, y); // ==> 26 26


//More Operators
x *= 2; // x = x * 2; 
console.log(x); //52
x += 10;
console.log(x); //62


//Increments
//i++ and i-- and i+= and i-=







































