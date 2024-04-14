// Immediately Invoked Function Expression (IIFE).....

// immediately function invoke krne k liye or dusre global variable hmare function ko polute na kre usse bachne k liye iske use kiya jata or immediately database ko connect krne k liye v...
//global scope k declaration se  variable ya other declaration se problem hoti hai kyi baar, to us pollution ko remove krne k liye hm IIFE ka use krte hain.
// (function one(){
//     console.log(`DB connected`);
// })(); // IIFE banane k liye complete function ko () me wrap kr dete hai or function k end m v () laga dete hain 

// first (function) >> k ander complete function or dusre () ka mtlb hai function call 
// jaise normal function call k time hm function name likh ke baad me () use krte hai jaise  >>> one() ... usi trh se dusre() ka mtlb function call hai...


// *******************************************************
// IIFE ko ye nhi pata hota hai actually me context ko rokna kaha pr hai to uske liye >>>

// (function two() { // >> 1 
//     console.log(`DB connected two`);
// })();

// // function two  normally run hoga

// (function three() {
//     console.log(`Db connected three`);
// })() // lekin function three run nhi hoga reason line no 14, to hame function three ko run krne k liye function two k end me ; lagana pdega

// now two and three both will run normally


// *************************************************************
// we can use arrow function in IIFE
// (() => {
//     console.log(`DB connected Arrow Operator`);
// })();

// *************************************************************
// we can also pass parameter in IIFE
((name,id) => {
    console.log(`DB connected successfully by ${name} with his id ${id}`);
})("Deep", 1)
// output >> DB connected successfully by Deep with his id 1


// more >> named IIFE jinka kuch naam hota hai like function one, two or three uper kre hai or unnamed IIFE jinka naam nhi hota like arrow opertor in IIFE...