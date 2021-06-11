import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Social from "./components/social/Social";



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Social/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <About/>
      </div>
    </div>
  );
}

export default App;
