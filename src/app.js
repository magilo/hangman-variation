import { ufo } from './ufo.js'
import readlineSync from 'readline-sync'
import * as fs from 'fs';

/* creates a blank placeholder */
function formatWord(randomWord) {
  //apple => "_ _ _ _ _"
  //to access underscore is index*2

  let placeholder = "_".repeat(randomWord.length).split("").join(" ")
  return placeholder
}

/* generate a random word */
function getRandomWord() {
  const data = fs.readFileSync('./nouns.txt', { encoding: 'utf8', flag: 'r' })
  const lines = data.split("\n")
  let random = Math.floor(Math.random() * lines.length)
  let randomWord = lines[random]
  return randomWord
}

/* stores letters with their index and frequency */
function letterCounter(word) {
  const count = {}
  let unique = 0
  for (let i = 0; i < word.length; i++) {
    if (!(word[i] in count)) {
      count[word[i]] = new Set()
      count[word[i]].add(i)
      unique += 1
    } else {
      count[word[i]].add(i)
    }
  }
  return [count, unique]
}

function playUFO() {
  console.log('hello')
  let randomWord = getRandomWord()

  let blanks = formatWord(randomWord)
  let wordData = letterCounter(randomWord)
  let letterCount = wordData[0]
  let unique = wordData[1]
  //console.log(randomWord, blanks, letterCount, unique)

  const gameState = {
    correctGuesses: new Set(),
    incorrectGuesses: new Set(),
    correctCount: 0,
    placeholder: blanks,
    codeword: randomWord,
    abduction: 0
  }

  while (gameState.abduction < 6) {
    console.log(gameState)
    let inputLetter = readlineSync.question("Please enter your guess: ")
    //check if input letter is single char a-z, A-Z
    inputLetter = inputLetter.toLowerCase()
    console.log(inputLetter)

    if (!(inputLetter in letterCount)) {
      if (!(gameState.incorrectGuesses.has(inputLetter))) {
        gameState.abduction += 1
        gameState.incorrectGuesses.add(inputLetter)
      } else {
        console.log('already guessed', gameState.incorrectGuesses)
      }
    } else {
      //a correct gues
      if (!(gameState.correctGuesses.has(inputLetter))) {
        gameState.correctGuesses.add(inputLetter)
        gameState.correctCount += 1
        if (gameState.correctCount === unique) {
          console.log('you win')
          break
        }
      } else {
        console.log('already guessed', gameState.correctGuesses)
      }
    }
  }


  //if correctGuesses.length === unique
  //end game
}

playUFO()

// var userName = readlineSync.question("Enter your name: ")
// console.log("Welcome " + userName + "!")
// console.log(userName + "!")
//console.log(ufo[0])


