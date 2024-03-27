// 1. string concatenate
const name = "deep "
const count = 50
console.log(name + "with count " + count); // old method outdated

//  string inter-polation
// template literals  >> using back-tick and placeholders

console.log(`Hello, my name is ${name} with repo-count ${count}`);

// we can add more method on the go in the string inter-polation method on place-holders i.e. uppercase and other methods valid for strings.
 
// one more method for declaring string :-
const myName = new String ("Deep Rajput")  // new is a keyword
                                           // we are using js object here.
                                           // put ur string inside().
console.log(myName);
// note -> but when we run this type of declaration string in console window then it is different from other methods of declaring strings.
// try to run on console window. >> then >> ye ek string return krega , string ek object hai idhr, key-value pairs milti hai , index , length property, prototype and many other methods in property!!


// access key-value pairs
console.log(myName[0]); // D
console.log(myName.__proto__); // accessing prototype >> returns object

// proto k methods access krne k liye "__proto__" method ke  shuru me likhne ki jrur nhi hai sidha "variable.method" se access kr skte hain
//prototype ke methods bhi aise hi access kr skte hai
console.log(myName.length);
console.log(myName);

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
// lekin ye dono method original string ko change nhi krenge bcoz of stack memory allocation(management)!

console.log(myName.charAt(0)); // put index and get character 
console.log(myName.indexOf('D')); // put character and get index

// try other methods of string also >> can find all methods in console window



// substring
const newGame = new String("Deep-Rajput")

const subString = newGame.substring(0,4)  // starting index : 0 (included)    // ending index : 4 (excluded)
console.log(subString); // Deep  // substring me negative values index me nhi de skte 

// string slicing

const sliceString = newGame.slice(5,11) // start and end index <ending index is excluded>
// console.log(sliceString);

// can also give negative values in slice method
const sliceStringNegative = newGame.slice(-6,-4) // start and end index <ending index is excluded>
console.log(sliceStringNegative);

// start or end index me se kisi ek value ko empty bhi rakh skte hai ya zero de skte hai, vo value end tk execute ki jayegi

// NOTE => read MDN document for more!

// str.trim() => remove whitespaces only of starting and ending of string. 
// str.replace(searchVal, newVal) // search and replace the value.

const url = "https://deeprajput.com/deep%20rajput"
console.log(url.replace('%20', '-'));

// to find any word in string
console.log(url.includes('deep')) // true
console.log(url.includes('sahil')) // false