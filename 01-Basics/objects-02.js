// Singleton

const RegularUser = {
    email: "someone123@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Chhavi",
            lastname:"Gehlot"
        }

    }
}

// console.log(RegularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const objresult = Object.assign({}, obj1, obj2, obj3)
// console.log(objresult);

const objresult = {...obj1, ...obj2, ...obj3}  // modern way of combining multiple elements, it's called spread
console.log(objresult);

const tinderUser = {} 

tinderUser.id =  "123admin",
tinderUser.name = "Sam",
tinderUser.isLoggedIn = false

console.log(tinderUser);

const Users = [
    {
        id: 1,
        email: "C@gmail.com"
    },
    {
        id: 1,
        email: "C@gmail.com"
    },
    {
        id: 1,
        email: "C@gmail.com"
    }
]

Users[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // hasOwnProperty tells whether the key tinderuser has isLoggedIn as a property or not in this case it's true

// Destructuring

const course = {
    courseName: "xyz",
    price: "999",
    courseInstructor: "Chhavi"
}

const {courseInstructor: Instructor} = course //destructure

// console.log(courseInstructor);
console.log(Instructor);