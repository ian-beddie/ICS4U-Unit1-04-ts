/*
* This program is a dice game.
*
* @author  Ian Beddie
* @version 1.0
* @since   2024-09-30
*/

import { createPrompt } from 'bun-promptx'
import random from 'random'

//declare variables
let loopCounter = 1
let correctNumber = 0
let userGuess = 0

correctNumber = random.int((min = 1), (max = 6))

while (1 == 1) {
  userGuessString = createPrompt('Guess a number between 1 and 6:')
if (isNaN(parseINT(userGuessString))) {
  console.log('You did not enter a number.')
} else {
  userGuess = parseINT(userGuessString)
if (userGuess == correctNumber) {
  console.log('You win!!')
  console.log(`It took you ${loopCounter} guesses. `)
break;
} else if (userGuess < 1 || userGuess >6) {
  console.log('you did not guess within range')
  loopCounter++
} else if (userGuess < correctNumber) {
  print("You guessed too low, try again.")
  loopCounter++
} else if (userGuess > correctNumber) {
  print("You guessed too high, try again.")
  loopCounter++
}
}
}
console.log('\nDone.')
