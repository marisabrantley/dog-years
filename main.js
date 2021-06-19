// My age is 42.
const myAge = 43;
// Early Years = 2.
let earlyYears = 2;
earlyYears *= 10.5;
// Subtracting 2 from my age.
let laterYears = myAge - 2;
// Calculating number of dog years accounted for by my later years.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Adding early years and the later years.
const myAgeInDogYears = earlyYears + laterYears;
// Making name all lower case.
const myName = 'Michael Brantley'.toLowerCase();
// Statement to pring displaying name and age in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)