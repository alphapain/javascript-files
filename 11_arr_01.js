// // // js array are resizeable and can contain a mix of different DT.
// // // array >> single variable me bhut saare element store krna


// // const arrr = [1,2,3,4,"deepak", "shah-ji pappan", true]

// // // accessing indexes >> zero based indexing
// // console.log(arrr[0]);
// // console.log(arrr[1]);
// // console.log(arrr[2]);
// // console.log(arrr[3]);
// // console.log(arrr[4]);
// // console.log(arrr[5]);
// // console.log(arrr[6]);

// // // JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects creates shallow copies, rather than deep-copies)

// // /* 
// // https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy         (share same reference)
// // https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy            (don't share same reference)
// // */

// // const players = ["apprentice warden", "lava hound", "golemon", "royal-ghost", "el-primo", "cookie"]
// // const newArray = new Array (1,2,3,4,5,6,7,8,9,10)


// // // Array Methods :-
// // // 1.
// // const arr = [1,2,3,4]
// // arr.push(5) // add the element at the end of the array
// // console.log(arr);
// // arr.push(6)
// // console.log(arr);

// // // 2.
// // arr.pop() // removes the last element from the array and returns it.
// // console.log(arr); // removes 6

// // // 3.
// // arr.unshift(100) // insert new element at the start of an array and returns the new length of the array.
// // console.log(arr);

// // arr.shift() // removes the first element from an array and returns it , if the array is empty undefined is returned and array is not modified.
// // console.log(arr);

// // // 4.
// // console.log(arr.includes(1)); // check whether the element is present in array or not >> returns true or false >> // true
// // console.log(arr.includes(100)); // false

// // // 5.
// // console.log(arr.indexOf(1)); // returns the index of the first occurance of a value in a array, or -1 if it is not present >> zero index
// // console.log(arr.indexOf(10)); // -1

// // // 6.  join method
// // let arr3 = arr.join()

// // // printing old array
// // console.log(arr); // array format
// // // printing arr3 after using .join method
// // console.log(arr3); // string format
// // console.log(typeof arr3); // string

// // slice
// const arr = [1,2,3,4]
// console.log("A", arr); // prinitng normal arr

// // using slice
// const myNewArraySlice = arr.slice(1,3) // returns a copy of a section of an array >> slice(start idx, end idx) >> end index is excluded >>>> not change in original array.
// console.log(myNewArraySlice); // 2 and 3


// // splice 
// console.log("B", arr); // printing normal arr // 1,2,3,4
// const myNewArraySplice = arr.splice(1,3)  // isme end idx include hota hai or ye original array me change krta hai 
// console.log(myNewArraySplice); // 2,3,4
// console.log("C", arr); // 1

// more on splice
let arr = [0,1,2,3,4]
arr.splice(2,2,101,102) // start idx, delCount, newElement
                        // add, remove, replace
console.log(arr) // 0,1,101,102,4

// try different examples on splice and slice