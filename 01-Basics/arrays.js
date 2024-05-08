// ARRAYS => arrays should be in []
// arrays create shallow copies i.e, from the same reference point which is heap not deep copies which is stack

const myArray = [0,1,2,3,4,5]
console.log(myArray[0]);

// Array methods

// myArray.push(10) // it adds the typed no. written in const myArray = [0, 1, 2, 3, 4, 5]  ,  output: [0, 1, 2, 3, 4, 5, 10]
// myArray.pop()  // it removes one value from [0, 1, 2, 3, 4, 5, 10] , output = [0, 1, 2, 3, 4, 5]


// myArray.unshift(9) // adds 9 before the main array , output: [9, 0, 1, 2, 3, 4, 5]
// myArray.shift() // removes the no. back, output: [0, 1, 2, 3, 4, 5]


// console.log(myArray.includes(9)); // questioning output: false
// console.log(myArray.indexOf(9));  // output: -1 means value 9 does not exisit inside of our array
// console.log(myArray.indexOf(3));  // output: 3 cause it exists 


// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray); //output: 0,1,2,3,4,5 .join() joins it without brackets also it converts object into string


//Slice, Splice

console.log("A", myArray);
console.log("B", myArray);

const xyz1 = myArray.slice(1 , 3) //output:[1,2]
console.log(xyz1);

const xyz2 = myArray.splice(1 , 3)  //output:[1,2,3]
console.log("C", myArray); // splice gives the rest of the output that is 1,2,3 are taken out because of above and now the output is : C [0, 4, 5]
console.log(xyz2);