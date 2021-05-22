import fs from 'fs';
import readlineSync from 'readline-sync'
import ufoGame from '../src/ufoGame'
import { jest } from '@jest/globals';

// auto-mock fs & readline-sync
jest.mock('fs');
jest.mock('readline-sync', () => jest.fn());
readlineSync.question = jest.fn(() => 'mock')

//spys
const readFileSyncSPY = jest.spyOn(fs, 'readFileSync').mockImplementation(() => "CODECADEMY");
const getRandomWordSPY = jest.spyOn(ufoGame, 'getRandomWord').mockImplementation(() => "CODECADEMY");
const getInputLetterSPY = jest.spyOn(ufoGame, 'getInputLetter').mockImplementation(() => "z");


describe('verify mock setup', () => {

  let readFile = fs.readFileSync()
  let randomWord = ufoGame.getRandomWord()
  let input = ufoGame.getInputLetter()
  let readLine = readlineSync.question()

  test('readFileSync mock was called', () => {
    expect(readFileSyncSPY).toHaveBeenCalled()
    expect(readFile).toEqual("CODECADEMY")
  });

  test('getRandomWord mock was called', () => {
    expect(getRandomWordSPY).toHaveBeenCalled()
    expect(randomWord).toEqual("CODECADEMY")
  })

  test('input letter mock was called', () => {
    expect(getInputLetterSPY).toHaveBeenCalled()
    expect(input).toEqual("z")
  })

  test("readlinesync mock was called", () => {
    expect(readlineSync.question).toHaveBeenCalled()
    expect(readLine).toEqual("mock")
  })

});

describe("guessRight function", () => {
  const cGuesses = new Set()
  const newLetter = "c"
  const correctGuesses = cGuesses.add("C")
  const correctCount = 1

  const guessRightOutput = ufoGame.guessRight(newLetter)

  test("should add letter to correctGuesses set", () => {
    expect(guessRightOutput[0]).toEqual(correctGuesses)
  })

  test("should increase correctCount by 1", () => {
    expect(guessRightOutput[1]).toEqual(correctCount)
  })
})

describe("guessWrong function", () => {
  const iGuesses = new Set()
  const newLetter = "x"
  const incorrectGuesses = iGuesses.add("X")
  const abduction = 1

  const guessWrongOutput = ufoGame.guessWrong(newLetter)

  test("should add letter to incorrectGuesses set", () => {
    expect(guessWrongOutput[0]).toEqual(incorrectGuesses)
  })

  test("should increase abduction by 1", () => {
    expect(guessWrongOutput[1]).toEqual(abduction)
  })
})
