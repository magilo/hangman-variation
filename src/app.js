//console.log("inside app.js")
import { ufo } from './ufo.js'
import ufoGame, { gameState } from './ufoGame.js'
// import ufoGame from './ufoGame.js'
import messages from './messages.js'
import readlineSync from 'readline-sync'


// function playerStatus() {
//   console.log(ufo[gameState.abduction])
//   console.log("Incorrect Guesses:")
//   if (gameState.incorrectGuesses.size > 0) {
//     console.log(ufoGame.displayGuesses(gameState.incorrectGuesses), "\n")
//   } else {
//     console.log("None", "\n")
//   }

//   console.log("Codeword:")
//   console.log(ufoGame.displayGuesses(gameState.placeholder), "\n")
// }

function playGame() {
  console.log("UFO: The Game")
  console.log("Instructions: save us from alien abduction by guessing letters in the codeword. You have six tries.")

  // const gameState = ufoGame.setupGame()
  ufoGame.setupGame()

  while (gameState.abduction < 6) {
    //console.log(gameState)
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

      if (gameState.correctCount === gameState.uniqueCount) {
        console.log(messages.win)
        console.log(messages.wordIs + gameState.codeword.toUpperCase())
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
  }

  console.log("Goodbye!")

  //playGame()

  // let replay = readlineSync.keyInYNStrict("Would you like to play again (Y/N)?", {
  //   limit: ["Y", "N"],
  //   limitMessage: "Enter Y or N only"
  // })

  // let replay = readlineSync.keyInYNStrict("Would you like to play again? ")

  // console.log("replay", replay)
}

startGame()
