// Objects : {}

// Singleton

// Object.create

//Object literals

// SYMBOL
 // Syntax of symbol is as follows:
 //key should be in [] like: [mySym]
 // This is must: const mySym = Symbol("key1")
 // Use [] even in console.log as shown below

const mySym = Symbol("key1")
const JsUser = {
    name : "Chhavi",
    "Full name": "Chhavi Gehlot",
    [mySym]: "myKey1",
    age: "17",
    location: "Jodhpur",
    email: "admin123@gmai.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // this is important, email can be accessed in two ways this one and the one shown above
// console.log(JsUser[mySym])
// console.log(JsUser["Full name"]);

// JsUser.email = "Chhavigehlot@gmail.com" // with the help of "=" we can override the previous value like before the email was admin.... now its chhavi..... 
// Object.freeze(JsUser)
// JsUser.email = "chhavi123@gmail.com"  // output: Chhavigehlot@gmail.com as freeze property freezes and dont allow any changes after freezing 
// console.log(JsUser);

//Function

JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)  //***important***// whenever we want to refer the same object that is JsUser and if we write ${this.} it will suggest all the properties inside of that object and then we can use them as used above.
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


