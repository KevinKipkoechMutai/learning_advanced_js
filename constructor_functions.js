// //explicit constructors
// class SpaceShuttle {
//     constructor(targetPlanet) {
//         this.targetPlanet = targetPlanet
//     }
//     takeOff() {
//         console.log("To " + this.targetPlanet + "!")
//     }
// }

// //implicit constructors
// class Rocket {
//     launch() {
//         console.log("To the moon!")
//     }
// }

// const zeus = new SpaceShuttle("Jupiter")
// zeus.takeOff()

// const atlas = new Rocket()
// atlas.launch()

class Vegetable {
    constructor(name) {
        this.name = name
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'