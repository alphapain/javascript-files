// ques:- Math.pi ki value 3.14... hoti hai, to merko vo 4 ya 5 krni hai , to hoti skti hai to kaise ho skti hai or agr nhi ho skti to kyu nhi ho skti ?

// object ka direct access hmare pass hai or object k ander bhut saari properties hoti hai... to ek property hoti hai

// Object.getOwnPropertyDescriptor()

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// value dono me same rhegi , hmne to overwrite krdi lekin vo overwrite nhi hogi....

//to kya aisa vi ho skta hai ki , hm kisi object ki kisi value ko touch hi na kr paye or aisa hai to kyu nhi kr pa rahe?


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI") // yaha .PI jo property hai uski value access kr rhe hai Math me se

// console.log(descriptor);  
/* {
  value: 3.141592653589793,
  writable: false,  // ye hardcoded set kr rakhi hai to inko change nhi kr skte
  enumerable: false, // ye hardcoded set kr rakhi hai to inko change nhi kr skte
  configurable: false // ye hardcoded set kr rakhi hai to inko change nhi kr skte
} */


// +++++++++++++++++++
// to kya hm bhi aise property set(define) kr skte hai, ki koi unko access kre to change hi na kr paye....yes its possible.


const chai = {
    name : "ginger chai",
    price : "50",
    isAvailable : true,

    orderChai(){
      console.log('chai nahi bani...');
      
    }
}
// console.log(chai); // output :- { name: 'ginger chai', price: '50', isAvailable: true }
// kya iski bhi descriptor properties hai? agr hai, to kaise hm un property ko set kr skte hai, ya ye batao ki vo property available hai bhi ya nahi?
// actually me vo property available hai....let's check.....

// console.log(Object.getOwnPropertyDescriptor(chai)); // output >> undefined // q ki chai ek object hai or idhr hi property ko access kr rhe hai...aise hi uper Math.PI wale ex me hua hai.....

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
/* {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
} */

// hamara code hai to itna access hota hai lekin hr situation me nhi ki hm iski property change kr paye...
  // defining properties
  Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : false, 
    configurable : false 
  })

  // console.log(Object.getOwnPropertyDescriptor(chai,'name'));
  /* {
  value: 'ginger chai',
  writable: false,     
  enumerable: false,   
  configurable: false   
} */

  // ++++++++++++++++++++++++++++++++++++++++++

  // line 51-54 values change kri hai , enumerable false kiya hai, to uspe loop laga kr check krte hai...
  // for (let [key,value] of chai) {
  //   console.log(`${key} : ${value} `); // output :- TypeError: chai is not iterable, btw object by default iterable hai ya nahi vo situation pe depend krta hai..... 
  // }

// agr object iterate krna hai to....  Object.entries(objectname)

// lekin jaise hi uper function declare kiya object me or usko entries use kiya to code fat jayega..

  for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value} `);  // code run to krega lekin hme sirf key values hi chahiye hoti hai....
    // output :- 
    /* price : 50 
       isAvailable : true
       orderChai : orderChai(){      // aise complete function nhiii....
              console.log('chai nahi bani...');
    }  */
    
  }

// to aise output nhi chaiye, sirf key-values chahiye to uske liye hm if-else check kr skte hai....
for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {  // agr key-value me koi function nhi hai to hi enumerate krenge otherwise nhi krenge.....
      console.log(`${key} : ${value} `);    // price : 50
                                            // isAvailable : true
    } // yha output me name nhi aa raha , q ki uper define property me name select hai or uski enumerable property ko false kr rakha hai to enumerate nhi hogi or function k liye if check laga rakha hai.....
    // ye kyi baar require ho jata hai ki koi specific property kisi object ki , kisi loop ka part hi na bane.....that's why....
    
}



