import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services id="services" />
      <AboutUs id="about-us" />
      <Footer />
    </>
  );
}

export default App;
