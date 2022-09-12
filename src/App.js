
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor ="rgb(97 144 188)";
      document.body.style.Color ="white";
      showAlert("Dark mode has been enabled", "success");

    }else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      document.body.style.Color ="black";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} home="Home" about="About" dropdown="Dropdown"/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
      </div>
    </>
  );
}

export default App;
