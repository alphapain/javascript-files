// const user = {
//     userName : "Deep",
//     price : 100,

//     wlcmMsg : function(){
//         console.log(`${this.userName}, welcome to this web-page`); //  jb v current ko refer krna hota hai to this keyword kause krte hain, this keyword current context ko refer krta hai
//         // here  current context is {} k ander  line 1-10.
//         console.log(this); // 5
//     }
// }
// // user.wlcmMsg()  // >> Deep, welcome to this web-page  >> 1

// // // lekin agr hm value/context change krdete hai to  >> 2
// // user.userName = "Sahil"  // >> 3
// // user.wlcmMsg() // >> Sahil, welcome to this web-page >> 4

// 
// console.log(this); // 6

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
// function normal(){
//     let usernameIs = "Deep" // >> 2
//     // console.log(this);  // >> 1
//     console.log(this.usernameIs); // >> 3 >> undefined  >> function k ander jb aise this ko use krenge to undefined dega q ki ye sirf objects k ander hi work krta hai , ye context function me work nhi krta ! function k ander aise this use nhi kr skte.....
// }
//  // 1 or 2 me run time same value aygi
// normal() //jb kisi function k ander hm this ko run krte hai to bhut saari values aati hai node environment k ander !

// const chai = function(){
//     let username = "deep"
        // console.log(this.username) // >> 1 >> undefined
        // console.log(this); // >> 2 >> {}
// }
// chai() 

// /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ hm functions me this use nhi kr skte 
// // Arrow functions
// const chai = () => { // we can hold arror function in a variable
//     let username = "deep" // >> 1
//     // console.log(this.username); // >> 1 >> undefined
//     console.log(this);     // 2 >> {}

// }
// chai()

// more on arrow functions :-
// 1. explicit return >> ye normal hi hai jaise hme isme return keyword use krna padta hai 
// can pass parameter
// const add = (n1,n2) => {
//     return n1+n2
// }
// console.log(add(1,1));

// 2.
// implicit return >> hme () use nhi krne pdte or return statement ko ek hi line me krdena hota hai >> hme return likhne ki need nhi hai q ki statement ek hi line ki hai
const add = (s1,s2) =>  s1+s2
console.log(add(1,1))


// 3.  {} use krte hai jaise 1. me kiya to usme return use krna padta hai lekin jb () use krte hai jaise 3. me krenge to waha return use nhi krna pdta
const addThreeNo = (x1, x2, x3) => (x1 + x2 + x3) // yaha () use kiye hai to return use krne ki jrurt nhi ... aage react m bhut use m ayga ye way ...!
console.log(addThreeNo(1,1,1));

// 4. imp... >> () lagane k fayda >> uper hm simply add krke return kr rhe the lekin agr hme ek object return krna hai to ?? hm object ko {} k ander use krke return nhi kr skte hme object ko () me wrap krna hi pdega tbhi vo return hoga..! 
// agr hm () ki jgh {} use krte to >> undefined return hota
// const returnObject = (num1,num2) => {username : "Deep"} // wrong way
// console.log(returnObject(1,2));  // >>  undefined

// hme object ko () me wrap krna hi pdega....
const returnObj = (num1,num2) => ({username : "Deep"}) // correct way
console.log(returnObj(1,2)); // >> { username: 'Deep' }