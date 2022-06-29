import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        // console.log(data.devices);
        setBackendData(data);
      }
    );
  },[]);


  const mostrarDevice = () => {
    document.getElementById('deviceHTML').innerText = backendData.devices
    // console.log( JSON.stringify(backendData))
    console.log( backendData );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Aqui se mostrará la antena: <span id='deviceHTML' >Device</span>
        </p>
        <button onClick={mostrarDevice}>
          Push me
        </button>
      </header>
    </div>
  );
}

export default App;
