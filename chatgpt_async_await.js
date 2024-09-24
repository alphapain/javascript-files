// /* Async Function :- 
// >>  when you write async before a function, it means this function will always return a promise.
// >>  even if it returns a value. Javascript automatically wraps it in a resolved promise.
// */

// // example :-
// async function myFunction(){
//     return "Hello" 
// }

// // This will print "Hello" when the promise is resolved
// myFunction().then(console.log());

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// /* Await Function :-
// >>  await can only be used inside async functions.
// >>  it tells js to wait for the promise to resolve before moving on to the next line of code. This makes it easier to write asynchronous code in a more synchronous-looking way.  */

// // example :-
// async function fetchData(){
//     // let response = await  // in js, breaking the line after await without finishing the statement can cause unexpected behavior.
// // fetch('https://api.github.com/users/alphapain') // giving url in fetch
// // so we should use like this :-
//     let response = await fetch('https://api.github.com/users/alphapain')
//     let data = await response.json() // wait for the response to convert to JSON
//     console.log(data); // now we can use the data
// }

// fetchData() // Explaination :- await waits for the promise to complete (either resolve or reject). If the promise is resolved, you get the data, if rejected, it throws an error!


// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // why use async/awaits?
// /* async/awaits helps you avoid complex promise chains and makes the code more readable and easier to debug.
//    without async/await, you would use .then() and .catch() for promise like this:-- */ 

// fetch('https://api.github.com/users/alphapain')
// .then(output => output.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))

// // Explanation :-
// // 1. output: This is the parameter of the first .then() callback function. It represents the Response object that the fetch API returns. This Response object contains information about the HTTP response, including headers, status code, and the body of the response.

// // 2.  data: This is the parameter of the second .then() callback function. It represents the parsed JSON data from the Response object. When you call output.json(), it parses the JSON body of the response and returns a promise that resolves to the JavaScript object derived from that JSON.

// /* To summarize:
// >>  output is the raw response object from the fetch request.
// >> data is the JavaScript object that you get after parsing the JSON from the output response.

// Here’s a quick breakdown:

//  >>  fetch returns a Response object.
//  >> .then(output => output.json()) parses the JSON body of the Response object.
//  >> .then(data => console.log(data)) logs the parsed data.

// If you were to console log output before parsing it, you’d see details about the response, such as headers and status. If you console log data after parsing, you’d see the actual user data, which might include fields like login, id, avatar_url, etc., depending on the API response.

// */

// // using async/awaits:-
// async function getData(){
//     try {
//         let response = await fetch('https://api.github.com/users/alphapain');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData()
// This second version is more readable and avoids 'callback hell'.


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Error Handling with Async/Await
// You need to handle errors in async functions using try-catch blocks bcoz if the promise is rejected, the code will throw an error. without handling this error, the program may crash.
// example:-
// async function fetchMyData() {
//     try {
//         let responseIs = await fetch('https://api.github.com/users/alphapain');
//         let data = await responseIs.json();
//         console.log(data); // Data is successfully fetched
//     } catch (error) {
//         console.log('Error fetching data:-',error);
//     }
// }

// fetchMyData()

// key points:-
// >> if the promise is resolved, the code inside the try block will run.
// >> if the promise is rejected, the code will jump to the catch block and handle the error


// In Summary :-
/* >> async makes a function return a promise.
   >> await makes javascript wait for the promise to resolve or reject,
   >> always use try-catch blocks to handle the errors in async functions. */


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Example :- fetching data from a fake API

// 1. Simple Async/Await example (No error handling)
// This is a basic example to understand how async and await work.


// async function getData() {
//     // simulate an API call using a promise 
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//            resolve("Data fetched successfully") 
//         }, 1500);
//     })

//     // await the promise to resolve
//     const result = await promise;
//     console.log(result); // Output: Data fetched successfully
// }

// getData();

// Explanation :-
/* >> The function getData() is an async function, so it will always return a promise.
   >> await makes the code wait ubtil the promise is resolved and prints "Data fetched successfuly".
 */



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. async/awaits with Error Handling(try-catch)


// async function with error handling
// async function getDataWithErrorHandling() {
//     try {
//         // simulate an API call that might fail using a promise
//         const promise = new Promise((resolve,reject) =>{
//             setTimeout(() => {
//                 reject("Error: Data not found")
//             }, 1500); // intentionally causing an error
//         })
//         const result = await promise;
//         console.log(result); // This will not run if the promise is rejected
//     } catch (error) {
//         // Handle the error here
//         console.error(error); // Output: Error: Data not found
//     }
// }

// getDataWithErrorHandling()

// Explanation:-
/* >> if the promise is rejected, the code will immediately jump to the catch block and print the error message.
   >>  this prevents your application from crashing and allows you to manage the error gracefully.
 */
        
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 3. Using fetch() with Async/Await (Handling API Response)
// Here's a real-world example using the fetch API, where we call a fake API and handle both successful and error responses.

