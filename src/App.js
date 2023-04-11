function App() { 
  const { ipcRenderer } = window.require("electron"); 
  const sendMail = () => { 
    ipcRenderer.send("ping", 'send'); 
  } 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <p> 
          Hello world!!! 
        </p> 
        <a 
          className="App-link" 
          href="https://reactjs.org" 
          target="_blank" 
          rel="noopener noreferrer" 
        > 
          Learn React 
        </a> 
        <button onClick={ sendMail }>Send Mail</button> 
      </header> 
    </div> 
  ); 
} 
export default App;