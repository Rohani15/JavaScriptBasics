//codingChallengeThree

//create a simple tip calculator as a function.

function tipCalc(bill)
{
	var percentage;
	if (bill < 50)
	{
		percentage = .2; 
	}
	else if (bill >= 50 && bill < 200)
	{
		percentage = .15;
	}
	else
	{
		percentage = .1; 
	}
	return percentage * bill; 
}

console.log(tipCalc(10));
console.log(tipCalc(1000));
console.log(tipCalc(268));


//make 2 arrays one for each bill, one for bill and tip
var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]), //bills at position 0
			 tipCalc(bills[1]),
			 tipCalc(bills[2])];
console.log(tips); 

var fianlValues = [bills[0] + tips[0],
				   bills[1] + tips[1],
				   bills[2] + tips[2]]; 

console.log(fianlValues); 
