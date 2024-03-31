const marvel_heroes  = ["thor", "ironman", "spiderman"] // length 3
                        //0        //1         //2

const dc_heroes = ["superman", "flash", "batman"] // length 3
                    //0        //1         //2

// console.log(marvel_heroes.length); // 3
// marvel_heroes.push(dc_heroes) // pushing dc array to marvel array


// console.log(marvel_heroes) // dono array merge nhi hongi, lekin array k ander dusri array aa jayegi as a single element
// console.log(marvel_heroes.length); // yaha le length 4 ho jayegi q ki dc array as a single element push hui hai marvel array k ander to length +1 ho jayegi.

// //  now the marvel array >> thor(0)  >> ironman(1)  >> spiderman(2) >> ["superman", "flash", "batman"](3)
// // dc array push hui marvel heroes mein to vo last index (3) pe add hui hai

// // accessing the dc array in marvel array
// console.log(marvel_heroes[3]); // dc array

// // accessing all values
// console.log(marvel_heroes[0]);
// console.log(marvel_heroes[1]);
// console.log(marvel_heroes[2]);
// console.log(marvel_heroes[3]);

// push method existing array me change krta hai lekin concatenate method new array return krta hai

// constt allHeroes = marvel_heroes.concat()
// console.log(allHeroes); // combines two or more array



// spread method
// const indian_heroes = ["shaktimaan", "naagraj"]

// const allHeroes = [...marvel_heroes,...dc_heroes, ...indian_heroes] // combines all array
// console.log(allHeroes);


// flat method

// const another_array = [1,2,3,4,[5,6,7],8,[9,10,[11,12,13],14],15]
// console.log(another_array); // normal printing

// console.log(another_array.flat(1)); // returns a new array with all sub-array elements concatenated into it recursively up to the specific depth
// flat method k inside depth deni hoti hai ki kitni depth tk array ko concatenate krna hai
// we can simply give infinity to concatenate all sub-array
// console.log(another_array.flat(Infinity)); 



// jb hm web-page se data select krte hai to kyi baar alg format like node list, object, string me aata hai but hme array chahiye hota hai taaki loop use kr ske to uske liye :-
// to hm puch bhi skte hai or convert bhi kr skte hai data ko array me

// 1. checking
console.log(Array.isArray("Deep")); // here deep is string so it returns false
console.log(Array.isArray([1,2,3,4])); // here it is string so it returns true

// 2. convert krne k liye
console.log(Array.from("Deep")); // it converts "Deep" to ['D', 'e', 'e','p'] 

// interesting and important
// we can also pass objects inside this method
console.log((Array.from({name:"Deep"}))); // ye directly convert nhi kr payega so it returns empty array     //agar object  ko array me convert krna hai to batana pdega ki keys ko convert krna hai ya values ko convert krna hai objects ki // aage or projects me use me ayga!!


// 3.
let s1 = 10
let s2 = 20
let s3 = 30

console.log(Array.of(s1,s2,s3)); // returns a new arary from a set of elements. // [10,20,30]


let a1 = [1,2]
let a2 = [3,4]
let a3 = [5,6]
console.log(Array.of(a1,a2,a3)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]