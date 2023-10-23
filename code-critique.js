// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
// def first_vowel_index(s):
// vowels = "AEIOUaeiou"
// for index, char in enumerate(s):
//     if char in vowels:
//         return index
// return None

// # Test the function
// s = input("Enter a string: ")
// index = first_vowel_index(s)
// if index is not None:
// print(f"The index of the first vowel in '{s}' is: {index}")
// else:
// print(f"There's no vowel in '{s}'")

// Critique the code output. 
// First and foremost, the code is written in python. not sure how the syntax is suppose to look for python but i assume its done correctly. 
// looks like the function declaration for python is def instead of var, const, or let
// the conditionals are written simarally to javascript as far as the for, if, and return go
// I like that the code is indented well and easy to read
// Unsure if best practices are being used but it seems like chat GPT likes to take the shortcuts in code when possible
// I would have used javascript to write the code. my function. the function would take in a string and make a variable for vowels that equals "AEIOUaeiou". the return would be strictly equalto to the indexOf[0]
const vowels = "Danny De La Rosa" // copying the variable chat GPT made here

const firstVowel = (value) => {
    let result = []
    for (let i=0; i=value.length; i++){
      result.push(value.indexOf() === "AEIOUaeiou")  
        }
    }
console.log(firstVowel(vowels))
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 