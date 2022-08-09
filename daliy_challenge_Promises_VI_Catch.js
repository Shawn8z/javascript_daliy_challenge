// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Bringing tacos");
//     }, 5000)
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Not bringing tacos, foot truck not there.");
//     }, 5000)
// })

// const onFulfillment = (result) => {
//     console.log(result);
//     console.log("set up the table to eat tacos");
// }

// const onRejection = (error) => {
//     console.log(error);
//     console.log('start cooking pasta');
// }

// promise1.then(onFulfillment);
// promise2.catch(onRejection);

let errorLog = {}

let promise = new Promise((resolve, reject) => {
    
    throw new Error('Something failed')
})
.catch((error) => {
    errorLog = error;
    console.log(errorLog.message);
});







