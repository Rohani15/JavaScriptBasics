// video 17: truthy And Falsy Values

/*
in JS, falsy values is a value that is considered false when evaluated
in an if/else statement condition

these values are undefined, null, zero, empty strings

truthy values are all the values that are not falsy values.

*/

var height; 

height = 23; 
if (height || height === 0)
{
	console.log('variable is defined');
}
else 
{
	console.log('variable has not been defined');
}

//how to check if a variable is defined

//== this does type coersion so both variable datatypes do not need to match 

//===  does not do type coersion



//equality operator
if (height == '23')
{
	console.log('the == operator does type coersion');
}
//when we use == operator, it converts the 23 variable 




























