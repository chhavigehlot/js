// console.log("Chhavi Gehlot")//

let isLoggedIn = null

let BooleanLoggedIn = Boolean(isLoggedIn)
// console.log(BooleanLoggedIn);

let someNumber = "33"
let ValueInString = String(someNumber)

// console.log(ValueInString); 
// console.log(typeof ValueInString); 

// console.log("1" + 2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log(1+2)
// console.log("1"+ 2+ 2);

let Namebe = "Chhavi"
let AnotherName = Namebe
AnotherName = "Name1"
// AnotherName ki copy change ki gayi that is why the real variable remains the same which is te Namebe 
console.log(AnotherName);
console.log(Namebe);

let user1 = {
    email: "admin123@google.com",
    upi:"27876"}

let user2 = user1
user2.email = "user2@gmail.com"

console.log(user1.upi)
console.log(user2.upi)

const name = "chhavi"
const repoCount ="50"

console.log(`Hello my name is ${name} my repo count is ${repoCount}`);

const gameName = new String ("chhavigc")

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("c")); // this shows the position of character

const newString = gameName.substring(0,4) 
console.log(newString);

const anotherString = gameName.slice(-7,4) 
console.log(anotherString)

const NewStringOne = "   Chhavi   "
console.log(NewStringOne);
console.log(NewStringOne.trim()); //Trim is used to remove unwanted starting and ending spaces like above in the name of chhavi.



// const score = 400
// console.log(score);