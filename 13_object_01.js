// there are two ways to create a object :- literal se create krna , or constructor se create krna

// singleton >> constructore se banayenge to hmesha singletone banega mtlb vo apni trh ka ek hi object hai... later!!
// age literal se banega object to singletone nhi hoga or agr constructore se banega to hamesha singleton banega

// dono trh se create krne se koi frk nhi pdta object me bs singleton ka frk pdta hai!

// 2. constructor method
// Object.create >> learn it later!


// array me index se access krte hai elements ko lekin objects me key value pairs hote hain.


// 1. object literal

const JsUser = {
    name : "Deep",
    "full name" : "DEEPAK RAJPUT",
    age: 18,
    location : "Haryana",
    email : "deep@google.com",
    isLoggedIn : "false",
    lastLoginDays : ["monday", "wednesday", "friday"],
}
// console.log(JsUser["full name"]);
// by default jo name key yaha pr di gyi hai system usko by default as a string leta hai >> "name" lekin hm string format me likhte nhi hain
// mtlb key ko system by default string format me hi leta hai
// values me hm >> string, number, boolean, array, function, object etc. use kr skte hain

// accessing the objects >>
// console.log(JsUser.name);
// console.log(JsUser[name]); // it gives error bcoz by default system as a string format me leta hai keys ko isliye
// therefore
// console.log(JsUser["name"]);

// agr .key method se access krte hai to "" dene ki jrurt nhi hoti lekin square brackets method se access krte hai to "" use krna pdta hai.

// hme dono way q pata hone chahiye >>
const newObj = {
    "full name" : "DEEP RAJPUT",

}
// hme pata hai ki jo keys hoti hai unko system by-default string me leta hai hme likhne ki jrurt nhi hoti lekin idhr name wali key ko string me hi likha hua hai to isko hm kisi se trike se .key method se access nhi kr skte 

//trying to access
// console.log(newObj.fullname); // it gives undefined

// console.log(newObj."fullname"); // it's a wrong syntax! :(

// therefore we have to access it with only [""] method.

// console.log(newObj["full name"]); // it gives the correct value :)




// using Symbol in object

// first create a symbol
const mySymbol = Symbol("key1")     


// >> IMPORTANT!! >> //how to declare a symbol in object or how to use symbol as a key??
// ques >> take a symbol > usko objects ki keys me add kro > and finally print krdo!

// using symbol as a key

const usingSymbol = {
    mySymbol : "myKeyFirst", // ye error nhi de raha lekin ye as a symbol use nhi hua hai
}

console.log(mySymbol); // prints Symbol(key1)
console.log(usingSymbol.mySymbol); // prints myKeyFirst

// check krta hi ki jo mySymbol usingSymbol object me use hue hai actually symbol hai ya nhi !?

console.log(typeof usingSymbol.mySymbol); // ye string return krega q ki starting me padha tha ki system keys ko default as string leta hai...!

// agr mySymbol ko symbol ki trh use krna hai to :- [mySymbol] ko square brackets me likhna pdega

// making new symbol
const anotherSymbol = Symbol("key-2")

// using it in objects
const usingAnotherSymbol = {
    [anotherSymbol] : "last-key" // square brackets me likhenge
}
console.log(anotherSymbol); // prints Symbol (key-2);
console.log(usingAnotherSymbol); // { [Symbol(key-2)]: 'last-key' }
console.log(usingAnotherSymbol.another); // undefined show krega q ki pehle uper wale case me vo symbol ki trh use nhi ho raha tha to vo ek normal key thi us object ki, isliye usko .key method se access kr skte the , lekin idhr anotherSymbol ek symbol ki trh use ho raha hai to .key method se access nhi kr skte undefined dega!

console.log(usingAnotherSymbol[anotherSymbol]); // last-key


// objects ki values ko change kaise krte hai ->
const valueChangeObject = {
    name : "Deep",
    course : "BCA"
}
console.log(valueChangeObject.name); // Deep
console.log(valueChangeObject.course); // BCA

valueChangeObject.name = "Sahil"
valueChangeObject.course = "BA"

console.log(valueChangeObject.name); // Sahil
console.log(valueChangeObject.course); // BA

// we can lock or freeze any object like this :-
// example :-
// Object.freeze(valueChangeObject) // with this way we freeze/lock the select object!

// age hm ab kuch bhi selected object me change krenge to error to show nhi hoga lekin us object me change nhi hoga 
// example :- changing the name key of the selected object>

valueChangeObject.name = "Arun"
console.log(valueChangeObject.name); // Sahil :):)


// adding a function in the object

valueChangeObject.greeting = function(){
    console.log("Hello, users!!");
}

console.log(valueChangeObject.greeting); // yaha hm greeting function ko access nhi kr rhe yaha greetin method ko access kr rhe hai jo ki declared nhi hai to show hoga!...>>>>>>     [Function (anonymous)] >> function execute nhi hua hai bs function ka refernece aaya!

console.log(valueChangeObject.greeting()); // function ko parenthesis lagake run kiya jayega!...
// is line ko run krenge to hme error milega q ki hmne is object ko uper freeze kr rakha hai to pehle uska freeze remove krna hoga tabhi hm change kr payenge apne selected object me.



// More:-
// jb bhi hme same object ko reference krna hota hai to 
// example :-
const obj_1 = {
    id : "101",
    name : "Rajput"
}
const obj_2 = {
    id : "102",
    name : "Chauhan"
}


obj_1.new_function_1 = function(){
    console.log(`Hello JS users with id ${this.name}`);   // yaha this obj_1 ko reference kr raha hai
}
obj_2.new_function_2 = function(){
    console.log(`Hello JS users with id ${this.name}`);   // yaha this obj_2 ko reference kr raha hai
}

console.log(obj_1.new_function_1()); // function hai to () se run hoga!
console.log(obj_2.new_function_2()); // function hai to () se run hoga!

// ek execution apne aap ho jata hai browser me to isliye undefined aa raha hai hr execution k baad

