import logo from './logo.svg';
import './App.css';
import ProjectBtn from './components/ProjectBtn';

function App() {
  return (
    <div className="App">
      <div className="App-Top-Bar">
        <ProjectBtn />
       
      </div>
      <header className="App-Home-Header">
        </header>
      {/* <header className="App-Home-Header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
           
        </a>
      
      </header> */}
      
    </div>
    
  );
}

export default App;
