/*
   > 
   < 
   >=
   <=
   == 
   !=
*/

// more ->
// comparison krte time ye dhyn rkhe ki dono value ka DT same ho >
// typescript allow nhi krta different DT compare krne ko, agr aisa krte to kyi baar predictable result nhi milta

//  > <            ==
// comparison or equity check dono js mere different hai.

// console.log("2" > 1); // true >> JS auto change "2" to 2.

// // with null
// console.log(null > 0); // false > bcoz null is empty  >>> 1
// console.log(null == 0); // false   >>> 2


// console.log(null >= 0);   // true   >>> 3
// // Reason -> is that an equity check == and comparisons > < >= <= work differently.
//             //  comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and          (1) null > 0 is false.


// // with undefined
// //  undefined always returns false
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);

// // try with boolean


// // lekin hm aise confusing mostly avoid krenge. because clean code is must.

// // ===     >     strict check value or also datatypes.
console.log("2" === 2); // false