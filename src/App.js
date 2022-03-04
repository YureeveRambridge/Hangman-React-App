// import logo from './logo.svg';
import './App.css';
import HangmanApp from "./hangman_app";
import { ShowRules } from "./show_rules";

function App() {
  return (
    <div className="App">
      {/* Head for webpage */}
      <h1 className="heading">HANGMAN</h1>
      {/* From "show_rules.js" is displays rules when called */}
      <ShowRules />
      {/* Component displays the HangmanApp from the hangman_app page */}
      <HangmanApp />
    </div>
  );
}

export default App;
