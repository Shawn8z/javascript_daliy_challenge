function anotherFunc(func) {
	let str = "bye"
	setTimeout(() => { func(str) }, 100);
}

var doc = "hello"

function callback(str) {
	doc = str;
    console.log(doc);
}

anotherFunc(callback)