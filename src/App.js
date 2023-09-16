import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import React from 'react'



function App() {
  return (
    // this is jsx
    // only one tag can be returned
    // use jsx fragment
    <>
      {/* title= 'Textutils' this is prop */}
      
      <Navbar title="Textutils"></Navbar>
    </>
  );
}

export default App;
