//replacing loops with recursion

// function multiply(arr, n) {
//     let product = 1;
//     for (let i = 0; i < n; i += 1) {
//         product *= arr[i];
//     }
//     return product
// }

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n-1) * arr[n-1];
    }
}

console.log(multiply([1,2,3], 3))