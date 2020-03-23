import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

window.onload = function () {
  changeColor(document.getElementsByClassName("button-basic"), "#fcba03")


}

function changeColor(elements, color) {
  if (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("mouseenter", function(event){
        event.target.classList.add("hover");
      });
      elements[i].addEventListener("mouseout", function(event){
        event.target.classList.remove("hover");
      });
    }
  }
}