// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe ('diviThree',() => { //this is the function that I would like to test
    it ('takes an object as an argument and decides if the number inside it is evenly divisible by three or not.', () => { // describes what the function is supposed to do
        expect (diviThree(object1)).toEqual("15 is divisible by three") // my expected outcome for each variable.
        expect (diviThree(object2)).toEqual("0 is divisible by three")
        expect (diviThree(object3)).toEqual("-7 is not divisible by three")
    })
})

const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.
// // Pseudo code: in remarks next to code.
const diviThree = (object) => { // make a funtion that that has a parameter to hold the place of each object (object1, object2, and object3)
    const num = object.number // create a variable to invoke the key for each object (15, 0, and -7)
        if(num % 3 === 0){ // wrote a condiotional statement to see if the key for each object would be evenly divisible by 3
            return `${num} is divisible by three` // return a string that logs each object is divisible by 3
        } else  {
            return `${num} is not divisible by three` // return a string that logs the number is not divisible by 3
        }
}
console.log(diviThree(object1))//output : 15 is divisble by 3
console.log(diviThree(object2))// output: 0 is divisble by 3
console.log(diviThree(object3))// output: -7 is not divisble by 3

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe ('capitalizedWords', () => { // describe what function i am testing
    it ('takes in an array of words and returns an array with all the words capitalized.', () => { // describe what the function is supposed to do
        expect (capitalizedWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) // what the expected output of the function will be
        expect (capitalizedWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
// Pseudo code: in remarks next to code block
const capitalizedWords = (array) => { //create a function that takes in both arrays (randomNoun1, randomNoun2) as the parameter.
    return array.map(string => { // return a higher order function that will iterate through each array and change the strings in the array.
      return string[0].toUpperCase() + string.slice(1) // returns the arrays and changes the values in each array. first the first letter of each string is being capatilized because i am calling the first letter at index 0 with string[0]then uppercasing that letter. then i need to concatanate the rest of the word in the string by adding the word without the first letter, hence why i used .slice to remove the first letter of the string.
    })
}
console.log(capitalizedWords(randomNouns1))

console.log(capitalizedWords(randomNouns2))

// On both tests i get a pass and a fail. im unsure what the fail is for? i ran each of the funstions and they both output the correct answer. here is the error code:
// Test suite failed to run

//     Your test suite must contain at least one test.

//       at onResult (node_modules/@jest/core/build/TestScheduler.js:133:18)
//       at node_modules/@jest/core/build/TestScheduler.js:254:19
//       at node_modules/emittery/index.js:363:13
//           at Array.map (<anonymous>)
//       at Emittery.emit (node_modules/emittery/index.js:361:23)

// Am i running a test on a seperate file or something?? this doesnt make sense to me