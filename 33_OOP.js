// // theory:-

// // do javascript really have classes?
// /* Yes, JavaScript does have classes! They were introduced in ECMAScript 6 (ES6) in 2015. Before that, JavaScript used functions and prototypes to achieve object-oriented programming.

//  JavaScript classes provide a cleaner and more concise syntax for creating objects and handling inheritance compared to using prototypes and constructor functions. However, underneath the hood, JavaScript classes are still based on prototypes. They just offer a more straightforward way to work with objects and inheritance

// Here’s a basic example of how you define and use classes in JavaScript:

//  // Define a class
// class Person {
//   // Constructor method to initialize properties
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Method to display information
//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// // Create an instance of the class
// const person1 = new Person('Alice', 30);

// // Use the method of the class
// person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

//  .*/

// // goin to learn :- 
// /* -> constructor function
//    -> prototypes
//    -> classes
//    -> instances (new, this) */

//    // ## 4 pillars
//    /*
//         abstraction  >> hide details from the user like fetch, network calls
//         encapsulation >> wrap up the data 
//         inheritance >>
//         polymorphism >> poly :- many >> morphism :- form or shape
//     */


// // object literal >> basic unit
// // const user = {
// //         userName : "DEEP RAJPUT", // properties
// //         loginCount : 3, // properties
// //         signedIn : true,  // properties

// //         getUserInfo : function () { // method
// //             console.log('getting user details from the dBase.');
            
// //         }
// // }

// // console.log(user.userName);
// // console.log(user.getUserInfo());


// // chatgpt response :-
// // JavaScript me this ek special keyword hai jo kisi bhi function ya method ke context ko refer karta hai. Iska mtlb alag-alag situations me alag ho sakta hai. Yahan kuch common scenarios hain:

// // 1. Global Context: Jab this global context (jaise ek regular function ke andar) me use hota hai, to ye window object (browser me) ya global object (Node.js me) ko refer karta hai.
// // console.log(this); // Browser me: window, Node.js me: global

// // 2. Object Method: Jab this ek object ke method ke andar use hota hai, to ye us object ko refer karta hai.
// // const person = {
// //     name: 'Alice',
// //     greet: function() {
// //         console.log(this.name);
// //     }
// // };
// // person.greet(); // Output: Alice

// // 3. Constructor Functions: Jab this ek constructor function me use hota hai, to ye naye banaye gaye object ko refer karta hai.
// // function Person(name) {
// //     this.name = name;
// // }
// // const alice = new Person('Alice');
// // console.log(alice.name); // Output: Alice

// // 4. Arrow Functions: Arrow functions me this lexical hota hai, yani ki ye function ke enclosing context ka this refer karta hai. Arrow functions apne this ko inherit karte hain, isliye inke andar this ka apna ek binding nahi hota.
// // function Person(name) {
// //     this.name = name;
// //     setTimeout(() => {
// //         console.log(this.name); // Arrow function ka `this` parent context ko refer karta hai
// //     }, 1000);
// // }
// // const alice = new Person('Alice'); // Output: Alice

// // 5. Event Handlers: Event handlers me this event target element ko refer karta hai.
// // document.querySelector('button').addEventListener('click', function() {
// //     console.log(this); // Output: button element
// // });


// // this ka mtlb current context ko refer krta hai :- 
// const user = {
//   userName : "DEEP RAJPUT", // properties
//   loginCount : 3, // properties
//   signedIn : true,  // properties

//   getUserInfo : function () { // method
//       // console.log('getting user details from the dBase.');
//       // console.log(`Username : ${userName}`); // error :- functions ki details to set krdi lekin execution k time usko pata hi nahi ki userName kya hai or konsa hai, isliye vo error dega q ki function k ander vi to executional context bana hai or usko pata hi nahi ki bhar se userName variable hold krna hai ....
      
//       // context ko refer krte time usme this ka use krte hai
//       // console.log(`Username : ${this.userName}`); // output >> DEEP RAJPUT 
//       // console.log(this); // yaha se clear hoga ki hamara current context kya hai i.e. user object
      
//   }
// }
// // console.log(user.getUserInfo());  

// // global context me this ki value vary krti hai browser or etc k according
// // console.log(this); // empty {} in node js
 

