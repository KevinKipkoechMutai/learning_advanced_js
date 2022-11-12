//print odd numbers between 9 and 0

const myArray = []

for (let i = 9; i > 0; i -= 1) {
    //if (i%2 != 0) {
        if (i%2 === 0) {
            continue
        } else {
            myArray.push(i)
        }
    //}
}


console.log(myArray)