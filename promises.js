const myPromise = new Promise((resolve, reject) => {
    if (responseToPromise) {
        resolve("Fulfilled")
        .then(data => console.log(data))
    } else {
        reject("Rejected")
        .catch(err => console.log(err))
    }
})