// 1. singleton
// 2. object.create






// 3. object literals .................

const mysym = Symbol("key1")
console.log(typeof mysym);


const jsuser = { //object
    [mysym]: "mykey1", // access Symbol in object
    name: "Rajshekhar",
    age: 18,
    location: "kolkata",
    email: "nwxnbjb@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"],
}

console.log(jsuser.email); // this mostly not used
console.log(jsuser["email"]); // this mostly used
console.log(jsuser[mysym]);

jsuser.email = "rjshekharmscabss@gmail.com";
// Object.freeze(jsuser)
jsuser.email = "dshfhkdsgfd@gmail.com";
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsuser.greeting); // [Function (anonymous)]
console.log(jsuser.greeting()); //Hello js user and undefined


jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser.greetingTwo());