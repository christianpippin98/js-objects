// console.log("we're learning about objects")

// const car = {
//     make: "ford",
//     model: "mustang",
//     color: "red",
//     year: "2015"
// }

// let names = [ "kippers", "jack", "gypsy", "angus", "seymour bouts", "sharky" ]

// const amy = {
//     relation: "mother",
//     age: "40",
//     gender: "female"
// }

// const joey = {
//     relation: "father",
//     age: "42",
//     gender: "male"
// }

// const joanna = {
//     relation: "sister",
//     age: "19",
//     gender: "female"
// }

// const brant = {
//     relation: "brother",
//     age: "17",
//     gender: "male"
// }

// let familyMembers = [ amy, joey, joanna, brant ]

// console.log(car)
// console.log(names)
// console.log(familyMembers)
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(
    wardrobe.height, 
    wardrobe.manufacturer, 
    wardrobe.contents[0],
    wardrobe.depth, 
    wardrobe.width
)

wardrobe.material = "cedar"

console.log(wardrobe)