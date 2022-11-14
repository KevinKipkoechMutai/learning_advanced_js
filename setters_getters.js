// class Book {
//     constructor(author) {
//         this._author = author
//     }

//     //getter
//     get writer() {
//         return this._author
//     }

//     //setter
//     set writer(updatedAuthor) {
//         this._author = updatedAuthor
//     }
// }

// const novel = new Book('anonymous')
// console.log(novel.writer)
// novel.writer = "newAuthor"
// console.log(novel.writer)

class Thermostat {
    constructor(fahrenheit) {
        this._tempInCelsius = 5/9 * (fahrenheit - 32)
    }

    get temperature() {
        return this._tempInCelsius
    }

    set temperature(newTemp) {
        this._tempInCelsius = newTemp
    }
}