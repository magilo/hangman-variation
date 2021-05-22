//console.log("inside app.js")
import { ufo } from './ufo.js'
import ufoGame, { gameState, messages } from './ufoGame.js'

function playerStatus() {
  console.log(ufo[gameState.abduction])
  console.log("Incorrect Guesses:")
  if (gameState.incorrectGuesses.size > 0) {
    console.log(ufoGame.displayGuesses(gameState.incorrectGuesses), "\n")
  } else {
    console.log("None", "\n")
  }

  console.log("Codeword:")
  console.log(ufoGame.displayGuesses(gameState.placeholder), "\n")
}

function playGame() {
  console.log("UFO: The Game")
  console.log("Instructions: save us from alien abduction by guessing letters in the codeword. You have six tries.")

  ufoGame.setupGame()

  while (gameState.abduction < 6) {
    console.log(gameState)
    playerStatus()

    let inputLetter = ufoGame.getInputLetter()


    if ((gameState.incorrectGuesses.has(inputLetter)) || (gameState.correctGuesses.has(inputLetter))) {
      console.log(messages.once) //already guessed
    } else if (!(inputLetter in gameState.letterCount)) {
      //if not a letter in codeword
      ufoGame.guessWrong(inputLetter)
      if (gameState.abduction === 6) {
        console.log(messages.lose)
        //console.log(ufo[6])
        return "you lose"
      }
    } else if (!(gameState.correctGuesses.has(inputLetter))) {
      //if is a letter in codeword
      ufoGame.guessRight(inputLetter)
      if (gameState.correctCount === gameState.uniqueCount) {
        console.log(messages.win)
        console.log(messages.wordIs + gameState.codeword.toUpperCase())
        return "you win"
      }
    }
  }
}

playGame()
