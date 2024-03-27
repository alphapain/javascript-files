// //      +
// //      -
// //      *
// //      **
// //      /
// //      %

// //  newStr = str1 + str2   <string concatenation>

// // IMPORTANT >

// console.log("1" + 2);   //12 // concatenate
// console.log(1 + "2");   //12

// //  but if
// console.log("1" + 2 + 2);   // 122 >> agr string first hai to sbko string me treat kiya jayega

// // can check reason on ECMAScript

// console.log(1 + 2 + "2"); //  <1+2> + 2 => 32  >> agr string last me hai to pehle jo hai vo conversion ho jayega!      


// // not prefered to do these type of conversion
// console.log(+true); // 1
// console.log(+""); // 0 


// <!--------------------------------->

// post-fix (baad m +)     and pre-fix (pehle +)  >>> pre and post increment and drcrement


/* Description --> 

if used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing

if used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing
*/

// try with examples <
// let a = 1 
// let b = a++ 

// console.log(a)
// console.log(b)


// let x = 1
// let y = ++x

// console.log(x, y);

let x = 3
let y = x++

console.log(x);
console.log(y);


let a = 1
let b = ++a

console.log(a); //2
console.log(b); //2
