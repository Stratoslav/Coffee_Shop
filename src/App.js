import "./App.scss";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Action } from "./components/Action/Action";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <Action />
      </div>
    </div>
  );
}

export default App;
