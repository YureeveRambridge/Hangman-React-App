import Button from "react-bootstrap/Button";
// Function displays on screen keyboard for user input
export function Keyboard(props) {
  // Array stores alphabets in "QWERT" layout.
  const alphabet = [..."qwertyuiopasdfghjklzxcvbnm"];
  // Alphabet array is mapped to display each letter on screen in it's own button.
  return alphabet.map((letter, key) => (
    <Button
      // Button style
      variant="success"
      // Map key
      key={key}
      // Gets letter to be returned as user input
      value={letter}
      // Handles user input
      onClick={props.eventHandler}
    >
      {/* Letter thats printed on button */}
      {letter}
    </Button>
  ));
}
