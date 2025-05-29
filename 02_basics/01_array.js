
const myarray = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const myArray = new Array(1, 2, 3, 4)
console.log(myarray[1]);
console.log(myarray.length);

// Array method.............

myarray.push(6)
myarray.push(7)
myarray.pop()
console.log(myarray);

myArray.unshift(9)
console.log(myArray);
myArray.shift()
console.log(myArray);


console.log(myarray.includes(9));
console.log(myarray.indexOf(3));


const newarr = myarray.join()
console.log(myarray);
console.log(newarr);
console.log(typeof newarr);

// slice , splice method............

console.log("A ",myarray);

const myn1 = myarray.slice(1, 3)
console.log(myn1);
console.log("B ",myarray);

const myn2 = myarray.splice(1, 3)
console.log(myn2);
console.log("C ",myarray);
