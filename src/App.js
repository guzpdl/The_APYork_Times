import "./App.css";
import Masthead from "./components/Masthead";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Masthead />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
