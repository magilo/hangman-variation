//console.log("inside app.js")

import ufoGame, { gameState, messages } from './ufoGame.js'

function playGame() {
  ufoGame.setupGame()

  while (gameState.abduction < 6) {
    console.log(gameState)
    let inputLetter = ufoGame.getInputLetter()

    if ((gameState.incorrectGuesses.has(inputLetter)) || (gameState.correctGuesses.has(inputLetter))) {
      // console.log(gameState.incorrectGuesses)
      // console.log(gameState.correctGuesses)
      // console.log('what is input', inputLetter)
      console.log(messages.once) //already guessed
    } else if (!(inputLetter in gameState.letterCount)) {
      //if not a letter in codeword
      ufoGame.guessWrong(inputLetter)
      if (gameState.abduction === 6) {
        console.log(messages.lose)
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
