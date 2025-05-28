
//...............nums.................

const score = 400
console.log(score);

const balance = new Number(100.)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //en-In :- India number system

// .............MATH.................

console.log(Math);
console.log(Math.abs(6));
console.log(Math.abs(-6)); //convert - to +
console.log(Math.round(4.4)); 
console.log(Math.round(4.5));
console.log(Math.ceil(4.1)); //4.1,4.2,...4.9 = 5
console.log(Math.floor(4.2)); //4.1,4.2,...4.9 = 4
console.log(Math.min(4, 7, 1, 8)); //find min value
console.log(Math.max(4, 7, 1, 8)); //find max value

console.log(Math.random()); //value 0 to 1
console.log(Math.random()*10); //value shift one position left
console.log((Math.random()*10)+1); //value shift one position left and 
// value : 1.345 not 0.0344 (first 0) is avoid and value up to 0 
console.log(Math.floor(Math.random()*10)+1); // value is one number up to 0

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+min); //value is under the 10 and 20
