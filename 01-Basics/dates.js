//DATES

let myDate = new Date()
// console.log(myDate.toString()) // this gives date, day, year and universal time

// console.log(myDate.toDateString()) // gives only date and day with year

// console.log(myDate.toISOString()) // gives standard date with time

// console.log(myDate.toJSON()) // same as above

// console.log(myDate.toLocaleDateString()) //local way of writting date 

// console.log(myDate.toLocaleString()) //  5/1/2024, 10:29:31 AM

// console.log(myDate.toTimeString()); // gives universal time only

// console.log(myDate.toUTCString()); // Wed, 01 May 2024 10:31:02 GMT


// let myCreatedDate = new Date(2024,4,1)   // IN JS MONTHS START WITH 0
// console.log(myCreatedDate.toDateString())

// let date = new Date("2024-05-20") // yy-mm-dd
// // console.log(date.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // gives in millisecond
// console.log(date.getTime());
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));  // to get the time in seconds

let getDate = new Date()
console.log(getDate); // gives the ewhole time 2024-05-01T11:18:39.124Z
console.log(getDate.getDate()); // to know specificly only date i.e 1
console.log(getDate.getDay()); 
console.log(getDate.getFullYear());
console.log(getDate.getTime());

console.log(`Today's date is ${getDate.getDate()} and the current time is ${getDate.getTime()} `);

console.log(getDate.toLocaleString("default",{
    weekday:"long",
    month:"long",
    year:"numeric"
})
); 
