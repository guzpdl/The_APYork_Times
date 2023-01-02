import "./App.css";
import Footer from "./components/Footer";
import Masthead from "./components/Masthead";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Masthead />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
