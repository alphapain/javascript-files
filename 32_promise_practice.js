//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// // how to create promises:-
// const istpromise = new Promise(function (resolve,reject) {
//     setTimeout( () => {
//         console.log('hello world');
//         resolve() // promise complete hone k baad usko resolve krna pdega tab jaake hm usme .then method connect kr payenge.....
//     },2500)
// })


// // .then is directly connection to resolve
// istpromise.then(function(){
//     console.log('Promise is consumed!');
// })

//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// promise ko kisi variable me store nhi kiya to uspe directly .then method apply kr skte hain
// const _1promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('wlcm to js');
//         resolve("Promise Resolved...")
//     },1500)
// }).then(function(value) {
//     console.log('Printing count 0-10 after every 2 second');  
//     let myArray = ['D','E','E','P','R','A','J','P','U','T']
//     for (let i = 0; i < myArray.length; i++) {
//                 setTimeout(() =>{
//                 console.log(myArray[i]);
//             },i*500)
//         }
// }
// )


// ++++++++++++++++++++++++++++++++
// promise me resolve ka data jo ki as a object hota hai vo .then() me kaise pass kre.......
// const secondPromise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('wlcm to my HOOD');
//         resolve({userName: 'Deep Rajput', age: 19})
//     }, 1500);
// })


// secondPromise.then(function(user){
//     console.log(user);
// })

// ++++++++++++++++++++++++++++++++


const otherPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let fault = true 
        if(fault){
            resolve({ username: "deepRajput", age: 19})
        }
        else{
            reject('enter correct details of the user!');
        }
    }, 1500);
})

// agr values aa rhi hai to .then() se access kr lenge or agr values nhi aa rhi to .catch() se access kr lenge.....
// is case me fault true hai that means promise reject hua to .catch se result access kr lenge ...
// otherPromise.then(function(values){
//     console.log(values);
//     console.log('Promise is resolved!');
// })


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
// if we only want username from user Object
// otherPromise.then((data) =>{
//     console.log(data.username);
// })


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ques:- create a promise and then use .then or jb then me function pass krenge to usme 2 parameters pass krne hai to un dono parameters ko kaise access kre .then method use krte hue.........

// sol :- in js, the .then() method is used to handle the resolved value of a promise when you want to pass multiple parameters .then(), you can return an object or an array from the previous promise and then access those parameters in the .then() method.....

// ex:- example using an object:
const promiseObject = new Promise((resolve,reject) => {
    setTimeout(() => {
        const p1 = "Hello";
        const p2 = "World";
        resolve({p1,p2}); // returning an object with two parameters
    }, 1000);
})

promiseObject.then((result) => {
    const{p1,p2} = result; // Destructing the object to get p1 and p2
    console.log(p1);
    console.log(p2);
})

// ex:- example using an array:
const promiseArray = new Promise((resolve,reject) =>{
    setTimeout(() => {
        const p1 = "Hello";
        const p2 = "World";
        resolve([p1,p2]) // returning an array with two parameters
    }, 3000);
})

promiseArray.then((result) => {
    const [p1,p2] = result; // Destructuring the array to get p1 and p2
    console.log(p1);
    console.log(p2);
})


// In both above example, the promise resolves and the .then() is used to access the two parameters.

// trying one more example myself :-
const promiseMyself = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let fault = true 
        if(fault){
            resolve({ username: "deepRajput", age: 19})
        }
        else{
            reject('enter correct details of the user!');
        }
    }, 5000);
})

promiseMyself.then((dataOfUser) =>{
    console.log(`Username : ${dataOfUser.username}`);
    console.log(`Age : ${dataOfUser.age}`);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{      // kind of default ye to hoga hi hoga mtlb promise reject hua ya resolve jo bhi hua hai vo hone k baad ye run hota hai....
    console.log('The promise is either resolved or rejected...');
})



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// one more example:-
const lastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        
        let theError = false
        if(!theError){
            resolve({ userNameIs : "JAVASCRIPT", age : 18, mail : 'js@something.com'})
        }
        else{
            reject('PROMISE IS REJECTED!!')
        }
    }, 12000);
})

lastPromise.then((userData) => {
    console.log(`UserName : ${userData.userNameIs}, age : ${userData.age}, mail : ${userData.mail}`);
}).catch(() =>{
    console.log('Please provide correct data of the user.....');
})
//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// file 32_promise.js me lino no 112-139 explaination....

// line no 114 :- (graceful error handling) :- "gracefully error handle krne ka mtlb hai ki agr koi error aati hai, toh wo code ko break nahi karegi, or hm error ko handle krke aage badh sakte hain"...

// line no 117 :- (promise ka response await karna) :- "Important :- Promise ek object hai jo future main resolve ya reject hoga isliye hum 'await" ka use karte hain usko resolve/reject hone ka wait krne ke liye"

// line no 118 :- (error handling) :- "Async/await ke saath direct error handle nahi hoti, isliye try-catch ka use jruri hait, taaki error ko handle kiya ja sake"

// line 124-134 :- (try-catch block) :- "isko solve krne ke liye try-catch block ka use krna sahi approach hai. Agr promise resolve hoti hai, to try block ka code execute hoga, aur agr reject hoti hai to catch block handle karega"

// Code Explanation :- (response log) :- "samjhaya hai ki agr promise reject ho, toh response variable me value nhi aygi, yeh sahi hai..................... 'agr error handle nahi hoti hai, toh application crash kar skta hai, isliye promise ke response ko try-catch ke saath handle karna jruri hai....'"