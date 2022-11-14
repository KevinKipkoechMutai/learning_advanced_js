//all except selected xters
let myStr = "3 lovely cars."
let myRegex = /[^aeiou]/ig
console.log(myStr.match(myRegex))