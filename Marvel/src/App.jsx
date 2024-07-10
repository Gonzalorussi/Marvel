import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/Landingpage";
import { CharacterInfo } from "./pages/CharacterInfo";
import { About } from "./pages/about";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as bootstrap from "bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="container-fluid m-0 p-0">
          <img
            style={{ width: "100%" }}
            className="img-fluid"
            src="./src/assets/images/banner.png"
            alt=""
          />
        </section>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/conocenos" element={<About />} />
          <Route
            path="/characters"
            element="Renderizar componente CharactersGrid"
          />
          <Route path="/character/:characterid" element={<CharacterInfo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
