function rangeOfNumbers(startNum, endNum) {
    if (endNum === startNum) {
        return [startNum]
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1)
        numbers.push(endNum)
        return numbers
    }
    
}

console.log(rangeOfNumbers(2, 10))