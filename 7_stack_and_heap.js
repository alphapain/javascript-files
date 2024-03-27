// // stack and heap memory
// // stack is used for primitive data type and heap is used for reference and non-primitive data type

// // stack (primitive) and heap(non-primitive)

// // stack me copy pass hoti hai or heap me reference hi pass hota hai

// // example of stack
// // let deepName = "Deep"
// // let sahilName = deepName 

// // console.log(sahilName); // idhr Deep print hoga q ki sahilName me deepName ki value copy hui hai


// // // but

// // sahilName = "Sahil"
// // console.log(sahilName); // idhr Sahil print hoga value assign kri hai sahilName me isliye


// // example of heap

// let userOne = {
//     name : "Deep",
//     id : 101,
// }

// let userTwo = userOne

// console.log(userOne); // prints userOne

// console.log(userTwo); // also prints userOne coz heap me copy nhi direct reference pass hota hai

// // but if we change the value in userTwo then, userOne will also change :>>
// // chahe userOne me change kro ya userTwo me change kro dono ka reference same hai to ek me change krenge to dusre me bhi change hoga, coz of heap.

// userTwo.name = "Sahil"
// userTwo.id = 202

// console.log(userOne);
// console.log(userTwo);




// more example >>
/* Memory
    --> Stack Memory (primitive)
    --> Heap Memory (Non-primitive)
*/
/*  Primitive --> copy milta hai
    Non-primitive --> reference milta hai
*/


let myName = "Hema";
let myCatName = myName;

myCatName = "Phoebe";
console.log(myName);
console.log(myCatName); // only myCatName is updated but not myName coz only a copy of myName was sent to myCatName.


let myPencil = {
    color : "grey",
    brand : "apsara"
};

let myFriendPencil = myPencil;
myFriendPencil.color = "red";

console.log(myPencil);
console.log(myFriendPencil);
// both would be updated coz objects are reference types and reference of myPencil was passed to myFriendPencil.