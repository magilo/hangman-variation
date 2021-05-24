// import { ufo } from './ufo.js'
// //import guess from './guess.js'
// import readlineSync from 'readline-sync'
// import { readFileSync } from 'fs';


// /* generate a random word */
// function getRandomWord() {
//   // const data = fs.readFileSync(new URL('./nouns.txt'), { encoding: 'utf8', flag: 'r' })
//   const data = readFileSync(new URL('./nouns.txt', import.meta.url), { encoding: 'utf8', flag: 'r' })
//   const lines = data.split("\n")
//   let random = Math.floor(Math.random() * lines.length)
//   let randomWord = lines[random]
//   return randomWord
// }

// /* creates a blank placeholder */
// function formatWord(randomWord) {
//   //apple => "_ _ _ _ _"
//   //to access underscore is index*2
//   let placeholder = "_".repeat(randomWord.length).split("").join(" ")
//   return placeholder
// }

// /* parse word and stores letters with their index and frequency */
// function letterCounter(word) {
//   const count = {}
//   let unique = 0
//   for (let i = 0; i < word.length; i++) {
//     if (!(word[i] in count)) {
//       count[word[i]] = new Set()
//       count[word[i]].add(i)
//       unique += 1
//     } else {
//       count[word[i]].add(i)
//     }
//   }
//   return [count, unique]
// }

// const gameState = {
//   letterCount: {},
//   uniqueCount: 0,
//   correctGuesses: new Set(),
//   incorrectGuesses: new Set(),
//   correctCount: 0,
//   placeholder: "",
//   codeword: "",
//   abduction: 0
// }

// const messages = {
//   correct: "Correct! You're closer to cracking the codeword.",
//   incorrect: "Incorrect! The tractor beam pulls the person in further.",
//   win: "Correct! You saved the person and earned a medal of honor!",
//   lose: "Sorry, the person has been abducted.",
//   invalid: "I cannot understand your input. Please guess a single letter.",
//   once: "You can only guess that letter once, please try again.",
//   wordIs: "The codeword is: "
// }

// function guessRight(inputLetter) {
//   gameState.correctGuesses.add(inputLetter)
//   gameState.correctCount += 1
//   return [gameState.correctGuesses, gameState.correctCount]
// }

// function guessWrong(inputLetter) {
//   gameState.incorrectGuesses.add(inputLetter)
//   gameState.abduction += 1
//   return [gameState.incorrectGuesses, gameState.abduction]
// }

// function playUFO() {

//   let randomWord = getRandomWord()

//   let blanks = formatWord(randomWord)
//   let wordData = letterCounter(randomWord)

//   gameState.letterCount = wordData[0]
//   gameState.uniqueCount = wordData[1]
//   gameState.placeholder = blanks
//   gameState.codeword = randomWord

//   //let letterCount = wordData[0]
//   //let unique = wordData[1]
//   //console.log(randomWord, blanks, letterCount, unique)

//   /*
//   const gameState = {
//     correctGuesses: new Set(),
//     incorrectGuesses: new Set(),
//     correctCount: 0,
//     placeholder: blanks,
//     codeword: randomWord,
//     abduction: 0
//   } */


//   // const gameState = {
//   //   letterCount: wordData[0],
//   //   uniqueCount: wordData[1],
//   //   correctGuesses: new Set(),
//   //   incorrectGuesses: new Set(),
//   //   correctCount: 0,
//   //   placeholder: blanks,
//   //   codeword: randomWord,
//   //   abduction: 0
//   // }


//   while (gameState.abduction < 6) {
//     console.log(gameState)
//     let inputLetter = readlineSync.question("Please enter your guess: ")
//     //check if input letter is single char a-z, A-Z
//     const regex = /^[a-zA-Z]+$/
//     // if (inputLetter.length === 1 && inputLetter.match(regex)){
//     //   inputLetter = inputLetter.toLowerCase()
//     // } else {
//     //   //throw error message
//     // }
//     inputLetter = inputLetter.toLowerCase()
//     console.log(inputLetter)

//     if ((gameState.incorrectGuesses.has(inputLetter)) || (gameState.correctGuesses.has(inputLetter))) {
//       console.log(messages.once) //already guessed
//     } else if (!(inputLetter in gameState.letterCount)) {
//       //if not a letter in codeword
//       guessWrong(inputLetter)
//       if (gameState.abduction === 6) {
//         console.log(messages.lose)
//         return "you lose"
//       }
//     } else if (!(gameState.correctGuesses.has(inputLetter))) {
//       //if is a letter in codeword
//       guessRight(inputLetter)
//       if (gameState.correctCount === gameState.uniqueCount) {
//         console.log(messages.win)
//         console.log(messages.wordIs + gameState.codeword.toUpperCase())
//         return "you win"
//       }
//     }



//     // let result = guess(inputLetter, gameState)
//     // if (result === "you win") {
//     //   console.log('win')
//     //   return "you win"
//     // } else if (result === "you lose") {
//     //   console.log('lose')
//     //   return "you lose"
//     // }



//   }



//   //if correctGuesses.length === unique
//   //end game
// }

// playUFO()


// // var userName = readlineSync.question("Enter your name: ")
// // console.log("Welcome " + userName + "!")
// // console.log(userName + "!")
// //console.log(ufo[0])

// export { playUFO, letterCounter, guessRight, guessWrong, gameState }
