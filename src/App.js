import "./App.css";
import { CounterComponentHooks } from "./components/CounterComponentHooks";
import CounterComponent from "./components/CounterComponent";

function App() {
  return (
    <div className="App">
      <CounterComponentHooks />
      <CounterComponent />
    </div>
  );
}

export default App;
