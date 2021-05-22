// import { playUFO, letterCounter, guessRight, guessWrong, gameState } from '../src/app'
// import { jest } from '@jest/globals';
// import readlineSync from 'readline-sync'
// //import { readFileSync } from 'fs';
// import * as fs from 'fs';

// jest.mock('readline-sync')
// //jest.mock('fs')
// fs.readFileSync = jest.fn()



// console.log('gameState', gameState)

// describe("Guess right function", () => {
//   const mockExpected = "mock value"
//   jest.mock("../src/app", () => ({
//     playUFO: jest.fn(),
//     guessRight: jest.fn(() => mockExpected)
//   }))
//   test("should increase correctCount by 1", () => {
//     console.log('readfile', fs.readFileSync)
//     let codeword = fs.readFileSync.mockResolvedValue('codecademy')
//     //console.log('readLineSync', readlineSync)
//     let inputLetter = readlineSync.mockResolvedValue('z')
//     console.log('mocked', codeword, inputLetter)
//     const actual = guessRight(inputLetter)
//     expect(actual).toEqual(mockExpected)

//   })
// })
// // import guess from '../src/guess'
// // import { letterCounter } from '../src/app'

// // describe("Guess function", () => {

// //   test("input should be a single letter", () => {
// //     const input = 'z'
// //     const output = true

// //     let wordData = letterCounter("CODECADEMY")

// //     const testState = {
// //       letterCount: wordData[0],
// //       uniqueCount: wordData[1],
// //       correctGuesses: new Set(),
// //       incorrectGuesses: new Set(),
// //       correctCount: 0,
// //       placeholder: "_ _ _ _ _ _ _ _ _ _",
// //       codeword: "CODECADEMY",
// //       abduction: 0
// //     }

// //     expect(guess(input, testState)).toEqual(
// //       expect.stringMatching(/^[a-zA-Z]+$/)
// //     )
// //   })
// // })

// // import { jest } from '@jest/globals';
// // //import playUFO from '../src/app'
// // import { letterCounter, guess } from '../src/app'
// // //import guess from '../src/guess'




// // describe("Guess function", () => {
// //   //const mockGuess = jest.fn()
// //   //const codeword = "CODECADEMY"
// //   let wordData = letterCounter("CODECADEMY")
// //   const gameState = {
// //     letterCount: wordData[0],
// //     uniqueCount: wordData[1],
// //     correctGuesses: new Set(),
// //     incorrectGuesses: new Set(),
// //     correctCount: 0,
// //     placeholder: "_ _ _ _ _ _ _ _ _ _",
// //     codeword: "CODECADEMY",
// //     abduction: 0
// //   }



// //   test("incorrect guess should increase abduction counter", () => {
// //     const input = "z"
// //     //gameState.incorrectGuesses.add("z")
// //     gameState.abduction += 1
// //     const output = 1

// //     expect(gameState.abduction).toEqual(output)
// //   })
// // })

// // /*
// // test("input should be a single letter and object", () => {
// //     expect(mockGuess).toHaveBeenCalled()
// //     expect(mockGuess).toBeCalledWith(
// //       expect.stringMatching(/^[a-zA-Z]+$/),
// //       expect.any(Object)
// //     )
// //     expect(mockGuess).toBeCalledWith(
// //       expect.toHaveLength(1),
// //       expect.any(Object)
// //     )
// //   })
// // */
