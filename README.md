# React Hangman Game
App was created with Create React App.
## How to install

 1. Download and unzip the file to a directory of your choosing.

 2. Go into the newly unzipped folder and maker sure you are exactly in the "hangman" folder. 
    Right click on the file "package-lock.json", go to "Properties" and copy the full "Location:" of the file.

 3. Open the command prompt ("windows button + r" and type "cmd").

 4. Type the letters "cd " in the cmd followed by a space as in the inverted commas.

 5. Right after that paste the file location on the same line and press enter.

 6. Then Type following and press enter:
 ### ` npm install `

8. The array of word's needs to be install as well.
    Type the following in to the cmd and press enter.
### `npm install an-array-of-english-words`

Link to the source [an-array-of-english-words](https://github.com/words/an-array-of-english-words).

7. Onces that is done type the following and press enter:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Game Play:

A random word is generated and the player can guess what it is one letter at a time by clicking on a letter of the alphabet.

The number of dashes are equivalent to the number of letters in the word.

If the player clicks on a letter that occurs in the word, the dash/es are filled in with that letter in the right places.

If the word does not contain the suggested letter, one element of a
hangman's gallows is drawn for every incorrect guess.

The number of incorrect guesses before the game ends is 10.

The game is won buy guessing all the correct letters of the
generated word before running out of guesses.

Objective:
Guess the word/phrase before your man gets hung!
