// // // // const coding = ['js', 'py', 'ruby', 'cpp', 'java']

// // // // // const values = coding.forEach( (item) => {
// // // //     // console.log(item); // normal using for each loop but kya hm isko kisi variable me store kr skte hai? kya ye kuch return krega ya krta bhi hai ?  >>>>>>>> 1.
// // // //     // return item    //  >>>>>>>>> 2.
// // // // // })
// // // // // returning the values
// // // // // console.log(values); // ye undefined return krega  >>>>>>>>>> 1.

// // // // // agr return ko try krna hai to manually 2. ki trh return krna pdega >> but vo phir v return nhi krega
// // // // // foreach return nhi krta values ko......!


// // // // // *************************************
// // // // // filter >> also take callback as its parameter
// // // // // filter hmesha value return krta hai
// // // // // const myNums = [1,2,3,4,5,6,7,8,9,10]

// // // // // myNums.filter( (num) => num>4 ) // no output bcoz filter value return krta hai


// // // // //filter k ander ek callback function hoga jiske ander hr value ko each access kia jayega, uske baad condition di jayega or true value ko return kr diya jayega..........................
// // // // // const newNums = myNums.filter( (num) => num>4) // ye implicit return hai // // implicit return >> hme () use nhi krne pdte or return statement ko ek hi line me krdena hota hai >> hme return likhne ki need nhi hai q ki statement ek hi line ki hai
// // // // // console.log(newNums);    // [ 5, 6, 7, 8, 9, 10 ]

// // // // // but 
// // // // // const newNums =myNums.filter((num) => {   //  explicit return >> ye normal hi hai jaise hme isme return keyword use krna padta hai // yaha scope start hua hai to return keyword use krna hi pdega
// // // //     num>4 ///////// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1.
// // // //     // return num>4     /// >>>>>>>>>>>>>>>>>>>>>>>>> 2.
// // // // // })
// // // // // console.log(newNums); // it return >>> [] >>>>>>>>>>>>>>>>>>>> 1.
// // // // // console.log(newNums); // it return >>> [ 5, 6, 7, 8, 9, 10 ] >>>>>>>>>>>>>>>>>>>> 2.


// // // // // agr hme same work foreach se krna hai to
// // // const myNums = [1,2,3,4,5,6,7,8,9,10]
// // // const newNums = [] // taking empty

// // // // use if-condition and push method

// // // myNums.forEach( (num) => {
// // //     if(num>4) {
// // //         newNums.push(num)
// // //     }
// // // })
// // // console.log(newNums);  //[ 5, 6, 7, 8, 9, 10 ] 

// // // more :-

// // const books = [
// //     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
// //     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
// //     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
// //     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
// //     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
// //     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
// //     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
// //     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
// //     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// //   ];

// // // accessing books with genre History.....
// // // const userBooks  =  books.filter( (bks) => bks.genre === "History");
// // // console.log(userBooks);

// // // books published after 2000
// // // const userBooks = books.filter( (bks) => bks.publish >= 2000) // this is right code...
// // // but 
// // // const userBooks = books.filter( (bks) => {bks.publish >= 2000}) // this is wrong code... bcoz agr scope start kiya hai to return keyword use krna hi pdega >>>>>>>>>>> output >>> []
// // // const userBooks = books.filter( (bks) => { return bks.publish >= 2000}) // right code...
// // // console.log(userBooks); 

// // // aise hi hm or filter try kr skte hai..


// // // **************************MAPS**************************************

// // // const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// // // const newNum = myNumbers.map( (nums) => nums+10 ) // map value return krta hai // agr hm yaha scope open krenge to return krna pdega jaise uper filter me kiya hai
// // // console.log(newNum);

// // // same with using foreach

// // // myNumbers.forEach( (value) => {
// // //     value = value+10
// // //     console.log(value);
// // // })

// // // ************************Chaining >>> using method inside method *********************
// // const myNumbers = [1,2,3,4,5,6,7,8,9,10] // normal declare

// // // const newNums = myNumbers.map().map() >> using map inside map.......just ex..

// // const newNums = myNumbers
// //                         .map( (num) => num*10) // yaha map use krke num*10 values ko access kiya hai or jo array result me aya hai uspe 2nd map chain ko apply kiya hai
// //                         .map( (num) => num+1) // jo array ist map se result aya hai uspe 2nd map apply hoga
// //                         .filter( (num) => num>=40) // jo array 2nd map se result aya hai uspe ye filter apply hoga...

// // console.log(newNums);


// // ********************** reduce ************************
// const array = [1,2,3]
// // const final = array.reduce(function(accumulator, current){
// //     console.log(`accumulator : ${accumulator} and current ${current}`);
// //     return accumulator + current 
// // }, 0)

// // console.log(final);


// // using arrow function 
// // const final = array.reduce( (accumulator,current) => accumulator + current,0)
// // console.log(final); // 6

// // one more ex-

// // const shoppingCart = [
// //     {
// //         itemName : 'js course',
// //         price : 2000
// //     },
// //     {
// //         itemName : 'py course',
// //         price : 4999
// //     },
// //     {
// //         itemName : 'DS course',
// //         price : 12999
// //     }
// // ]
// // // add all the prices in the shopping cart.....

// // const output = shoppingCart.reduce( (accumulator,item) => accumulator+item.price,0)
// // console.log(output);