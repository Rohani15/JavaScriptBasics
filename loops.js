//video 29: loops and iteration 


//for loops
for(var i = 0; i < 10; i += 2)
{
	console.log(i);
}
//prints numbers 1 through 10
//i = 0, 0 <10, log i to console, i++
//i = i, i, 10 true, log i to the console, i++
//...
//i = i, 9, 10 true, log i to the console, i++
//i = i, 10, 10 FALSE, exits the loop!

//john.length = length of the array
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) //we start at 0 cause array is 0 based
{
	console.log(john[i]); 
}



//while loop
var i = 0; 
while(i < john.length)
{
	console.log(john[i]); 
	i++ 
}
//same thing as the for loop up there



//continue and break statements
//we use the break statement to break out of a loop
//use the continue statement to quot the current iretation of the loop adn continue woth the next one

//continue
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) //we start at 0 cause array is 0 based
{
	if (typeof john[i] !== 'string') continue; //!== different operator
	console.log(john[i]); 
}
//when it encountes something that is not a string, it skips over and continues


//break
for (var i = 0; i < john.length; i++) //we start at 0 cause array is 0 based
{
	if (typeof john[i] !== 'string') break; //!== different operator
	console.log(john[i]); 
}
//when it encounters something that is not a string it stops


//looping backwards
for (var i = john.length - 1; i >= 0; i--) //we start at 0 cause array is 0 based
{
	//if (typeof john[i] !== 'string') break; //!== different operator
	console.log(john[i]); 
}

//john.length - 1 ==> position 5
//i >= 0 ==> be executed whenever i is larger than 0














































