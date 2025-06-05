

const tinderUser = new Object() // singleton object
console.log(tinderUser);

const tinderUserTwo ={} // non singleton object
console.log(tinderUserTwo);

tinderUser.id = "123abc"
tinderUser.name = "Rahul"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    email: "asdfghjkl@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rahul",
            lastname: "jana"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // Combine object
const obj3 = {...obj1, ...obj2} // combine object
console.log(obj3);
