// generate a random color 
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#' // let isliye liya taaki aage change kiya ja ske or '#' store kra diya taaki += se usme value add ho ske in the form hex color ex:- #B6269D etc.

    // loop use krni pdegi jisse value add hogi
    for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random()*16)];
    }
    return color; // random color ko retunr krdiya hai 
}
// console.log(randomColor()); // console me check kr rhe ki generate hua ya nhi ....


// ++++++++++++++++++just practice++++++++++++++++++++++++
// generate random value (only position)
// console.log(Math.floor(Math.random()*16)) // 0 to 16 value 
// agr zero include nhi krna to +1.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// declaring a global scope variable , taaki aage different use kr ske


// using clean code :-
let intervalId;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// making function for passing in reference
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBackgroundColor,1000)
    }

        function changeBackgroundColor(){
            document.body.style.backgroundColor = randomColor() 
        }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null; // jaise hi interval id clear hui to usko ab hmne flush out i.e. null set krdiya , for low memory consumption and better code
    }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// now we need reference of both start and stop
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);