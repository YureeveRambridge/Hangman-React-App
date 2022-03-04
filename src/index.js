import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Imports for images from the "Image" folder for export to the Hang_app.js file.
import image_1 from "./Images/state1.GIF";
import image_2 from "./Images/state2.GIF";
import image_3 from "./Images/state3.GIF";
import image_4 from "./Images/state4.GIF";
import image_5 from "./Images/state5.GIF";
import image_6 from "./Images/state6.GIF";
import image_7 from "./Images/state7.GIF";
import image_8 from "./Images/state8.GIF";
import image_9 from "./Images/state9.GIF";
import image_10 from "./Images/state10.gif";
import image_11 from "./Images/state11.GIF";
// Exports for the Hang_app.js file.
export {
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
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
