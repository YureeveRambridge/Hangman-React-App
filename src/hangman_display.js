//CSS file for this file.
import "./hangman_display.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Keyboard } from "./keyboard";
import React from "react";

// This function displays all the gather components of the Hangman App.
function HangmanDisplay(props) {
  return (
    // Row component is created with colum sub components
    <Row>
      {/* Colum displays the images for the "Hangman" illustration for every wrong attempt*/}
      <Col className="image" class="col-xs-1" align="center">
        {/* props.image is an image from the images Array and index by the incorrect attempt */}
        <img className="img" src={props.images} alt="Incorrect Attempt" />
        <br />
        <br />
        {/* Calculates the number of attempts the user had remaining. */}
        <h4>
          Attempts Remaining: {props.maxAttempts - props.incorrectAttempts}
        </h4>
      </Col>
      {/* Colum displays */}
      <Col className="keyboard" class="col-xs-1" align="center">
        {/* IF statement: Checks whether the users input is equal to the generated word.*/}
        {props.word === props.underScoreOrLetter.join("") ? (
          // If the statement is true the following is displayed:
          <h2>BRILLIANT, "{props.word}" is correct!!</h2>
        ) : // Else if the amount of attempts the user has had is equal to max number of attempts the follow is displayed:
        props.incorrectAttempts === props.maxAttempts ? (
          // The user is told they lost the game and the correct answer is shown.
          <>
            <h2>Sorry, you ran out of Attempts.</h2>
            <br />
            <p className="correctWord">
              <u>The answer was:</u> <br />
              {/* Correct word is shown */}
              <br />"<b>{props.word}</b>".
            </p>
            <br />
          </>
        ) : (
          // ELSE
          <>
            {/* This is were the generated word is displayed as individual letters guessed correctly 
            by the user or incorrectly as dashes. "underScoreOrLetter" function from hangman_app page is ran here */}
            <h2 className="Hangman-word">{props.underScoreOrLetter}</h2>
            <br />
            <br />
            {/* Keyboard component from the keyboard file is called here for the keyboard to be generated.
            Event Handler captures the letter the user clicks on, the "eventHandler" function 
            from hangman_app page is pass in to the Keyboard component.*/}
            <p className="Hangman-btns">
              {<Keyboard eventHandler={props.eventHandler} />}
            </p>
          </>
        )}
        <br />
        <br />
        {/* "newGame" function from the hangman_app file is called to this button in order for the game to be reset */}
        <Button id="reset" onClick={props.newGame}>
          New Game?
        </Button>
      </Col>
    </Row>
  );
}

export default HangmanDisplay;
