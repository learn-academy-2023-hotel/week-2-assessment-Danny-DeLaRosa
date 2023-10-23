// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: [H, o, t, e, l, , 2, 0, 2, 3]
// b) Verify and explain: the output was [ 'Hotel', '2023' ]. i split too far in my head, i thought space was going to space out each letter in the array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student
// b) Verify and explain: outout is undefined. this is because the function is missing a return statement which i missed when looking at the code

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// b) Verify and explain: the output is [ 11, 13, 15 ], I honestly dont understand why functions work the way they do. why does this work if the console.log is not invoking the parameter in next to the variable?? i thought it would just return what is says in onlyOdds.
// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])
// a) Your answer: JavaScript
// b) Verify and explain: the output is JavaScipt because the console log is calling the object myCodingSkills and invoking the first value of the key languages which is JavaScript

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George Hotel 2023
// b) Verify and explain: out put was Learn { student: 'George', cohort: 'Hotel', year: 2023 } which is the new object after creating a new class with the constructor name to be george.
