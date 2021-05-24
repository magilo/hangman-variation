import { ufo } from './ufo.js'
import ufoGame, { gameState, matchData } from './ufoGame.js'
import messages from './messages.js'
import readlineSync from 'readline-sync'


function playGame() {
  console.log("UFO: The Game")
  console.log("Instructions: save us from alien abduction by guessing letters in the codeword. You have six tries.")

  ufoGame.setupGame()

  while (gameState.abduction < 6) {
    ufoGame.playerStatus()

    let inputLetter = ufoGame.getInputLetter()

    if ((gameState.incorrectGuesses.has(inputLetter)) || (gameState.correctGuesses.has(inputLetter))) {
      console.log(messages.once) //already guessed

    } else if (!(inputLetter in gameState.letterCount)) {
      //if not a letter in codeword
      ufoGame.guessWrong(inputLetter)
      if (gameState.abduction === 6) {
        console.log(messages.lose)
        console.log(ufo[6])
        return "done"
      } else {
        console.log(messages.incorrect)
      }

    } else if (!(gameState.correctGuesses.has(inputLetter))) {
      //if is a letter in codeword
      ufoGame.guessRight(inputLetter)
      matchData.filterMatches(matchData.matches, inputLetter)
      if (gameState.correctCount === gameState.uniqueCount) {
        console.log(messages.win)
        console.log(messages.wordIs + gameState.codeword)
        return "done"
      } else {
        console.log(messages.correct)
      }
    }

  }
}


function startGame() {
  let replay = true
  while (replay) {
    playGame()
    replay = readlineSync.keyInYNStrict("Would you like to play again? ")
    console.log("\n")
  }

  console.log("Goodbye!")
}

startGame()
