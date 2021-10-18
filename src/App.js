import logo from "./logo.svg";
import "./App.css";
import Circle from "./Component/Circle.js";

function App() {
  const myArray = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      {
        <header className="App-header">
          <div className="container">
            {myArray.map((element) => (
              <Circle key={element} />
            ))}
          </div>
        </header>
      }
    </div>
  );
}

export default App;
