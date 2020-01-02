//video 14: If / Else Statements

/*
The if else statement executes a statement if a specific condition is truthy.
if the condition is falsy, the other satement can be executed. 

The Syntax ===>

if (expression) 
{
   Statement(s) to be executed if expression is true
}
else
{
	
}

*/


var firstName = 'john';
var civilStatus = 'single'; 

if (civilStatus === "married") //=== returns true or false
{
	console.log(firstName + " is marries "); 
}	
else
{
	console.log(firstName + " will marry soon "); 
}


var isMarried = true; 
if (isMarried) 
{
	console.log(firstName + " is marries "); 
}	
else
{
	console.log(firstName + " will marry soon "); 
}


//rewriting the code from the coding challenge.
var massM = 78;
var heightM = 1.69;

var massJ = 92; 
var heightJ = 1.95;

var BMIm = massM / ( heightM * heightM);
var BMIj = massJ / (heightJ * heightJ); 

if (BMIm > BMIj)
{
	console.log("mark\' BMI is higher than johns");
}
else
{
	("johns bmi is greather than johns")
}







































