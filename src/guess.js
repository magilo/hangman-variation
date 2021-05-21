function guess(inputLetter, gameState) {
  if (!(inputLetter in gameState.letterCount)) {
    if (!(gameState.incorrectGuesses.has(inputLetter))) {
      gameState.abduction += 1
      gameState.incorrectGuesses.add(inputLetter)
      if (gameState.abduction === 6) {
        return "you lose"
      }
    } else {
      console.log('already guessed', gameState.incorrectGuesses)
    }
  } else {
    //a correct gues
    if (!(gameState.correctGuesses.has(inputLetter))) {
      gameState.correctGuesses.add(inputLetter)
      gameState.correctCount += 1
      if (gameState.correctCount === gameState.uniqueCount) {
        return "you win"
        //console.log('you win')
        //break
      }
    } else {
      console.log('already guessed', gameState.correctGuesses)
    }
  }
  return gameState
}

export default guess
