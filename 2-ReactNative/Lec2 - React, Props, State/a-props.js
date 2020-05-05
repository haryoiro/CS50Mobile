import React from 'react';
import { render } from 'react-dom';

import "./styles.css"

function App(props) {
  return (
    <div className="App">
      <h2>{props.count}</h2>
    </div>
  )
}

let count = 0;

const rootElement = document.getElementById("root");

setInterval( () =>
  render(
    <React.StrictMode>
      <App count={count++} />
    </React.StrictMode>,
    rootElement
  ),
  1000
)