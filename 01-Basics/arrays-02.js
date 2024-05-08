const marvel_heros = ["Ironman", "Caption America", "Thor" ]
const dc_heros = ["Superman", "Batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// push and concat are same

// const all_heros = dc_heros.concat(marvel_heros)
// console.log(all_heros);

// use spread instead of concat (its more prefferable)
// const all_new_heros = [...marvel_heros, ...dc_heros]  // merges both the strings
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [1, 4, 6, [7, 4, 8, 0]]]  // when arrays are inside another array
// const real_another_array = another_array.flat(Infinity)  // it will merge all the arrays annd give the final output

// console.log(real_another_array);


console.log(Array.isArray("Chhavi")); // asking whether its an array or not output: false
console.log(Array.from("Chhavi")); // converting it into an array
console.log(Array.from({name:"Chhavi"})); // output: [] empty array it cant directly convert this:{}

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))  // output:[100, 200, 300]