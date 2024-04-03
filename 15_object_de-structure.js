// const course = {
//     courseName : "javascript",
//     price : 1000,
//     courseInstructor : "Anonymous"
// }

// // how to access value => 2 method hote hai .method or square bracket
// // ex:- course.courseName se courseName access hoga!

// // lekin agr ek hi value like course.courseName ko jyada vri acces krna to thoda disturbing code ho jata hai.......


// //  lekin code ko or clean or easy banane k liye hm ye syntax v use krte hai mostly :-
//    const        {courseName}            =   course
// // const {jo value extract krni hai vo} = kaha or konse object se value extract krni hai uska name
// console.log(courseName); // ab yaha .method ya [] notation use krne ki jrurt nhi sidha value likhne se bhi usko access kr skte hain.......
// console.log(courseName);
// console.log(courseName);
// console.log(courseName);

// // or aap jo value access krni ha uska naam v change kr skte or change hue naam se usko extract or access kr skte hain...!
// // ex:-
// const {courseInstructor : cInstruct_} = course
// console.log(cInstruct_);
// console.log(cInstruct_);
// console.log(cInstruct_);
// console.log(cInstruct_);


// const newObject = {
//     name_of_student : "Deep" ,
//     course_name :"BCA",
//     roll_no : 18,
//     state : "Haryana",
//     isRegular : false
// }

// const {name_of_student} = newObject  >> de-structuring
// console.log(name_of_student);


// const {name_of_student : name} = newObject // giving other name <<

// console.log(name); 


// {}  >>>>>>>> means de-structuring

// **************************************************
// API  >> backend se data send krta hai.......

// API se data JSON format me aata hai


// JSON >> object ka kuch name hota hai but json is without name >>> json me key or values dono string hoti hai
// {
//     "name" : "deepak",
//     "courseName" : "Js",
//     "price" : "free"
// }
// jruri nhi ki hr baar object ki form me api mile , array format me bhi mil skti hain
// [
//     {},
//     {},
//     {},
// ]


// a API link >>>>  https://api.github.com/users/hiteshchoudhary



