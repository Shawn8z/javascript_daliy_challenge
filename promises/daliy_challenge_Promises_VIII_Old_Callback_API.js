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



function saySomething(str) {
	throw "what the heck"
}

let ERR = ""

const wait = () => new Promise( (resolve, reject) =>
{
    resolve(setTimeout(() => {console.log("1000 ms pasted")} , 1000));

    reject(() =>  {ERR = error} );

})


wait().then(() => saySomething("1 second has passed"))
        .catch((e) => {setTimeout(() => {console.log(e)}, 2000)});