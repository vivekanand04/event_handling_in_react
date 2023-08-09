import React, { useState } from "react";
function App() {
  const [heading, updateState] = useState("helllo");

  function karo() {
    console.log("hye"); //it will print in console if u click on submit button
    //after clicking on submit button print submitted so niche wala code likho
    updateState("submited");
  }
  const [isMouseOver, setMouseover] = useState(false);
  function mouse() {
    setMouseover(true);
  }
  function handleMouseOut() {
    setMouseover(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      {/* //now add hover effect on submit button  */}
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={karo}
        onMouseOver={mouse} // here onMouseOveris a funstion,,isake karn submit button ke upper cursor le jaane per color black ho jaata hai
        onMouseOut={handleMouseOut} // isake karn jaise hi ham submit button ke upper se cursor hatate hai to color back ho jaata hai
      >
        Submit
      </button>
    </div>
  );
}

export default App;
