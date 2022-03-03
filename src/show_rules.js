import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

// Function displays rules to user when the button is clicked in the react-bootstrap modal component.
function RulesModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* Header of Modal */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hangman rules:
        </Modal.Title>
      </Modal.Header>
      {/* Modal body */}
      <Modal.Body>
        {/* Rules heading */}
        <h4>Game Play:</h4>
        <ListGroup>
          {/* Set of rules */}
          <ListGroup.Item>
            A random word is generated and the player can guess what it is one
            letter at a time by clicking on a letter of the alphabet.
          </ListGroup.Item>
          <ListGroup.Item>
            The number of dashes are equivalent to the number of letters in the word.
          </ListGroup.Item>
          <ListGroup.Item>
            If the player clicks on a letter that occurs in the word, the
            dash/es are filled in with that letter in the right places.
          </ListGroup.Item>
          <ListGroup.Item>
            If the word does not contain the suggested letter, one element of a
            hangman's gallows is drawn for every incorrect guess.
          </ListGroup.Item>
          <ListGroup.Item>
            The number of incorrect guesses before the game ends is 10.
          </ListGroup.Item>
          <ListGroup.Item>
            The game is won buy guessing all the correct letters of the
            generated word before running out of guesses.
          </ListGroup.Item>
        </ListGroup>
        <br />
        {/* Conclusion of the Rules */}
        <h4>Objective:</h4>
        <p>Guess the word/phrase before your man gets hung! </p>
      </Modal.Body>
      {/* Modal Footer for the close button */}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
// This function calls the RulesModal function and displays it when the button below is clicked.
function ShowRules() {
  // Set state for the button is initially set to false.
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      {/* Button on the webpage. */}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Rules
      </Button>
      {/* When the button is clicked it's set to display the rules modal. */}
      <RulesModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export { ShowRules };
