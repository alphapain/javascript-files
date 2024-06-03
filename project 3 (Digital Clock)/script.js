// select the clock
const clock = document.querySelector('#clock')

// Digital CLock continuously run hoti rhegi

// .1.
// let date = new Date() // Date() is a object
// console.log(date); // complete date

// console.log(date.toLocaleDateString()) // give date as output
// .2.
// console.log(date.toLocaleTimeString()) // give time as output >> lekin is method se hr baar refresh ya run krna pdega correct output k liye, lekin hme laga taar run hone wali or time update hone wali digital clock chahiye to uske liye...

// we can use setInterval() >> isko koi bhi ek method dedo or or  batado ki kitne interval k baad usko continuously run krna hai

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString()) // hr baar ab console pe run hoga 1sec k baad continously lekin hme console pe run nhi krwani

    //  to hm apni selected clock ka innerHTML define krdenge :-
    clock.innerHTML = date.toLocaleTimeString(); // that's it. Done!

},1000) // ye krne k baad uper wala 1 or 2 ko isme use krdenge
