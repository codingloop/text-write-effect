import logo from "./logo.svg";
import "./App.css";
import useTextWriteEffect from "./hooks/textwrite";

function App() {
  const currentText = useTextWriteEffect(
    [
      "This is first line",
      "This is second line",
      "This is third line",
      "This is forth line",
      "This is fifth line",
      "This is sixth line",
    ],
    150
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{currentText}</p>
      </header>
    </div>
  );
}

export default App;
