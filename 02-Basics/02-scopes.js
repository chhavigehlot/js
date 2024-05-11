// {}(known as scope), used in objects, known as object declaration but when {} this is used in a function or if-else then it is known as scope of a function or scope of if-else.

let a = 300     // scope outside if-else known as global scope 
const b = 200

if (true) {      // scope inside if-else known as block scope 
  let a = 10
  const b = 20
  // console.log("INNER:", a);
  // console.log("INNER:", b);
}

// console.log(a);
// console.log(b);

function one(){
  const username = "Chhavi"
  
  function two(){
    const website = "Youtube"
    // console.log(username);  // child can access parent variable
    // console.log(website);
  }

  two()  // this is execution or calling, this syntax is important, without it function won't be executed 
}
one()    // this is execution or calling, this syntax is important, without it function won't be executed 

// WRITE CONSOLE LOG INSIDE OF THE IF-ELSE STATEMENT

if (true){
  const username = "Chhavi"
  if (//username === "Chhavi" 
  true
){
    const website = " Youtube"
    // console.log(username + website);
    // console.log(website);
  }
  // console.log(username);
}


/******************INTERESTING********************/

// declaring functions by two ways:

console.log(addone(5)); // console log can be written either above or below the function when it's not stored in a variable

function addone(num){   // function declared directly
  return num + 1
}
console.log(addone(5));


// console.log(addtwo(5));     // we can't write console log before a vairable, it will give error
const addtwo = function(num){  // function stored in a variable
  return num + 1 
}
console.log(addtwo(5));    // write console log after vairable