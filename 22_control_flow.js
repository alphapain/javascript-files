// // // // // if
// // // // if(condition){ // if condition is true then code will execute... if condition is false then code will not execute...!
// // // //     // working
// // // // }

// // // // more :-
// // // /* = >> assignment
// // //    == >> equality check
// // //    === >> equal value and same DT 
// // //    !== >> not equal and DT
// // // */

// // // // if-else
// // // // if(condition is true){
// // // //     then it will execute...
// // // // }else{
// // // //     otherwise it will execute , if condition is false
// // // // }

// // // // example :-
// // // let score = 300
// // // if(score>100){
// // //     let power = "fly"
// // //     console.log(`User power ${power}`);
// // // }
// // // // console.log(`User power ${power}`); // this gives erroe bcoz power isn't defined >> if k ander power variable let keyword se use krke bana hai to uska scope block tk hi hota hai block k bahar vo use nhi ho skta
// // // // if we use var keyword on the place of let then it becomes global scope ....... but var use krna prefer nhi hota or na hi krna chahiye


// // // // implicit scope >> execute in only one line >> isme maan liya jata hai ki scope hai
// // // const balance = 1000
// // // if(balance>500) console.log("evaluated");



// // // nesting (else-if)

// // // const balance = 1000
// // // if(balance<500){
// // //     console.log("less than 500");
// // // } else if(balance<750){
// // //     console.log("less than 750");
// // // }else if(balance<900){
// // //     console.log("less than 900");
// // // }else{
// // //     console.log("less than 1200");
// // // }



// // // logical operator :-
// // // && >> run when all conditions will true.
// // // const userLoggedIn = true
// // // const debitCard = true

// // // if(userLoggedIn && debitCard){
// // //     console.log("Allow to buy courses!");
// // // }


// // // // || >> run when one from the all given conditions will true
// // // const userLoggedInGoogle = true
// // // const userLoggedInEmail = false
// // // const guestUser = true

// // // if(userLoggedInGoogle || userLoggedInEmail || guestUser){
// // //     console.log("can apply the job...!")
// // // }


// // // ************************************************************
// // // switch case
// // // switch (key) {
// // //     case value:
        
// // //         break;

// // //     default:
// // //         break;
// // // }

// // const month = 3 // agr yaha pr number ki jagah string hai to case values me hm direct string bhi de skte hain
// // switch (month) {
// //     case 1:
// //         console.log("Jan");
// //         break;
// //     case 2:
// //         console.log("Feb");
// //         break;
// //     case 3:
// //         console.log("Mar");
        
// //         break; // jaha bhi value match ho jaygi jaise yaha 3 pe hui to uske baad ki saari execution ko rok deta hai, age break nhi use kiya to value match hone k baad k saare code ko run krega jaha tk break use nhi hua hai, age yaha se break remove kr dete hain to case 3 pe value match hone k baad case 4 bhi execute hoga lekin default case execute nhi hoga.....
// //     case 4:
// //         console.log("Apr");
// //         break;

// //     default:
// //         console.log("Default case!");
// //         break;
// // }




// // truthy value or falsy  value >>>>> kuch values hoti hai jinhe assume kr liya jata hai ki vo true hi hoga ya vo galat hi hoga

// // const userEmail = "abcd@gmail.com" >> 1
// const userEmail = [] // >> 2

// if(userEmail){
//     console.log("got the user Email"); // this will run >> 1 or 2 both
// }else{
//     console.log("Don't have user Email")
// }

// // falsy values >>>>>    false, 0, -0, BigInt 0n, "", null, undefined. NaN
// // truthy values >>>>    true, "0", 'false', " " (one space) , [], {}, function()()
//                                                               // empty array, empty object, empty function  

// // how to check the given array is empty <<<      >>>>> 2
// if(userEmail.length === 0){    // arr ki length property check krni pdti hai pehle >>>>>
//     console.log("Array is empty");
// }

// // how to check the given object is empty <<<
// const emptyObj = {} // >>>> creating empty obj 
// if(Object.keys(emptyObj).length === 0){     // >> Object.key(our object) >> ek array return krti hai or us array pr length property apply or check kri hai
//     console.log("object is empty");
// }





// for more :- 
/*   false == 0   >> true
     false == ''  >> true 
        0  == ''  >> true 
*/

// Nullish Coalescing Operator  (??):   >> for only null and undefined

// let val1;
val1 = 5 ?? 10  // (1)     // >> database se ya khi or se jb response milta hai to direct respose nhi milta , hme 2 values milti hai coz ho skta hai ki ek value null aa jaye ya value aaye hi nah to us case me pura code structure preshan ho skta hai to us special cases k liye ye banaya gaya hai
// val1 = null ?? 100 // (2)   
// val1 = undefined ?? 1000 // (3)   
// val1 = undefined ?? 5000 ?? 10000 // (4)   
// console.log(val1);  // >> 5 value (1)
// console.log(val1);   // >> 100 (2)
// console.log(val1);   // >> 1000 (3)
// console.log(val1);   // >> 5000 (4)


// ***********************ternery operator***************************
// condition ? true : false 
// const coffeePrice = 100
// coffeePrice <=80 ? console.log("less than 80") : console.log("more than 80");



