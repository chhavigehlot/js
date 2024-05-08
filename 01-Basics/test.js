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
// console.log(AnotherName);
// console.log(Namebe);

// let user1 = {
//     email: "admin123@google.com",
//     upi:"27876"}

// let user2 = user1
// user2.email = "user2@gmail.com"

// console.log(user1.upi)
// console.log(user2.upi)

// const name = "chhavi"
// const repoCount ="50"

// console.log(`Hello my name is ${name} my repo count is ${repoCount}`);

// const gameName = new String ("chhavi-gc-com")

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf("c")); // this shows the position of character

// const newString = gameName.substring(0,4) 
// console.log(newString);

// const anotherString = gameName.slice(-7,4) 
// console.log(anotherString)

// const NewStringOne = "   Chhavi   "
// console.log(NewStringOne);
// console.log(NewStringOne.trim()); //Trim is used to remove unwanted starting and ending spaces like above in the name of chhavi.

// const url = "https://chhavi.com/chhavi%20gehlot"
// console.log(url.replace("%20", ".")); //this is used to replace something with some other thing//

// console.log(url.includes("chhavi"))  //true// // this code is to ask whether the url contains the name chhavi or not//
// console.log(url.includes("xyz"))     //false//
// console.log(url.includes("https"))   //true//

// console.log(gameName.split("-"))  // this splits the name chhavi-gc-com on the basis of "-" and gives result [ 'chhavi', 'gc', 'com' ]

// const score = 400
// console.log(score);    // without writing new the output is: 400

// const balance = new Number(100)  // by writing new it gives the output as: [Number: 100]
// console.log(balance);
// console.log(typeof balance.toString());

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //this gives the output as: 100.00, useful in e-commerce website it gives the no of 0 after decimal

// const otherNumber = 23.8889
// console.log(otherNumber.toPrecision(3)) //output: 23.9
// console.log(otherNumber.toPrecision(4)) //output: 23.89

// const number_i = 123.676
// console.log(number_i.toPrecision(3)) //output: 124

// const number_ii = 1123.676
// console.log(number_ii.toPrecision(3)) //output: 1.12e+3

// const hundreds = 10000000
// console.log(hundreds.toLocaleString())// output in us standard:10,000,000 => 10 million

// console.log(hundreds.toLocaleString("en-IN"))// output in indian standard: 1,00,00,000 => 1 crore

//******************************************************* Maths ****************************************************************/

// console.log(Math.abs(-4)) // abs gives the positive value, output: 4
// console.log(Math.round(2.56))

// console.log(Math.ceil(4.2));// ceil gives the bigger value even if the no. is 4.2 but this function will round it off to 5

// console.log(Math.floor(4.9));// as the name suggests floor it giver the lower value, it will round off 4.9 to just 4

// console.log(Math.min(2,8,78,9)); // tells the minimum value present in an array i.e 2
// console.log(Math.max(2,8,78,9)); // tells the maximum value present in an array i.e 78

console.log(Math.random()); // it will always give value from 0 to 1, but every single time it will give different value
console.log(Math.random()*10);
console.log((Math.random()*10) + 1 ); // value can also be zero so to avoid this we do +1

console.log((Math.floor(Math.random()*10)) + 1 )

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);