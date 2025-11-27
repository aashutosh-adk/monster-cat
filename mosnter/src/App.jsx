import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import Slidebar from "./components/Slidebar/Slidebar";
import monsterCatLogo from "./assests/Images/monster-cat.png";
import "./App.scss";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      {/* Sidebar */}
      <Slidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Top Navigation also known or called  as  Burger Icon */}
      <header className="top-nav">
        <div className="logo">
         <img src={monsterCatLogo} alt="Logo" />
         <span className="logo-text">Monster Cat</span>
        </div>

        <button
          className="burger"
          onClick={() => setSidebarOpen(true)}
        >
          <div />
          <div />
          <div />
        </button>
      </header>

      {/* HERO SECTION */}
      <Hero />
    </div>
  );
}

export default App;
