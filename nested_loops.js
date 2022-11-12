function multiplyAll(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].length; j += 1) {
            product *= arr[i][j]
        }
    }

    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]))