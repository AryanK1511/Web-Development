import React, { useState } from 'react';
import Login from '../components/Login';

var userIsRegistered = !true;

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container"> 
    <h1>{headingText}</h1>
    {
      userIsRegistered ? <Login buttonValue="Login"/> : <Login buttonValue="Register"/>
    }
    <button style={{backgroundColor: isMousedOver ? "black" : "white"}} onClick={handleClick} onMouseOver={handleMouseOver}  onMouseOut={handleMouseOut} type='submit'>{userIsRegistered ? "Login" : "Register"}</button>
    </div>
  );
}

export default App;