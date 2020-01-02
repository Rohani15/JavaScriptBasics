//video 15: Boolean Logic
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

/*
BOOLEAN LOGIC

AND (&&) => True if ALL are true
OR (||) => True is ONE is true
NOT (!) => inverts true/false value 

*/
