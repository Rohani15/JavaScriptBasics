//codingChallengeFour

/*

var mHeight, jHeight, mMass, jMass;
mHeight = 1.69;
jHeight = 1.95;
mMass = 78;
jMass = 92; 

var markBMI = mMass / (mHeight * mHeight);
var johnBMI = jMass / (jHeight * jHeight);
console.log(johnBMI, markBMI);

var markHigherBMI = markBMI > johnBMI; 

console.log(" is mark BMI higher than Johns BMI? " + markHigherBMI); 

*/

var john =
{
	firstName: 'john',
	height: 1.95,
	mass: 92,
	calcBMI: function()
	{
		this.totalBMI = this.mass / (this.height * this.height); 
		return this.totalBMI; 
	}
};

console.log(john);
john.calcBMI(); 


var mark =
{
	firstName: 'mark',
	height: 1.69,
	mass: 78,
	calcBMI: function()
	{
		this.totalBMI = this.mass / (this.height * this.height); 
		return this.totalBMI; 
	}
};

console.log(mark);
mark.calcBMI(); 

//log into the console who has the largest bmi

if(john.totalBMI > mark.totalBMI)
{
	console.log(john.firstName + ' has higher bmi of ' + john.totalBMI);
}
else if (mark.totalBMI > john.totalBMI)
{
	console.log(mark.firstName + ' has higher bmi of ' + mark.totalBMI);
}
else
{
	console.log ('its the same')
}








