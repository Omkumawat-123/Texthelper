import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route, link, } from "react-router-dom";






function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null);                  // alert msg topup time out
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#323453';
      showAlert("Dark Mode has been enable", "Success")         // dark mode 
      document.title = "TextUtiles - Dark Mode "
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enable", "Success")          // light mode
      document.title = "TextUtiles - Light Mode "
      // setInterval(()=>{
      //   document.title="TextUtiles - Install Now ";
      //for topup again and again 
      // },2000)
      // setInterval(()=>{
      //   document.title="TextUtiles - Is Amazing  ";

      // },1100)
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Texthelper" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            
          < Route path="/"
              element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} Textform />} />
            <Route path="/About"
              element={<About mode={mode} />} />

        

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
