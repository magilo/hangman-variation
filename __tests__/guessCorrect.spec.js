describe("correct guess function", () => {
  const codeword = "CODECADEMY"

  test("letter should replace blank placeholders in codeword (CODECADEMY) if it exists", () => {
    const input = 'c'

    const output = {
      placeholder: "C _ _ _ C _ _ _ _ _",
      message: "Correct! You're closer to cracking the codeword."
    }

    expect(correctGuess(input, codeword)).toEqual(output)
  })
})

/*

 test("input should be a single letter", () => {

    expect(correctGuess("")).
  })

})


  test("letters already guessed correctly should notify user to try again", () => {
    const input = 'c'

    const output = {
      placeholder: "C _ _ _ C _ _ _ _ _",
      message: "You can only guess that letter once, please try again."
    }
  })

  test("correct guesses should not change UFO status", () => {

  })
*/
