import "./App.css";
import Footer from "./components/Footer";
import Masthead from "./components/Masthead";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  return (
    <div className="App">
      <Masthead />
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
