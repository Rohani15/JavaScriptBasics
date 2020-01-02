//chapter 19

var cleanestCities; 
var matchFound = false;
for (let i in cleanestCities) {
  if (cityToCheck === cleanestCities[i]) {
    console.log('Cleanest city!');
    matchFound = true;
    break; // exits the loop once match found.
  }
}

if (!matchFound) {
  console.log('You suck!');
}


//chapter 20 nested loops
var firstName = ["a", "b", "c", "d", "e"]; 
var lastName = ['f', 'g', 'h', 'i'];
var fullName = []; 
for (var i = 0; i < firstName.length; i++); 
{
	for (var j = 0; j < lastName.length; j++)
	{
		fullName.push(firstName[i] + " " + lastName[j]); 
	}
}
console.log(fullName); 
//---------------------------------------------------------------------------
var firstNames = ['BluRay', 'Upchuck', 'Lojack', 'Gizmo', 'Do-Rag'];
var lastNames = ['Zzz', 'Burp', 'Dogbone', 'Droop'];
var fullNames = [];  // empty array
for (let i in firstNames) 
{
  for (let j in lastNames) 
  {
    fullNames.push(firstNames[i] + " " + lastNames[j]);
  }
}
console.log(fullNames);


//CHAPTER 22




































