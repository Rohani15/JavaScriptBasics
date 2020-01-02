//switch statement
var job = 'cop';
var firstName = 'john'; 

switch (job)
{
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' is a teacher '); 
		break;
	case "driver":
		console.log(firstName + ' is a driver ');
		break;
	case "desginer":
		console.log(firstName + ' is a designer ');
		break;
	default:
		console.log(firstName + ' has no job ');
}
//simple way of replacing a huge if else statement 

/*

var firstName = 'john'; 
var age = 16; 

if (age < 13) 
{
	console.log(firstName + " is a boy ");
}
else if (age >= 13 && age < 20) //between 13 and 20 = age >= 13 && < 20
{
	console.log(firstName + " is a teenager ")
}
else if (age >= 20 && age < 30)
{
	console.log(firstName + "is a young man")
}
else
{
	console.log(firstName + "is a man"); 
}
*/

//rewrite this above if else statement as a switch.

var firstName = 'john'; 
var age = 16;

switch (true) //want to compare. 
{
	case age < 13:
		console.log(firstName + " is a boy ");
		break;
	case age >= 13 && age < 20:
		console.log(firstName + " is a teenager ");
		break;
	case age >= 20 && age < 30:
		console.log(firstName + "is a young man")
		break;
	default:
		console.log(firstName + "is a man");

}

















