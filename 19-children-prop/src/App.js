import './App.css';
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h1>Text inside wrapper</h1>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h1>Another text</h1>
        <input type="text" placeholder="Enter text here" />
      </Wrapper>
    </div>
  );
}

export default App;
