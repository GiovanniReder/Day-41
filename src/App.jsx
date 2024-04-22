import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponents";
import ImageComponents from "./components/ImageComponent";
import photo from "./cat.jpg";
import photo2 from "./icona.jpg";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ImageComponents src={photo} alt="cat" />
        <ImageComponents src={photo2} alt="cat" />
        
       <ButtonComponent className="btn" title=" test "/>
       <ButtonComponent className="btn2" title=" culo "/>
       <ButtonComponent className="btn3" title=" palle "/>
      </header>
    </div>
  );
}

export default App;
