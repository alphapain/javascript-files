// first, generate a random number 
let randomNumber = (parseInt(Math.random()*100 + 1))

// accessing all required fields:-
const submit = document.querySelector('#subt') // submit button
const userInput = document.querySelector('#guessField') // userInput button
const guessSlot = document.querySelector('.guesses') // previous guesses
const lastResult = document.querySelector('.lastResult') // last result

const lowORHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// inserting a new paragraph
const p = document.createElement('p')


// jo jo need hai ab unko lenge

let prevGuess = [] // ye hmne ek array li hai, jo bhi uses Submit krega value , un-un value ko store krlenge array me , or vo sbhi values i.e. array ko hi hm display kra denge taaki user value submit krte time value ko repeat na kre... 

// number of guesses start 1 se kr rhe hai...jaise hi vo increase hoke 10 pe jayega hm submit button ko block ya disable krdenge...
let numGuess = 1


// mandatory variable
let playGame = true;

// sbse pehle check krenge ki game k liye user available hai bhi ya nhi
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault() // ye ek form type me hai to uski value server pe aage chali jayegi to uske liye ye use kiya gya hai...
        const guess = parseInt(userInput.value) // userInput jo liya hai line no 6 uski value ko access kiya hai or parseInt krdiya then variable me hold krdiya
        // console.log(guess); // optional > console pe display kiya hai bs
        validateGuess(guess) // ab value ko next function me pass krdiya hai
    })
}


// splitting functions into multiple functions

// 1.ye function check krega ki userInput value valid hai ya nhi, khi vo string ya 1-100 k range se bhaar hai check krega(validation work hoga is function me sirf)
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess<1){
        alert("Please enter a number more than 1")
    }else if(guess>100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess) // jb number valid ho chuka hai to usko jo prevGuess krke empty array liya tha usme guess ki value ko push krdiya
        
        
        // agr vo user ka last attempt ho to , mtlb uske baad game over hoga ya user try nhi kr skta
        if(numGuess===11){ // numGuess ek global scope variable hai to usko khi bhi access ya use kr skte hain
            displayGuess(guess) // jo guess hai vo display kiya h
            displayMessage(`Game Over, random number was ${randomNumber}`) // then displayMessage kiya hai

            // jb gameover ho gya to endGame() bhi to krna pdega game khtm krne k liye
            endGame() // we don't need to know how to end the game......
        
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



// 2. value validate hai ya nhi , low hai ya high hai ya correct hai, random selected value se to un sbko message ko display krega...
function checkGuess(guess){
    if(guess===randomNumber){ // agr guess , randomNumber k equal aa hi jata hai to displayMessage krdenge or jb correect guess ho gya to game ko end krdenge
        displayMessage(`You guesses it right!`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too LOW!`)
    }else if(guess>randomNumber){
        displayMessage(`Number is too HIGH!`)
    }
}

// checkGuess wala msg hm 2. me hi print krwa skte hai lekin hmne ek or function banaya hai

// 3. it display guess...
/* 
    > userInput ko clean krega, q ki next value vi input krni hai
    > previous guesses me array ki form me add krdega or        remaining guess ko vi update krega
    */ 
function displayGuess(guess){
    userInput.value = '' // jaise hi value submit ho rhi hai to value k saath kuch action to perform ho raha to value empty to krni pdegi next time k liye to uske liye hmne value ko empty string me store krdiya hai
    guessSlot.innerHTML += `${guess} , ` // jo v guess ki value usko update nhi kr raha usko vo push krte ja raha hai...
    numGuess++; // hr guess k baad value increase ho rahi
    lastResult.innerHTML = `${11-numGuess}` // no of remaining guesses less ho rhi hai...
}

// 4. message display k liye or ye wala function directly DOM se interact krega...
 /*
    > userInput ki value ko empty krdenge cuz aage user ko next guess vi krna hai
    > innerHTMl me guess ko add krdenge
    > remaining guess ko km krdenge
    **** sara DOM manipulation is function me krenge ****   
 */
function displayMessage(message){   
    lowORHi.innerHTML = `<h2>${message}</h2>`
}

// 5. 
function endGame(){
    userInput.value = ''     // end game hua to new game start krne se pehle saare input fields clear krdi hai
    userInput.setAttribute('disabled','') // userInput pe ek attribute set kiya or uske ander disabled value dedi , lekin disable key-value pairs me aata hai next parameter hmne empty dediya....taaki user or aage value add na kr paye q ki end game ho chuka or new game start krna hai isliye
    p.classList.add('button') // paragraph me classlist add ki or usme ek button add krdiya or usme innerHTML dedi...
    p.innerHTML = `<h2 id = "newGame">Start new game.</h2>`
    startOver.appendChild(p) // p ko new Child ki trh krdiya , isliye kr paye q ki p global scope me tha
    playGame = false // isko false krna pdega tabhi jaake game end hoga
    newGame()
}

// 6.
function newGame(){
    const newGameButton =  document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
    let randomNumber = (parseInt(Math.random()*100 + 1)) // new number generate kiya hai isliye let me liya hai na ki const me
    prevGuess = [] // array ko empty krdiya (reset)
    numGuess = 1 // no of guesses dobara se start krdiye
    guessSlot.innerHTML = '' // reset ya empty krdiya
    lastResult.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled') // disable remove krdiya
    startOver.removeChild(p)
    playGame = true         // playGame ko allow kiya hai 
    })

}


