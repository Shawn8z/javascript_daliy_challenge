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



function doSomething (isGoingToResolve = true) {
    return new Promise((resolve, reject) => {
    if (isGoingToResolve) {
        resolve("something")
    } else {
        reject("something else")
    }
    }).then(response => {
        console.log("in my function",response)
    }).catch(error => {
        console.log("in my function",error)
    })
    // .then(() => {response = "something"})
}

doSomething().then(response => {
    console.log("in my main call", response)
})
