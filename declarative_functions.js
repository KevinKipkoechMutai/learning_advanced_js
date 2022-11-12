const person = {
    name: "Taylor",
    sayHello: function() {
        return `Hello! My name is ${this.name}`
    }
}

console.log(person.sayHello())

const person1 = {
    name: "Kenny",
    sayHello() {
        return `Hello! My name is ${this.name}.`
    }
}

console.log(person1.sayHello())


const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        return this.gear = newGear
    }
}

console.log(bicycle.setGear(3))

