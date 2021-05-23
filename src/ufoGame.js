import * as fs from 'fs';
import readlineSync from 'readline-sync'
import messages from './messages.js'
// import resetState from './resetState.js'
import { ufo } from './ufo.js'

export const gameState = {
  letterCount: {},
  uniqueCount: 0,
  correctGuesses: new Set(),
  incorrectGuesses: new Set(),
  correctCount: 0,
  placeholder: [],
  codeword: "",
  abduction: 0
}


const ufoGame = {
  getRandomWord: function getRandomWord() {
    const data = fs.readFileSync(new URL('./nouns.txt', import.meta.url), { encoding: 'utf8', flag: 'r' })
    const lines = data.split("\n")
    let random = Math.floor(Math.random() * lines.length)
    let randomWord = lines[random]
    return randomWord.toUpperCase()
  },

  formatWord: function formatWord(randomWord) {
    //apple => ["_", "_", "_", "_", "_"]
    let placeholder = "_".repeat(randomWord.length).split("")
    return placeholder
  },

  letterCounter: function letterCounter(word) {
    //get frequency of letter, stores index
    //stores count of unique letters
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
  },

  getInputLetter: function getInputLetter() {
    const regex = /^[a-zA-Z]+$/
    let inputLetter = readlineSync.question("Please enter your guess: ", {
      limit: [function (input) {
        return input.length === 1 && input.match(regex)
      }],
      limitMessage: messages.invalid
    })
    console.log("\n")
    inputLetter = inputLetter.toUpperCase()
    return inputLetter
  },

  guessRight: function guessRight(inputLetter) {
    gameState.correctGuesses.add(inputLetter)
    gameState.correctCount += 1;

    gameState.letterCount[inputLetter].forEach(function (value) {
      let placeholder = gameState.placeholder;
      placeholder[value] = inputLetter;
    });

    return [gameState.correctGuesses, gameState.correctCount]
  },

  guessWrong: function guessWrong(inputLetter) {
    gameState.incorrectGuesses.add(inputLetter)
    gameState.abduction += 1

    return [gameState.incorrectGuesses, gameState.abduction]
  },

  setupGame: function setupGame() {
    ufoGame.clearState()

    let randomWord = ufoGame.getRandomWord()

    let blanks = ufoGame.formatWord(randomWord)
    let wordData = ufoGame.letterCounter(randomWord)

    gameState.letterCount = wordData[0]
    gameState.uniqueCount = wordData[1]
    gameState.placeholder = blanks
    gameState.codeword = randomWord
    //console.log('setupGame new', gameState)
    return gameState

  },
  displayGuesses: function displayGuesses(guessSet) {
    const guessArray = Array.from(guessSet)
    return guessArray.join(" ")
  },

  playerStatus: function playerStatus() {
    console.log(ufo[gameState.abduction])
    console.log("Incorrect Guesses:")
    if (gameState.incorrectGuesses.size > 0) {
      console.log(ufoGame.displayGuesses(gameState.incorrectGuesses), "\n")
    } else {
      console.log("None", "\n")
    }

    console.log("Codeword:")
    console.log(ufoGame.displayGuesses(gameState.placeholder), "\n")
  },

  clearState: function clearState() {
    //refactor later to be object instance
    gameState.letterCount = {}
    gameState.uniqueCount = 0
    gameState.correctGuesses = new Set()
    gameState.incorrectGuesses = new Set()
    gameState.correctCount = 0
    gameState.placeholder = []
    gameState.codeword = ""
    gameState.abduction = 0
  }
}


export default ufoGame
