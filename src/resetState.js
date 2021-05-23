let cGuesses = new Set()
let iGuesses = new Set()
const resetState = {
  letterCount: {},
  uniqueCount: 0,
  correctGuesses: cGuesses,
  incorrectGuesses: iGuesses,
  correctCount: 0,
  placeholder: [],
  codeword: "",
  abduction: 0
}

export default resetState
