// // // // kabhi kabhi me ye nhi pata hota ki kitne argument aane wale hai , to aapko us hisaab se apne parameter ready krne hote hain.
// // // // ex:- e-commerce website me shopping cart me items continuously add krna!
// // // // normal function me hame pata hota hai ki kitne argument hai like addTwoNo me 2 argument >>

// // // function calculateCartPrice(n1){
// // //     return n1
// // // }
// // // // console.log(calculateCartPrice(200)); 

// // // // agr value jyada ho to 
// // // console.log(calculateCartPrice(100,200,300,400)) // isme sirf first value hi print hogi

// // // // isko solve krne k liye (rest operator) hota hai 
// // // // ... hi rest operator hota hai or yhi spread operator hota hai bs use case pr depend krta hai.

// // // function cCP(...n2){ // is operator se hoga ki sbhi value ko ek saath combined kro or array me store kr do >>> ab jitni v value add kroge cart me vo combined hoti chali jayegi.
// // //     return n2
// // // }
// // // console.log(cCP(100,200,300,400,500,600)); //[ 100, 200, 300, 400, 500, 600 ]


// // // // more and imp. on this topic>>
// // // function otherfunction(v1, v2, ...final_number){
// // //     return final_number
// // // }

// // // console.log(otherfunction(100,200,300,400,500,600));  // [ 300, 400, 500, 600 ] >> bcoz 100 aa jayegi v1 me or 200 aa jayegi v2 me or baaki final number me return ho jayega.



// // // 
// // const userObj = {
// //     username : "Deep",
// //     id : 101
// // }

// // // object ko function me kaise pass kiya jata hai or kaise use kiya jata hai

// // // making a fyunction
// function handleObject(anyObject) { // iske ander anyobject pass kiya hai mtlb koi v object pass kr skte hain  >>> 5
//     console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`);   // >> 5

// } // >> 5
// // function call <
// // handleObject(userObj) // userObj object pass kiya hai
// // // Username is Deep and id is 101  <<<<< output

// // // agr key value me kuch glti hoti hai access krte time to undefined return krta hai  like id ki jagah ids ........


// // hm directly object v pass kr skte hain function me

// handleObject({  // >> 5
//         username : "Deep",
//         id : 101
//     })


// array ko kaise pass krte hain functions me
const new_array = [0,1,2,3,4,5]

// ek function define krna hai jo array ko accept kre or 2nd value ko print kre
function printArray(anyArray){
    // console.log(anyArray[1]); >> 1
    return anyArray[1] // yaha parameter aata hai jo pass kiya hai >> 2
}

// printArray(new_array)  >> 1
// console.log(printArray(new_array));  >> 2


// hm array ko directly v pass kr skte hain
console.log(printArray([0,1,2,3,4,5]));