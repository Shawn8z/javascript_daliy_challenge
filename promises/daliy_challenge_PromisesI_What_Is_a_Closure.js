function greetingMaker(salutation) {
    return  function closure(name) {
	    return salutation + ", " + name 	
	}
}

const greeting = greetingMaker("Hello")
let val = greeting("John");
console.log(val);