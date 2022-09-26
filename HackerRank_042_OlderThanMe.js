class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        let name = person.name;
        let age = person.age;

        if (age > this.age) {
            console.log(`${name} is older than me.`)
            return `${name} is older than me.`
        }
        if (age < this.age) {
            console.log(`${name} is younger than me.`)
            return `${name} is younger than me.`
        }
        if (age == this.age) {
            console.log(`${name} is the same age as me.`)
            return `${name} is the same age as me.`
        }
    }
}

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)


p1.compareAge(p2)

p2.compareAge(p1)

p1.compareAge(p3)