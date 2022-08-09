import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let [inputs, setInputs] = useState([""]);

  return (
    <div className="App">
      <button onClick={() => setInputs(inputs.concat(""))}>Add input</button>
      <form>
        {inputs.map((value, i) => (
          <div>
            <label>Input {i + 1}</label>
            <input
              value={value}
              onChange={e =>
                setInputs(
                  inputs.map((value, j) => {
                    if (i === j) value = e.target.value;
                    return value;
                  })
                )
              }
            />
          </div>
        ))}
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
