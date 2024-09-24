class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME :- ${this.username}`);
    }

    // jaise hi ek user bane vaise hi us user ko new id mil jaye 
    static createId(){ // can also use math.random
        return `012345678910`
    }
}

// const deepRajput = new User('deepRajput')
// console.log(deepRajput.createId());

/* kuch situations aisi hongi jisme aap hr us object ko id nhi dena chahte jo is class ka ek instance hai.... to simply us method k saamne static use krdo , static kya krta hai :- us method ko access hone se rok deta hai */


// jaise hi createID() k saamne static use krdenge to vo method kisi bhi object k pass access nhi hoga.....
// output for ex:- deepRajput.createId is not a function


// check krte hai ki kya child class/inheritance me ye static work krega?

class student extends User{  // making new class 
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const new_student = new student('deepRajput','deepRajput@gmail.com') // making new instance
new_student.logMe() // output :- USERNAME :- deepRajput

console.log(new_student.createId()) // output :- TypeError: new_student.createId is not a function
// therefore, static method child class k instance me bhi access nhi hoga......