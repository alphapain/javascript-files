class User {
    constructor(username,email,password) {    // jaise hi class se koi object initialize hoga ya new keyword ko jaise hi use me lenge to constructor automatically call ho jata hai...
        //constructor likhna hr baar jruri nhi hai (mandatory nahi hai)......
        this.username = username
        this.email = email
        this.password = password
    }

    // using a method 
    encryptPassword(){
        return `${this.password}abc`
    }

    // adding more methods

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// making a new user
const chai = new User("chai", "chai@gmail.com", "123")

// access kr rhe hai encryptPassword inside of chai
console.log(chai.encryptPassword()) // output >> 123abc

// accessing changeUsername of object 'chai'
console.log(chai.changeUsername()); // output >> CHAI


// behind the scene (WORKING) of code written above:-

function user(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
}


// adding the properties :-   user function me ek new property add kri hai 'encryptPassword' or usko function bana diya hai
user.prototype.encryptPassword = function(){
    return `${this.password}abc`   
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}` 
}




const tea = new user("tea", "tea@gmail.com", "123456")

// access kr rhe hai encryptPassword inside of tea
console.log(tea.encryptPassword()) // output >> 123abc

// accessing changeUsername of object 'tea'
console.log(tea.changeUsername()); // output >> CHAI


// age class functionality available nhi hoti to aise working hoti or past me bhi aise hi hoti thi.....
// user ek function hai lekin ye object ki trh bhi behave kr raha hai to hm .prototype krke method injects kr skte hai