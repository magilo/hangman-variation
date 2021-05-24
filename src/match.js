import { gameState } from './ufoGame.js'

const matchData = {
  allWords: [],
  matches: new Set(),

  // findMatches: function findMatches(word) {
  //   //find words of same length in dictionary
  //   //run when codeword is first selected
  //   let matchLen = new Set()
  //   matchData.allWords.forEach(function (value) {
  //     if (value.length === word.length) {
  //       matchLen.add(value.toUpperCase())
  //     }
  //   })
  //   matchData.matches = matchLen
  // },

  // filterMatches: function filterMatches(wordSet, letter) {
  //   //for every new correct guess, filter the words with matching letter at same idx
  //   let idxSet = gameState.letterCount[letter]
  //   let filtered = new Set()
  //   for (let word of wordSet) {
  //     let idxMatch = true
  //     for (let idx of idxSet) {
  //       if (!(word[idx] === letter)) idxMatch = false
  //       break
  //     }
  //     if (idxMatch === true) {
  //       filtered.add(word)
  //     }
  //   }
  //   matchData.matches = filtered
  // },

  clearMatches: function clearMatches() {
    matchData.allWords = []
    matchData.matches = new Set()
  }
}

export default matchData
