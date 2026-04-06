import { useState } from "react";

function Component() {
  const [rand, setrand] = useState("No number generated yet");

  function button() {
    const num = Math.floor(Math.random() * 100) + 1;
    setrand(num);
  }

  function reset() {
    setrand("No number generated yet");
  }

  return (
    <div id="container">
      <div id="rand-container">

      

        <h1 id="heading">Random Number Generator</h1>

        <div id="value-box">
          <h2 id="value">
            {typeof rand === "number" ? rand : 0}
          </h2>
        </div>

        <button id="button" onClick={button}>
          Generate
        </button>

        <button id="resetbtn" onClick={reset}>
          Reset
        </button>

      </div>
    </div>
  );
}

export default Component;