// // nested scope
// // use case :- loop k ander function, if k ander function etc.
// // function k ander function 
// function one(){
//     const userName = "Deep"

//     function two(){
//         const app = "Youtube"
//         console.log(userName); // isliye log kiya hai taaki check kr ske hm function two k ander hai to kya hm function one k ander k username ko access kr skte hain
//     }
//     // console.log(app); // kya hm function two k bhaar function two ki value app ko access kr skta hain
//     // line 11 ko function two k ander hi access kr skte hain q ki iska scope function two tk hi hai function two k bhaar access nhi kr skte
//     two() // executing two 
//     // jaise hi line 11 ne error diya line 13 mtlb function two execute hi nhi hoga or jisse line 9 run nhi hogi...
// }

// one() // executing one >> one jaise hi execute ho raha hai to one k ander two execute ho raha hai or tabhi line no 9 run ho rahi hai agr line 13 ko comment kr denge to function one to execute hoga lekin kuch print nhi hoga...

// // child function parent function k variable ko access kr pata hai....

// // jitni baar v function aise banate or call krte hai unke liye alag ek call stack banta hai ek alag scope bnta hai , jitni baar v function aya scope banega or stack me rakha jayega isko kaafi hd tk closure kaha jata hai...

// using this in if-else

// if(true){
//     const userName = "Deep"
//     if (userName === "Deep") {
//         const app = " Youtube"
//         console.log(userName+app);
//     }
//     // console.log(app); // same reason of error!
// }

// // console.log(userName); // out of scope
//*************************************** more and interesting ******************************************//

console.log(addOne(5)) // hmne addOne ko pehle run kr diya lekin is trh se function me koi error nhi or output 6 aa jayega......
function addOne(num){ // ye ek basic function hai
    return num + 1
}


addTwo(5) // ye addTwo ko access nhi kr payega idhr // ye problem aati hai jb hm function declare krke variable me hold krte hain
const addTwo = function addTwo(num) { // ye bhi function hi hai lekin isko kyi baar expression bhi kh diya jata hai .... ye ek variable ki trh hai......
    return num + 2
}

// isi trh se js me ise Hoisting kaha jata hai .... will learn more later!