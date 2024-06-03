const buttons = document.querySelectorAll('.button') // selecting all elements and assigning to a new variable
console.log(buttons); // after consoling we get a nodelist , we know that we can use forEach loop on nodelist...

const body = document.querySelector('body') // selecting complete body

// using forEach on buttons
buttons.forEach(function(btn){
    console.log(btn); // all elements

    // using event / event listener

    btn.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);// target of the event

        if(e.target.id == "grey"){
            // body.style.backgroundColor = "grey" // yaha hardcode krke "grey" color apply kr rakha hai
            body.style.backgroundColor = e.target.id // yaha e.target.id se color value di gyi hai jo ki already grey hi hai
        }
        if(e.target.id == "white"){
            // body.style.backgroundColor = "white" // yaha hardcode krke "white" color apply kr rakha hai
            body.style.backgroundColor = e.target.id // yaha e.target.id se color value di gyi hai jo ki already white hi hai
        }
        if(e.target.id == "blue"){
            // body.style.backgroundColor = "blue" // yaha hardcode krke "blue" color apply kr rakha hai
            body.style.backgroundColor = e.target.id // yaha e.target.id se color value di gyi hai jo ki already blue hi hai
        }
        if(e.target.id == "yellow"){
            // body.style.backgroundColor = "yellow" // yaha hardcode krke "yellow" color apply kr rakha hai
            body.style.backgroundColor = e.target.id // yaha e.target.id se color value di gyi hai jo ki already yellow hi hai

        // aisi hi hm or button bhi add kr skte hai or same follow kr skte hain
        }
        
    })
})