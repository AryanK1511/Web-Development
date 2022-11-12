import React from 'react';
import Login from '../components/Login';

var isLoggedIn = !true;

function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  }
  else {
    return <Login />;
  }
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;