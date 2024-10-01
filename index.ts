/*
* This program is a dice game.
*
* @author  Ian Beddie
* @version 1.0
* @since   2024-09-30
*/

import { createPrompt } from 'bun-promptx'

//  declare variables
const whilePlaceHolder = 1
let loopCounter = 1
let correctNumber = 0
let userGuess = 0

correctNumber = Math.floor(Math.random() * 6) + 1

while (whilePlaceHolder === 1) {
  const userGuessString = createPrompt('Guess a number between 1 and 6:')
  if (isNaN(parseInt(userGuessString.value))) {
    console.log('You did not enter a number.')
  } else {
    userGuess = parseInt(userGuessString.value)
    if (userGuess === correctNumber) {
      console.log('You win!!')
      console.log(`It took you ${loopCounter} guesses. `)
      break
    } else if (userGuess < 1 || userGuess > 6) {
      console.log('you did not guess within range')
      loopCounter++
    } else if (userGuess < correctNumber) {
      console.log('You guessed too low, try again.')
      loopCounter++
    } else if (userGuess > correctNumber) {
      console.log('You guessed too high, try again.')
      loopCounter++
    }
  }
}

console.log('\nDone.')
