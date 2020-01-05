//video 26: methods

var john = 
{
	firstName: 'john', //key value //firstName is a property of john object
	lastName: 'Smith',
	birthYear: 1990,
	family: ['jane', 'mark', 'bob', 'emily'],
	job: 'teacher', 
	isMarried: false
	calcAge: function(birthYear) // a method of john
	{
		this.age = 2018 - this.birthYear; //this ==> means job or current obj so john
	}
};

john.calcAge(); 
console.log(john); 

//object has a this keyword that basically points to itself