// // Async function to fetch data from an API
// async function fetchData(){
//     try{
//         // fetching data from a fake API
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/users/active/DEEP_RAJPUT'); // A fake API for testing

//         // Check if the response is not OK
//         if(!response.ok){
//             throw new Error('Network Response was not ok');
//         }

//         // convert the response to json
//         const data = await response.json();
//         console.log('Fetched Data:', data); // Output : Fetched data from API
//     }catch(error){
//         // Handle network or any other errors
//         console.error('Fetch Error:',error); // output:- Fetch Error: Network Response was not ok
//     }  
// }

// fetchData()

// Explanation :- 
/* >> we use await with fetch() to wait for the response from the API.
   >> if the response is successful (response.ok), it will convert the data to json.
   >> if there's an issue (like network failure or etc), the error will be caught in the catch block.

 */


// +++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++


// 4. Handling Multiple Promises with Async/Await
// sometimes you need to wait for multiple asynchronous operations. You can use Promise.all() with async/await to handle this.

// async function to handle multiple promises
// async function getMultipleData(){
//     try {
//         // simulating multple API calls
//         const promise1 = new Promise((resolve) =>
//             setTimeout(() => 
//                 resolve("Data from API 1"), 1500));
//         const promise2 = new Promise((resolve) =>
//             setTimeout(() => 
//                resolve("Data from API 2") 
//             , 2000));
            
//             // wait for both promises to resolve using Promise.all

//             const [result1, result2] = await Promise.all([promise1,promise2]);
//             console.log(result1); // Data from API 1
//             console.log(result2); // Data from API 2

//     } catch (error) {
//         // Handle any errors from the promises
//         console.error("Error fetching data:",error);
//     }
// }


// getMultipleData()

// Explanation :- 

/* >> we use promise.all() to wait for multiple promises (promise1 and promise2) to resolve.
   >> if either of the promises fails, the catch block will handle the error.
   >> this ensures that both operations run in parallel, and we only contains once both are complete.

 */


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 5. Retry Mechanism using async/await
// you might need to retry an operation if it fails the first time.


// async function with a retry mechanism
// async function fetchDataWithRetry(retries = 3) {
//     while (retries>0) {
//         try{
//             // simulate an API call 
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/users/active/DEEP_RAJPUT'); // Invalid URL for testing

//             if(!response.ok) throw new Error("Network response failed");

//             const data = await response.json();
//             console.log('Data fetched :',data);

//             return; // exit if the call is successful            
//         }
//         catch(error){
//             console.error(`Attempt failed. Retries left : ${retries-1}`, error);
//             retries -=1

//             if(retries === 0){
//                 console.error("All retries failed.");
//                 return; // exit if all retries fail
//             }
//         }
//     }    
// }

// fetchDataWithRetry()

// Explanation :-
/*
    >> This function will try to fetch the data up to 3 times (retries = 3).
    >> if it fails, it reduces the retry count and tries again, until no retries are left.
    >> it's useful when dealing with unreliable network connections or APIs.


    CONCLUSION :-

    >> Async/Await simplifies working with asynchronous operations by making code look synchronous.
    >> always handle errors with try-catch when using async functions to avoid crashes.
    >> you can use Promise.all with async functions for handling multiple promises.
    >> for reliability, you can implement a retry mechanism if the operation fails.

    "This should give you a comprehensive understanding of how async/await works and how to use it."


    // Key Concepts:-

    // 1. Async/Awaits :- The function fetchDataWithRetry is an asynchronous function that allowa the code to wait for promises (like API calls) to resolve or reject before continuing.

    // 2. Retry Logic :- The while loop will keep trying to fetch data from the given URL until the retries are exhausted (initially set to 3)

    // 3. API call :- The fetch function is used to simulate an API request. The URL provided is intentionally invalid(invalid-URL) to demonstrate how the retry mechanism handles failures.

    // 4. Error handling :-
        >> response.ok checks if the network request was successful.
        >> if the response is not okay, an error is thrown with the message 'Network response failed'.
        >> THe catch block captures the error and logs it, along with the remaining number of retries.

    // 5. Retries :-
        >> The variable retries tracks the number of remaining attempts. Each time a retry fails, retries is decremented by 1.
        >> if retries reaches 0, the function logs 'All replies failed' and exits.

    // 6. Success Case:- 
        >> if the fetch request is successful, the response is converted into JSON format using response.json(), and the data is logged to the console.

    // Purpose :- This code provides a robust way to handle unreliable network operations. If the API call fails, it will retry up to 3 times before giving up and logging an error.

    // "Robust" meaning :- ka mtlb hai mazboot ya durable. jab hm khte hai ki koi code ya system robust hai, iska mtlb hota hai ki woh system ya code alag-alag mushkil situations ko control krne ke liye tyyar hai, jaise errors, failures, ya unexpected conditions.
 */