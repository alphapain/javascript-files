// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.



// how to create promises:-
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // Dbase calls, cryptography, network calls

    setTimeout(() => {
        console.log('async task is completed!');
     resolve() // promise complete hone k baad usko resolve krna pdega // jaise hi resolve hua tb jaake .then se connect hua or vo print hoga
    }, 1000);
})

// .then is directly connection to resolve
promiseOne.then(function(){
    console.log('Promise is consumed!');
})


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// promise ko kisi variable me store nhi kiya to direct uspe .then() use krdiya resolve hone k baad
new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Promise 2 is consumed');
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// promise me resolve ka data jo ki as a object hota hai vo .then() me kaise pass kre.......
const promiseThree = new Promise(function(resolve,reject){ // creating promise
    setTimeout(() => {                                     // using setTimeout
    resolve({username : "deepRajput", email : 'deep@something'})    // resolve me value pass kr rhe as a object
    }, 1000); // timeout 
})

promiseThree.then(function(user){ // using .then() and giving parameter inside function
    console.log(user);  // accessing parameter, complete details of object
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : "deepRajput", email : 'deep@something', password: '123@'})
        }else{
            reject('ERROR : Something went wrong!')
        }
    }, 1000);
})

// agr values aa rhi hai to .then() se access kr lenge or agr values nhi aa rhi to .catch() se access kr lenge.....


// if there is no error...means error = false
// promiseFour.then(function(myValues){
//     console.log(myValues);
//     console.log('promiseFour is resolved');
// })

// // if error = true
// promiseFour.catch(function(myValues){
//     console.log(myValues);
//     console.log('promiseFour is rejected!');
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ callbacks hell
// if we only want username from user Object
promiseFour
.then((user) => { // variable me bhi assign kra skte hai
    console.log(user);     // console log
    return user.username // returning username of user i.e. deepRajput
})
.then((username) =>{ // jo value first then se return ho rhi hai wahi second then me as a parameter pass hogi isliye yaha username pass kiya hai jo ki first then me return ho raha hai
    console.log(username); // console log
})
.catch((error)=>{         // .catch() used for error
    console.log(error);     // console loh
})
.finally(() =>{         // kind of default ye to hoga hi hoga mtlb promise reject hua ya resolve jo bhi hua hai vo hone k baad ye run hota hai....
    console.log('The promise is either resolved or rejected!');
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
            if(!error){
                resolve({username : "javasript", email : 'deep@something', password: '12345@'})
            }else{
                reject('ERROR : Javascript went wrong!')
            }
        }, 1000);    

    })
// apply then and catch on promiseFive

//using async-await

// ye wait krta hai kaam ke hone ka agr ho jata hai to aage badhta hai warna wahi error de deta hai
// hm isme gracefully catch handle nhi krte hai cuz agr database connection hua hi nhi to aage hame jana hi nhi 
// async function consumePromiseFive(){
//     const response = await promiseFive // yaha wait kr rhe hai ki jo bhi promiseFive se response aaye (error aaye ya resolve value aaye) uske liye wait kr rahe hai 
//     // imp :- promise ek object (eventual completion) hai to usko PromiseFive() aise use nah kiya jaye
//     console.log(response);
// }
// async await directly error ko handle nhi kr skte, hai to isliye error aa rahi hai output me
// Error Reason :-  This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().

// line 117 assure kr rhe hai ki value aa hi rahi hai promise me or usko response variable me hold kr ke console.log kiya hai, lekin value aa nhi rhi or reject ho raha hai or async await directly error handle nhi kr skta hai to is case me error aa rhi hai

// consumePromiseFive()

// isko solve krne k liye try-catch block use kr skte hai
async function consumePromiseFive(){
    try {
        const response = await promiseFive  
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// if resolve then try block will execute and if reject/error then catch block will execute
consumePromiseFive()

 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// discussed in next file
// async function getAllUser(){
//     try {
//         const response = await fetch('https://api.github.com/users/alphapain') // fetch only need URL // await used for waiting for request
//     const data = await response.json() // jo data aa raha hai vo string me aa raha or string se value access nhi kr payenge to isliye json me convert kiya hai // isko vi await krna pdega cuz ye bhi convert hone me time leta hai
//     // console.log(response);
//     console.log(data);
//     } catch (error) {
//         console.log('Error : ', error);
//     }
// }
// getAllUser() // then we got all data

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://api.github.com/users/alphapain') // giving url in fetch
.then((response) =>{                // using .then 
    return response.json()          // returning response into json format
})// yaha se jo data uper return kiya hai usko handle next .then krega or iske ander vo value receive hogi jo uper wala then return kr raha hai... i.e. chainable/thenable // 2nd wala then jb start hoga jb pehle wala .then khatam hoga, usse pehle start hoga hi nahi
.then((data) =>{
    console.log(data);
})
.catch((error)=>{               // using .catch for error
    console.log(error);         // console.log the error
})