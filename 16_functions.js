// // function myName(){
// //     console.log("D");
// //     console.log("e");
// //     console.log("e");
// //     console.log("p");
// // }

// // myName()

// // function addTwoNo(n1,n2){ 
// //     console.log(n1+n2);
// // }

// // addTwoNo(1,2); // ye dono number hai idhr
// // lekin hm no ki jagah string pass krte hai to ;;;
// // addTwoNo(1,"2"); // first number or second string >> to string concatenate hoga (data type conversion me padha tha) >> 12
// // addTwoNo(1,"a"); // same concatenate
// // addTwoNo(1,null);


// // function ki definition me jo value pass hoti hai vo parameter hoti hai 
// // function ki call me jo value pass hoti hai vo argument hoti hai


// // [************IMPORTANT******************]
// // function addTwoNo(n1,n2){ 
// //     console.log(n1+n2);
// // }
// // addTwoNo(2,2); // 4

// // kya hm ise kisi  variable me bhi store kr skte hai?
// // const result = addTwoNo(2,2)  // 4  

// // lekin hmne jo result declare kiya hai uske ander value kya hai
// // console.log("RESULT is : ", result); // undefined

// // console.log krne ka mtlb sirf print krna hota hai ni output ko return krna , return krna alag concept hai lekin console.log krne se value return nhi hoti......isliye result abhi v undefined hai!

// // agr value return krni hai to console.log se return nhi hoti return krne k liye 'return' ka use krna hota hai.......!
// // ex:-

// function addTwoNo(n1,n2){ 
//     // let result = n1+n2; ========= 1
//     // console.log("result"); // ye line return se pehle hai to execute hogi ............!  ======== 4
//     // return result =========== 2
//     // console.log("result"); // imp:- return krne k baad code execute nhi hota..........Unreachable code ========== 3
//     // return ki hui value ko  kisi variable me store krna hota hain.......then print!
//     // hm direct return bhi kr skte hai values ko
//     return n1+n2
// }
// // function k ander declare kiya hua result or function k bhaar declare kiya hua result dono alag hai .....!
// const result = addTwoNo(1,2) 
// console.log("RESULT is : ", result);  // ab result ki value 3 aygi lekin console.log use nhi kiya to kuch print nhi hoga sirf result return hoga!

// function userLoggedIn(username){
//     return `${username} was just logged in`
// }
// userLoggedIn("Deep") // ye statement value return to kr rhi hai lekin print nhi hoga q ki print k liye nhi kaha gya isliye console.log  use krna pdega

// console.log(userLoggedIn("Deep")); // Deep was just logged in

// if we pass empty string in it.
// console.log(userLoggedIn("")); // was just logged in 

// if we don't pass any value in it then >
// console.log(userLoggedIn()); // undefined was just logged in >>>>> koi value pass nhi krte to undefined aata hai na ki null......!

// more on functions and if/else basic syntax or info
function userLoggedIn(username = "Deep"){
    // if(username === undefined){  // (0)       //agr username me kuch bhi value nhi di to (1) print hoga or (2)end me kuch return nhi hoga or last wali  return statement (3) execute hi nhi hogi
        if(!username){  // (5)   (5 = 0) // line 0 and 5th are equal.....!
        console.log("Please enter a username"); // (1)
        return // (2)
    }
    // (6) agr user ko bhi value nhi krta to hm function define k time ek default value pass kr skte hai , or agr user value pass nhi krta hai to default value execute hogi or if block kabhi execute hi nhi hoga or agr user value pass kr deta hai to pass ki hui value default value ko  overwrite kr degi >> try it.....!
    return `${username} was just logged in` // (3)
}

console.log(userLoggedIn());