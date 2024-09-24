class User {
    constructor(username) {
        this.username = username
    }

// adding a method
    logMe(){
        console.log(`USERNAME is ${this.username}`);       
    }
}

class Teacher extends User{ // class 'Teacher' inherit hui hai class 'User' se , to 'User' ki hr functionality 'Teacher' k pass hogi

    // agr chaho to constructor ka use jruri nhi hai , lekin hn yaha constructor create krke 'User' k constructor ko overwrite kr skte hai, overwrite shi rhte hai create/overwrite krna bcoz sbhi ka constructor apna-apna hota hai..

    constructor(username,email,password){ // password kuch bhi le skte hai

        // pichli files me padha tha ki .call use krna pdega or this create krna pdega , vo method bhi use hota tha lekin ab class syntax hai to sidha super ka use kr skte hai.....
        super(username) // super ko call kiya or parameter pass kiya, to super automatically check krega ki aap konsi class extends kr rhe ho, to usi class k constructor me jayega or 'this' automatically behind the scene le jayega or username ko set krdega or uski value aa jayegi or aap uska directly access bhi kr skte hai...

        // yaha teacher me super method use kiya hai or vo user k constructor me jayega, username ki value set krega or idhr super me hm uski value directly access kr skte hai


    // email or password ko directly set krdiya hai.....
            this.email = email
            this.password = password
    } 


    // adding a method
            addCourse(){
                console.log(`A new course was added by ${this.username}`); // username ko bhi access krke check kr lete hai
               }

               // can add more methods
}

// making new users
const chai = new Teacher("chai", "chaiTeacer@gmail.com", "#123")

chai.addCourse() // Output:- A new course was added by chai.
chai.logMe()  // Output :- USERNAME is chai.

const coffee = new User("coffee")
// coffee.addCourse() // Output :- TypeError: coffee.addCourse is not a function
coffee.logMe()  // Output :- USERNAME is coffee.


// More :-
// console.log(chai === coffee); // false
// console.log(chai === Teacher); // false bcoz chai ek instance hai teacher ka , na ki exact teacher hi hai....

// to instance check krne k liye ek soln hai:-
// console.log(chai instanceof Teacher);  // true
// console.log(chai instanceof User); // true
// console.log(Teacher instanceof User); // false

