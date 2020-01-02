//codingChallengeTwo

var teamJ = (89 + 120 + 103) / 3;
var teamM = (116 + 94 + 123) / 3; 
var teamMA = (97 + 134 + 105) / 3;
console.log( teamJ, teamM, teamMA); 

if (teamJ > teamM && teamJ > teamMA)
{
	console.log( teamJ  + ' john is the highest '); 
}
else if (teamM > teamJ && teamM > teamMA)
{
	console.log(teamM  +  'mark is the highest ');
}
else if (teamMA > teamJ && teamMA > teamM)
{
	console.log(teamMA  +  'mark is the highest ');
}
else
{
	console.log( 'All have the highest ');
}