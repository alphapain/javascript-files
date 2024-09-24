// Theory:- we have a call stack jaha execution hota hai and there is a Global Execution context, every function has its execution context.

// FILE LINK :- https://excalidraw.com/#json=eE7Pr3T32PXxgGgIWx7EW,lGGDKSTptgkqjtKkq_tYqQ
// FILES LOCATION IN SYSTEM :- C:\Users\Deep rajput\Desktop\javascript\imp_js_images

// code :-

function setUserName(username) {
    this.username = username
}

function createUser(username,email,password) {

    setUserName(username)

    this.email = email // setting email
    this.password = password // setting password
}

// username ko directly set nahi kiya hai, setUserName me username ko pass kiya hai to ye hame username set krke dega...


const chai = new createUser("chai", "chai@gmail.com",123)
console.log(chai); // createUser { email: 'chai@gmail.com', password: 123 }
// output me sirf email or password aaya hai username display nhi hua hai

// 2. FILE LINK :- https://excalidraw.com/#json=N6Hfn3_Q2x_5Wyn0LZYRN,4prm6-M6RCv-FdrQ41mmSA

// agr hame call karana hai to :-
// actually me uper file code me hmne sirf usko call nhi kiya hai, sirf uska reference pass kiya hai

/*
function createUser(username,email,password){
    setUserName(username) // () se lag raha hai ki hmne yaha call kiya hai lekin internally/technically javascript me uska refernce pass hua hai , call nhi hua hai..
}
    */

// to js me hame kuch methods milte hai jinse hm explicitly jaake us method ko call kr skte hai , unme se ek .call hai.....


// FILE 3 
// FILE LINK :- https://excalidraw.com/#json=geKFwvrIAyCsrYCon_YKV,ficeMwkWxopMz5PFjGT-1g


