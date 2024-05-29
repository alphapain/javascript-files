// for-of

// common situation >> 
// string inside array >> ["", "", ""]
// object inside array >> [{}, {}, {}] >> how to access any specific value of specific object >>> loop use kro > object pr jao or phir . ya [] notation se value access kr skte hai

// const arr = [1,2,3,4,5]
// for (const iterator of object) { // object ka mtlb object DT nhi hai iska mtlb hai kiske uper for-of loop use krni hai
                                    // object , string, array kisi pr v use kr skte hain   
// }

// for (const num of arr) {
//     console.log(num);
// }

// ex:- print every character
// const wlcm = "welcome"
// for (const i of wlcm) {
//     console.log(`${i}`);
    
// }


// 1 or 2 will print each char but not space.....!

// 1
// const greetings = "Hello World!";
// for (const greet of greetings){
//     if(greet === " "){
//         continue;
//     }
//     console.log(`Each Character is ${greet}`);
// }

// 2
// const greetings = "Hello World!"
// for (const greet of greetings) {
//     if(greet!==" "){
//         console.log(`Each charaacter is ${greet}`);
//     }
// }

//  ***************************************************************************************
// <<< simply we can try other examples using continue and break in these types of loops >>> 
//  ***************************************************************************************



// Maps >> don't contain duplicate values or jis order me values denge usi order me use krega
// read more on MDN

const map = new Map()
map.set('IN','India')
map.set('US','USA')
map.set('FR','France')
map.set('IN','India')

// console.log(map); // Map(3) { 'IN' => 'India', 'US' => 'USA', 'FR' => 'France' }


// loop on map 
// 1.
// for (const key of map) {          // yaha normal key liya hai to ek-ek values aa jayegi...
//     console.log(key);                 /*        [ 'IN', 'India' ]
//                                                 [ 'US', 'USA' ]
//                                                 [ 'FR', 'France' ] */
// }

// 2. agr hame alag-alag values chahiye to :-
// for (const [key, value] of map) { // square brackets use krke hm idhr key or value ko alg alg hold kr skte hai, yaha array ka de-structure ho jata hai
// console.log(key, ':-', value);          /*  IN :- India
//                                             US :- USA
//                                             FR :- France   */
// }



// by object
// const myObject = {
//     game1 : 'coc',
//     game2 : 'pubg',
//     game3  : 'gta',
// }

// // using for-of loop
// for (const [key,value] of myObject) { // object is not iterable using for-of loop
//     console.log(key, ':-', value);
// }

// object ko iterate krne ke alg way hote hain

const ourObject = {
    js : "javascript",
    rb : "ruby",
    cpp : "c++",
    py : "python"
}

// for-of loop object pr work nhi krta iterate k liye, to object ko iterate krne k liye
// to uske liye for-in loop hota hai , but aisa nhi ki for-in loop sirf object k liye use hota hai, or jgh vi use hota hai but we will discuss later....

// for (const key in ourObject) {
//   console.log(key);   // print all keys
//   console.log(ourObject[key]);   // print all values
    // console.log(`${key} shortcut is for ${ourObject[key]}`); // combined
    // } 
        
// *************************************************
// kya for-in loop array k liye use kr skte hain
// const programming = ['js', 'rb', 'py', 'cpp', 'java']
// for (const key in programming) {    
//         // console.log(key); // 1) // ye key print krega >>>>>>>>>> hmne notice kiya ki for-of loop se to direct value access ho rhi thi lekin for-in loop se key access ho rhi hai >>>>> output >>> 
//                                              /*        0
//                                                        1
//                                                        2
//                                                        3
//                                                        4
//                                                                 */
//                                                                // lekin array ki keys?? >> yes, object ka design hi isliye hua tha q ki array ki keys zero se start hoti hai or by-default number hi hoti hai, lekin object me hm jo mrzi key daal skte hain .>> read on documentation
//         // ab keys se programming ki values kaise find kren....
//     console.log(programming[key]);
//     }




// *************************************************
// kya hm map pr for-in loop use kr skte hain 
// const map_ = new Map()
// map_.set('IN','India')
// map_.set('US','USA')
// map_.set('FR','France')
// map_.set('IN','India')

// for (const key in map_) { // nhi hm map pr aise iteration nhi kr skte
//     console.log(key);        
//    }
// jo cheez iterable nhi hai usko aisi hm iterate nhi kr skte hain loop use krke, different ways hai aage discuss krenge...
// aage map me jaake or discuss krenge but still is trh se iteration nhi kia ja skta ...!






// *********************************************************
//for-each loop >> kuch loops array me directly properties me add kr diye jaate hain
const coding = ['js', 'py', 'ruby', 'cpp', 'java'] // agr console me koi array print krke uska prototype check krte hai to usme bhut saari properties hoti hai ........ foreach or map bhi...
// foreach bhi loop ka ek parameter hai jo by default hi inject kr rakha hai , q ki we know agr array milti hai to uspe loop use krke iteration krke values ko access krni pdegi na kisi trh...!

// Higher Order Function hai........
// coding.all methods >>> . k baad sbhi methods ka access hota hai lekin prototype krke use nhi krna hai direct access milta hai methods

// so
// array.forEach(callbackfn) >> syntax >>>> isme callback fn ka naam nhi hota
// coding.forEach(function(item){
    // console.log(item);
// })

// coding >> our array
// forEach >> loop
// callbackfn >> no name
// callbackfn(parameter) >> paramter ka naam kuch v ho skta hai.......
// item is our parameter
// then body of the function 

/* output >> js
             py
             ruby
             cpp
             java
*/


// using arrow function
// coding.forEach( (value) => {
//     console.log(value);
// })



// ************************************************
// function printME(item){
//     console.log(item);
// }

// hm printMe function ko aage pass on kr skte hain...
// coding.forEach(printME) // ya to hm yha direct function pass kr skte hain ya yaha koi dusra function pass on kr skte hain.....



// ****************************************
// more parameter inside function
// coding.forEach((item,index,arr)=>{ // there are three parameters
//     console.log(item,index,arr);
// })
// item >> all items
// index >> index of the item
// arr >> whole array




// if object is inside array

const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'java',
        languageFileName : 'java'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    },
]

// iteration 
myCoding.forEach( (item) => {
    console.log(item); // yaha hm object ko access kr rhe hai to yaha item se hmne complete object ko refere kiya hai to hm .method se particular value access kr skte hai >>> here u access complete bject
    console.log(item.languageFileName); 
    console.log(item.languageName);
})



