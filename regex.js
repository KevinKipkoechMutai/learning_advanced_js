//the .test() method

let testStr = "freeCoDeCamp"
let testRegex = /Code/i //i-flag 
console.log(testRegex.test(testStr))


let petString = "Dogs and cats are loved by humans"
let petRegex = /cats|dogs|rabbits/
// console.log(petRegex.test(petString))

//extracting matches => the .match() method
"Hello, World!".match(/Hello/)
let ourStr = "repeat, repeat, repeat"
let ourRegex = /Repeat/ig
console.log(ourStr.match(ourRegex))

//the period or dot wildcard
let humStr = "I'll hum a song"
let hugStr = "Bear hug"
let huRegex = /hu./
console.log(huRegex.test(humStr))
console.log(huRegex.test(hugStr))

//matching a single xter with multiple possibilities
let bigStr = 'big'
let bagStr = "bag"
let bugStr = "bug"
let bogStr = "bog"
let bgRegex = /b[aiu]g/ig
console.log(
    bigStr.match(bgRegex),
bagStr.match(bgRegex),
bugStr.match(bgRegex),
bogStr.match(bgRegex)
)

//matching letters of the alphabet
let catStr = 'cat'
let batStr = 'bat'
let matStr = 'mat'
let atRegex = /[a-e]at/
console.log(catStr.match(atRegex))