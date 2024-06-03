const form = document.querySelector('form') // selecting the form


// form 2 trh se submite hota hai ya to post ya get type se.. lekin jb bhi submite hota hai to uski value url me ya server k pass chali jati hai, usko rokna pdega cuz hm server k pass to bhej nhi rhe hai, to form ka default action hai vo rokna pdega , usko rokne k liye event k uper ek method milta hai...

// const height = parseInt(document.querySelector('#height').value) >> this usecase will give you empty value cuz jaise hi page load hoga script run hogi or apke form me empty values aa jayegi lekin hme value form submti hone k baad chahiye isliye form k ander write krenge jaise niche use kiya hai

// submit event
form.addEventListener('submit', function(e){
    e.preventDefault() // to stop the default action of form

    // now we need value i.e. height or weight for calculation
    const height = parseInt(document.querySelector('#height').value)
    // sbse pehle hmne querySelector se height to select kiya or .value se uski value access ki or vo value string form me pass hoyegi to usko integer me convert krne k liye hmne parseInt ka use kiya hai

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    // parseInt or .value ki need nhi hai usme 
    // parseInt ki need isliye nhi hai q ki results sirf se element hai

// hm yaha check use krenge taaki hmara code waste na ho khrb na ho q ki is basic project ki calculation me value se code bekkar ho skta hai

    if(height === " " || height < 0 || isNaN(height)){
        // results.innerHTML = "Please give a valid Height!" >> 1 
        results.innerHTML = `Please give a valid Height ${height}!` // backticks use krke value v check kr skte hai height ki
    } else if(weight === " " || weight < 0 || isNaN(weight)){
        // results.innerHTML = "Please give a valid Weight!" >> 1 
        results.innerHTML = `Please give a valid Weight ${weight}!` // backticks use krke value v check kr skte hai weight ki
    }
    // explaining check->
    // 1. check kr rhe hai ki height agr empty hai to
    // 2. check kr rhe hai ki age height zero se less hai to 
    // 3. check >> (old method) height != NaN which is equal to (new method (recommended)) isNan(height) >> mtlb agr height  ki value convertable hai number me to no issue or agr nhi hai mtlb number nhi hai to aage execute nhi krenge
    
     // same with weight

     // formula for calculation :- (weight / ((height*height)/10000)).toFixed(2)
     // toFixed(2) >> decimal 2 place tk rakhne k liye

     const bmi = (weight / ((height*height)/10000)).toFixed(2)

     // show the value of bmi in result
     results.innerHTML = `<span> ${bmi} </span>`;
})