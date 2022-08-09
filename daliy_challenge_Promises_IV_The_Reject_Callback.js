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


const promiseFail = new Promise((resove, reject) => {
    setTimeout(() => {
        reject("It's not a dog!")
    }, 1000)
})

const onReject = (error) => {
    console.log(error);
}

promiseFail.catch(onReject);