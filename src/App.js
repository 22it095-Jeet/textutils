import "./App.css";
import React, {useState} from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#20495a';
      showAlert("dark Mode Has Been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode Has Been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode}/>
           <Alert alert={alert}/>
           <div className="container my-3">  
              {/* <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />} />
                <Route path="/" element={<Textform showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />} />
              </Routes> */}
                <Textform showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />
           </div>
    {/* </Router> */}
           
    </>
  );
}

export default App;