// // +++++++++++++++++++++++++++++++++++++++++++
// // +++++++++++++++++++++++++++++++++++++++++++

// // constructor function :-ye allow krta hai ki ek hi object se multiple instance bana skte ho
// // const promise1 = new Promise() // here new is constructor function 
// // const date = new Date() // here new is constructor function 

// // working of constructor function :- 

// function userAre(userName, loginCount, isLoggedIn){
//    this.username = userName;   // left side wali value hamara variable or ride sie wali value vo hai hm pass krke de rahe hai // good coding practice k liye hm dono side ka name same rakhte hai or this ka use krte hai
//    this.loginCount = loginCount;
//    this.isLoggedIn = isLoggedIn

//    return this // return this se hoga ki jo object hai usko hm pass on kr rhe hai, mtlb usme kuch bhi change hoga to simply usko access kr skta hain...
//     }    // return this krna jruri nhi hai ye by default (implicitly) define hi hota hai is case me...

// // using new keyword

// const userOne = userAre("DEEP",4,true)  // yaha hmne userOne create kiya hai or next line me userTwo create kiya hai , lekin jb hm bina new keyword use kre hue userOne ko log krenge userTwo create krne k baad to vo userOne ki details ko overwrite kr dega 

// const userTwo = userAre("Rajput",3,false)
// console.log(userOne); // accessing userOne and . use krke properties access kr skte hai...

// // to isi uper problem ko solve krne k liye hm "new" keyword ka use krte hai >>>>> so yaha constructor function use krenge , vo kya krta hai hme new instance(copy) provide krwate hai , isse original ya kisi other instance pe koi effect nhi pdta agr hm kisi instance me koi change krte hai to...

// // simply we have to add "new" keyword :-
// const userOneIs = new userAre('DEEP', 4, true)
// const userTwoIs = new userAre('Rajput', 3, false)

// console.log(userOneIs);
// console.log(userTwoIs);


// // About "new" keyword :- jaise hi new keyword use krenge to ek empty object create hota hai, called instance
//  /*
//     step 1. >> ek naya object create hota hai.
//     step 2. >> constructor function call hota hai new keyword k reason se, ye kya krta hai jitne bhi arguments ka sbko pack krke hame de deta hai...
//     step 3. >> jitne bhi arguments likhe hai vo sab this keyword k ander inject ho jate hai...
//     step 4. >> and then we get them in the function.
//   */


// One more example for more clarification :-
function UserAre(userName, loginCount, isLoggedIn) {
  this.username = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function() {
      console.log(`Welcome ${this.username}`);
  };
}

// Create a new instance of UserAre
const userOneIs = new UserAre('DEEP', 4, true);
console.log(userOneIs);


// Call the greeting method
userOneIs.greeting();


/* Explanation:
 >>>>  Constructor Function: UserAre is a constructor function that initializes the username, loginCount, and isLoggedIn properties.

 >>>>  Method Definition: The greeting method prints a welcome message using the username property.

 >>>>  Creating an Instance: new UserAre('DEEP', 4, true) creates an instance of UserAre with the provided arguments.
Calling the Method: userOneIs.greeting() calls the greeting method of the userOneIs instance.

 >>>>  This should give you a functional object with the properties and methods you want. */


/*
To call all three arguments and the greeting method from the UserAre constructor function, you need to do the following:

 >> Create an instance of the UserAre class with the desired arguments.
 >> Access the properties of the instance to retrieve the values of username, loginCount, and isLoggedIn.
 >> Call the greeting method to see the welcome message.

 // explanation :-
 1. Constructor Function Definition:

 >> UserAre initializes the properties username, loginCount, and isLoggedIn.
 >> greeting is a method that logs a welcome message.

 2. Creating an Instance:
 >> const userOneIs = new UserAre('DEEP', 4, true); creates an instance of UserAre with the provided values.

 3. Accessing Properties:
 >> userOneIs.username, userOneIs.loginCount, and userOneIs.isLoggedIn retrieve the values assigned when creating the instance.
 
 4. Calling the Method:
 >> userOneIs.greeting(); invokes the greeting method, which prints "Welcome DEEP".
 
This code demonstrates how to work with the instance of your constructor function, showing both how to access its properties and how to use its methods.
 */







