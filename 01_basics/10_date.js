
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2025,0,23) // first month count start in 0
console.log(myCreatedDate.toDateString());

let myCreatedDate_ = new Date(2025,0,23,5,4,50)
console.log(myCreatedDate_.toLocaleString());

let _myCreatedDate = new Date("2025-01-14") // first month count start in 1
console.log(_myCreatedDate.toLocaleString());

let _myCreatedDate_ = new Date("01-14-2025") // first month count start in 1
console.log(_myCreatedDate_.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); // value in millisecond from 1st-jan-1970 to new time

console.log(myCreatedDate.getTime()); // value in millisecond from 1st-jan-1970 to Jan 23 2025

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate); // start in 0
console.log(newDate.getMonth()); //start in 0
console.log(newDate.getMonth()+1); // start in 1
console.log(newDate.getDay()); //start in monday

console.log(newDate.toLocaleDateString('default', {
    weekday: "long"
}));
