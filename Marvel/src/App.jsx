import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/Landingpage";
import { CharacterInfo } from "./pages/CharacterInfo";
import { About } from "./pages/about";
import "../App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <nav className="header_nav">
            <ul className="nav_menu">
              <Link to="/">
                <li className="menu_item">Home</li>
              </Link>
              <Link to="/conocenos">
                <li className="menu_item">Quiénes Somos</li>
              </Link>
              <Link to="/login">
                <li className="menu_item">Log in</li>
              </Link>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <img className="hero_img" src="./src/assets/marvelhero.png" alt="" />
        </section>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/conocenos" element={<About />} />
          <Route
            path="/characters"
            element="Renderizar componente CharactersGrid"
          />
          <Route path="/character/:characterid" element={<CharacterInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
