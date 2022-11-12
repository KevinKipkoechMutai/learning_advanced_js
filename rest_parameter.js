function howMany(...args) {
    return "You have passed " + args.length + " arguments."
}

console.log(howMany(0, 1))


const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3))
console.log(sum(1,2,3,4,5))