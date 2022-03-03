import { wordSelector } from "./words";
import React, { Component } from "react";
import HangmanDisplay from "./hangman_display";
// Images imported from the index.js file
import {
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
  image_8,
  image_9,
  image_10,
  image_11,
} from "./index";

// Class collects and generates all the components to be passed into the HangmanDisplay component.
class HangmanApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Stores and calls the random word generator function
      word: wordSelector(),
      // Stores number of attempts user has had
      incorrectAttempts: 0,
      //Set Constructor to individually store user's input.
      usersInput: new Set(),
      //Store Max number of attempts user will have.
      maxAttempts: 10,
      // Store all the images for the "Hangman" illustration
      images: [
        image_1,
        image_2,
        image_3,
        image_4,
        image_5,
        image_6,
        image_7,
        image_8,
        image_9,
        image_10,
        image_11,
      ],
    };
    // Binds for eventHandler and the newGame function for when the user clicks on the button on the Hangman Display component
    this.eventHandler = this.eventHandler.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  // Handles user input on the keyboard
  eventHandler(e) {
    let inputLetter = e.target.value;

    this.setState((thiss) => ({
      // User's input is added to usersInput Set.
      usersInput: thiss.usersInput.add(inputLetter),
      // If the input is not equal to a letter of the generated words the incorrectAttempts is increased.
      incorrectAttempts:
        thiss.incorrectAttempts + (thiss.word.includes(inputLetter) ? 0 : 1),
    }));
  }

  // Functions takes generated word and compares it to the user's input
  underScoreOrLetter() {
    // Generated word is stored
    let userInputVsWord = this.state.word
      // The word is then split in to letters. Those letters are then mapped and compared to the userInput Set.
      //If the two letters match then the letter is returned else a dash is returned.
      .split("")
      .map((letter) => (this.state.usersInput.has(letter) ? letter : " _ "));
    return userInputVsWord;
  }

  // Game is reset by setting the states of the variables to a default.
  newGame() {
    this.setState({
      word: wordSelector(),
      incorrectAttempts: 0,
      usersInput: new Set(),
    });
  }
  render() {
    return (
      <>
        {/* HangmanDisplay component is called  */}
        <HangmanDisplay
          images={this.state.images[this.state.incorrectAttempts]}
          incorrectAttempts={this.state.incorrectAttempts}
          maxAttempts={this.state.maxAttempts}
          word={this.state.word}
          eventHandler={this.eventHandler}
          underScoreOrLetter={this.underScoreOrLetter()}
          newGame={this.newGame}
        />
      </>
    );
  }
}

export default HangmanApp;
