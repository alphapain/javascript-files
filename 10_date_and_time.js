// // dates

// let myDate = new Date() // myDate is an instance/Object of Date
// console.log(myDate); // not readable >> therefore we have to convert it in another form which is readable or comparable or usable

// //converting in string
// console.log(myDate.toString()); // better 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// // typeof
// console.log(typeof myDate); // object type

// // specific date dene k liye
// // let newDate = new Date() // >> ye current date along with time aygi

// // but >> specific date dene k liye
// // 1.
// let newDate = new Date(2024,0,28) // 2024 > year  // 0 > jan, 1 > feb, 2 > mar, .....etc  // 28 > date
// console.log(newDate.toDateString()); // .method add kiya for readability.     >>>>>>> word format

// // 2.
// let myCreatedDate = new Date(2024,2,28,8,30) // >> year,month,date,hour,minute
// console.log(myCreatedDate.toLocaleString());   // >  --/--/-- > format

// // specific format dene k liye
// let myNewFormatDate = new Date("2024-1-14") // 1/14/2024
// console.log(myNewFormatDate.toLocaleString());

let lastDate = new Date("1-2-2023") // 1/2/2023
// console.log(lastDate.toLocaleString());
// // digit format me likhte hai to month zero se start hote hai lekin DD/MM/YYYY etc. format me likhte hai to one se start hote hai


// time stamps

let myStamp = Date.now()
console.log(myStamp); // miliseconds value from 1/1/1970 to now.
console.log(lastDate.getTime()); // values in miliseconds


// is trh se hm dono values ko compare bhi kr skte hain // comparison hmesha mili-seconds me hi kren

// to change in seconds
console.log(myStamp/1000); // seconds me aa jayenge but values decimal me ayegi

// decimal remove krne k liye we know ki .floor method use kiya jata hai
console.log(Math.floor(myStamp/1000));

// more methods
let myNewDateIs = new Date()
// console.log(myNewDateIs.getMonth()+1); // > month, day, seconds , miliseconds, full year , hour etc. methods !

/* getMonth me =>
        0 = jan
        1 = feb
        2 = mar

        => to end user ko problem na ho isliye +1 krdete hain !!
*/
// press ctrl+space => to see all property

// ye toLocaleString ki trh hi kaam krega , bs thoda or customize krne k liye better hai
// 'default' = International
myNewDateIs.toLocaleString('default',{
    weekday : "long",
    day : "numeric"
})
console.log(myNewDateIs);

