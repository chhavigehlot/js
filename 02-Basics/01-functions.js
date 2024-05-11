function sayMyName(){

  console.log("C");
  console.log("H");
  console.log("H");
  console.log("A");
  console.log("V");
  console.log("I");

}

// sayMyName() // () means execution without it it only means that its a reference it don't give any output

// function addTwoNumbers(Number1, Number2){   // in the definition of function whatever input we take is called as parameters, this is parameters: (Number1, Number2)
//   console.log(Number1 + Number2);
// }


function addTwoNumbers(Number1, Number2){
    // let result = Number1 + Number2
    // // console.log("Chhavi"); 
    // return result  // after result nothing can pe printed 
    // console.log("Chhavi"); // it will not get printed as it is written after result, but if we write this function before result then it will get printed

    return Number1 + Number2   // easy way to print the same thing as above REMEMBER to store a return value inside a variable not in a consol log
}

const result = addTwoNumbers(3, 5)  
// console.log("Result :",result);
// addTwoNumbers(3, null)  // when we call the funtion, then the value inside of it is known as arguments, like (3, null) 


function loginUserMessage(username){
  // if(username === undefined)// 
  {
    if(!username) // this means same as above, ! means "not" or false 
    console.log("Please enter a username");
    return                                // we used return here to not print the next line though we did not return anything 
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage());

//adding multiple values like in the cart when people buy more than one thing, in e-commerce store

function calculateCartPrize(...num1){     // ... is rest operator and also spread operator but here it works as rest operator 
return num1}

console.log(calculateCartPrize(100, 200, 600, 8000, 2000));

// passing objects in fuction
const user = {
  username: "Chhavi",
  price: 199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user) or

handleObject({    // passing direct object instead of making an object like we made above-> const user
  username: "xyz",
  price: 399
})

// passing arrays in function 

const myNewArray = [200, 400, 800, 100]

function returnSecondValue(getArray){
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); or 
console.log(returnSecondValue([200, 400, 800, 100]));