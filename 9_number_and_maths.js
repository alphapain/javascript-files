// normal declaration 
const score = 200
console.log(score); // normal print

// specially forcefully uska type bhi define kr skte hain
const amount = new Number(10000)
console.log(amount); // hard-code krke dega type or console window pe prototype or uski or properties bhi milti hai


// using methods
console.log(amount.toString()); // tostring method
console.log(amount.toString().length); // pehle number ko string me change kiya or we know that ki string me length property hoti hai to length property ab number me use kr payenge q ki number ab string me change ho chuka hai

// methods
console.log(amount.toFixed(2)); // decimel k baad kitne characters chahiye

//
const otherNumber = 8119.4893
console.log(otherNumber.toPrecision(4)); // it returns a string

//
const hundreds = 10000000
console.log(hundreds.toLocaleString()); // by default US standard

// for indian standard
console.log(hundreds.toLocaleString('en-IN')); // indian standard

// check more values/standard on MDN

// min and max value and other number methods ex:- Number.method >> run
// try on console


// ++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++
console.log(Math); // object with many properties // run on console

// 
console.log(Math.abs(-5)); // -ve to +ve
console.log(Math.round(5.67)); // round off

//
console.log(Math.ceil(4.01)); // round off the next(big) number //5 .. kitne bhi jyada ho next number se round off krdega

//
console.log(Math.floor(4.9)) // round off to the lower number // 4

//
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); // give lowest number
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // give highest number

// 
console.log(Math.random()); // random no range between >> 0-1

//agr kisi specific range me number chahiye like dice me 1-6 ya koi or 1-10 to uske liye krenge :-

// decimel ko ek place left shift krne k liye *10 kiya
// decimel k baad double zero k case ko avoid krne k liye +1 kiya
// (Math.random()*10) ko pehle execute krne k liye () me wrap krdiya

// kaha se kaha tk value chahiye vo depend krega ki aap kisse multiply kr rhe hai
console.log((Math.random()*10) +1); // ab confirm 1 to 10 k between aygi

// agr ek hi value chaiye mtlb no decimal to Math.random ko Math.floor k saath wrap krdenge
console.log(Math.floor(Math.random()*10)+1);

// important
const min_ = 10
const max_ = 20

console.log(Math.floor(Math.random() * (max_ - min_))+min_);
// Math.floor >> for only one value
// Math.random() >> for random
// max_ - min_ >> 20 - 10 => 10 

// math.random *10 >> gives upto 10 and then we add >> min_ >> therefore now the value will be 10-20!

