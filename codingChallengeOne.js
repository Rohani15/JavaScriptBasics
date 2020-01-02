//video 12: Coding Challenge One

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