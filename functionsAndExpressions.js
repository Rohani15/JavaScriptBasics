//Video 21: Function Statements and Expressions


//function declaration ==> function whatDoYouDo(job, firstName) {}

//function expression
var whatDoYouDo = function(job, firstName)
{
	switch(job)
	{
		case 'teacher':
			return firstName + ' is a teacher '; //dont have to add break because of return keyword
		case 'driver':
			return firstName + ' is a driver '; 
		case 'designer':
			return firstName + ' is a designer '; 
		default:
	}		return firstName + ' does something else '; 

}
console.log(whatDoYouDo('teacher', 'john')); 
console.log(whatDoYouDo('driver', 'mary')); 
console.log(whatDoYouDo('nothing', 'sam')); 