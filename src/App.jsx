import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services id="services" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
