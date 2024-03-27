// kis trh se data ko memory me rakha jata hai or access kia jata hai us bases pe DT ka 2 types hai :-

// 1. primitive DT >> sabhi primitive DT call by value hote hain, mtlb jb bhi hm inhe kahi se kahi copy krte hai to  jo original data vo memory ka reference nhi dia jata, copy krke aapko dia jata hai alag or ab jo bhi aap usne change krte hai vo copy me change hote hain

// 7 types >>> String, Number, Boolean, Null, Undefined, Symbol, BigInt.
// example =>
    const score = 100;
    const value = 9.2;
    const isLoggedIn = false
    const outsideTemperature = null
    let userEmail; // undefined 
    let userNewEmail = undefined // undefined

    const id = Symbol('1234')
    const newId = Symbol('1234')
    // dono ki value same nhi hai q ki symbol unqiue-ness k liye use kiya jata hai

    // checking whether the value is true or not:
    console.log(id === newId); // false

    const bigNumber = 3478923n; // last me n use krna bigInt ko represent krta hai



// 2. non-primitive (reference type) >> ye saari values vo hai jo ki memory me inka refernce directly allocate kia ja skta hai

// Array, Objects, Function 

// example =>
const heroes = ["deep", "sahil", "manish"];

const myObj = {
    name : 'deep',
    age : 19,
}

const myFunction = function(){
    console.log("hello world");
}
// javascript is a dynamicallty types language, because data type will automatically assigned at the time of compilation or code execution.


// how to find DT of any variable -> use "typeof"
let undefinedVariable;
console.log(undefinedVariable); // undefined


// function ka DT function hi hota hai but bola "Object function" jata hai, jitne v non-primitive DT hai unka return type "object" hi aata hai
