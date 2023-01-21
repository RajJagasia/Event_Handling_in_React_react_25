import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  // My way is commented

  // const [buttonClass, setbuttonClass] = React.useState("white");
  const [buttonClass, setbuttonClass] = React.useState(false);

  function handleClick() {
    if (document.getElementById("headOfPage").innerHTML === "Hello") {
      setHeadingText("Bye-Bye");
    } else {
      setHeadingText("Hello");
    }
  }

  function handleMouseOver() {
    // setbuttonClass("black");
    setbuttonClass(true);
  }
  function handleMouseOut() {
    // setbuttonClass("white");
    setbuttonClass(false);
  }

  return (
    <div className="container">
      <h1 id="headOfPage">{headingText}</h1>
      <input type="text" placeholder="What's your name?" id="texbox" />
      <button
        onClick={handleClick}
        // My way is commented
        // class={buttonClass}
        // onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
        style={{ backgroundColor: buttonClass ? "black" : "white" }}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
