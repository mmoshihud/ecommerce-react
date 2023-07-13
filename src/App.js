import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Login
        </a>
        <Login />
      </header>
    </div>
  );
}

export default App;
