// // both are empty objects!
// // const pubgUser = new Object() // singleton 
// // const pubgUser = {} // non-singleton ya constructor

// // console.log(pubgUser); // empty object...

// // giving some values in object :-
// // const pubgUser = {}
// // pubgUser.id = "abc"
// // pubgUser.name = "alpha"
// // pubgUser.isLoggedIn = false

// // // objects k ander objects ka use :-
// // const otherUser = {
// //     official_id : 1,
// //     About : {
// //         EmpName : "Deep",
// //         userName : {
// //             firstName : "Deepak",
// //             lastName : "Rajput"
// //         }
// //     }
// // }

// // accessing the values
// // console.log(otherUser); // complete otherUser
// // console.log(otherUser.official_id); // 1

// // console.log(otherUser.About); 
// /*{
//   EmpName: 'Deep',
//   userName: { firstName: 'Deepak', lastName: 'Rajput' }
// } */

// // console.log(otherUser.EmpName); // undefined dega q ki hm direct object k ander object ki value ko access nhi kr skte


// // console.log(otherUser.About.EmpName); // Deep
// // console.log(otherUser.About.userName); // { firstName: 'Deepak', lastName: 'Rajput' }

// // console.log(otherUser.About.userName.firstName); // Deepak
// // console.log(otherUser.About.userName.lastName);  // Rajput


// // optional chaining >>> Later!!!!

// // combining objects
// // const obj_1 = {1:"a", 2:"b"}
// // const obj_2 = {3:"c", 4:"d"}

// // const obj_3 = {obj_1,obj_2} // isme same array wali problem aygi "array k ande array wali problem" // same object k ander object show hoga isme
// // console.log(obj_3); 

// // const obj_5 /=  Object.assign(obj_1,obj_2) // ye wala method bhi correct hai ekdm , isse dono object combine/merge ho jayenge
// // console.log(obj_5);

// // lekin assign method me starting me ek empty {} bhi de dete hai, ye ek optional parameter hota hai lekin ye shi rhta hai use krna >> iska mtlb dono ya sabhi values combine ho jayegi or guaranteed result {} me aa jyga
// // const obj_4 = Object.assign({}, obj_1,obj_2) // target : {} >> empty object
// // console.log(obj_4); // dono object merge ho jayngi 
// // aise kitni vi objects combine kr skte hain


// // imp. example :-
// const target = {1:"A", 2:"B"}
// const source = {3:"C", 4:"D"}

// // const returnedTarget = Object.assign(target,source)
// // console.log(returnedTarget);

// // console.log(returnedTarget === target); // true


// // spread method :- easy andd latest method
// const obj33 = {...target, ...source}; // jitne bhi object combine krne hai spread method se kr skta hain 
//  console.log(obj33);



// More on objects:-


// jb bhi database se values aati hai to vo array of objects aate hai ;;;;
const users_ = [ // array of objects mtlb array k ander objects using comma seperated values!...
  {
    id : 1,
    gmail : "deep@gmail.com",
  },
  {
    id : 2,
    gmail : "deepak@gmail.com",
  },
  {
    id : 3,
    gmail : "deep_@gmail.com",
  },
]
// isme loop use kr skte hao ya koi value print kra skte hai
// console.log(users_[0].gmail);
// print    (array with index.property);



const pubgUser = {}
pubgUser.id = "abc"
pubgUser.name = "alpha"
pubgUser.isLoggedIn = false

console.log(pubgUser);
console.log(Object.keys(pubgUser)); // prints all keys with selected object and  the data type of output value of keys is array.
// hmne saari keys ko liya or ek array me store kr diya ab uspe loop bhi laga skte hain >>> IMPORTANT!>>>>>

console.log(Object.values(pubgUser)); // all values

console.log(Object.entries(pubgUser)); // hr ek key-value ko array me bana deta hai >> first value key and second value is value


// object me koi value check krne k liye
console.log(pubgUser.hasOwnProperty('isLoggedIn')); // true
console.log(pubgUser.hasOwnProperty('isLogged')); // false

// learn more methods on console window!...... :)

