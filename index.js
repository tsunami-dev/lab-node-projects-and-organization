const wordsArr = require("./words.json")

const allWords = words => words
console.log(allWords(wordsArr))

const firstTenWords = words => words.slice(0, 10)
console.log(firstTenWords(wordsArr))

const nextTenWords = words => words.slice(10, 20)
console.log(nextTenWords(wordsArr))

const firstXWords = (words, x) => words.slice(0, x)
console.log(firstXWords(wordsArr, 10))


const subsetOfWords = (words, x, y) => words.slice(x, y)
console.log(subsetOfWords(wordsArr, 3, 45))


const sortWords = words => words.sort()
console.log(sortWords(wordsArr))

const wordsWithQ = words => words.filter(word => word.includes("q"))
console.log(wordsWithQ(wordsArr))


const userLetters = process.argv[2]

const findWordsWithLetter = (words, letter) => words.filter(word => word.includes(letter))

const wordsWithLetter = findWordsWithLetter(wordsArr, userLetters)
console.log(`Words with the letter '${userLetters}': ${wordsWithLetter}`)
