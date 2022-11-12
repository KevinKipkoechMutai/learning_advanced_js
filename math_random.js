//random number between 0 and 9
function randomWholeNumber() {
    return Math.floor(Math.random()*10)
}

//random numbers within a rangle
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomRange(2, 4))