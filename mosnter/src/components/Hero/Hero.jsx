import React from "react";
import Carousel from "../carousel/Carousel";
import IconBar from "../IconBar/IconBar";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <IconBar />

      <div className="hero-content">
        <Carousel />

        <div className="hero-buttons">
          <button className="primary">VIEW RELEASE</button>
          <button className="secondary">LISTEN ON PLAYER</button>
        </div>
      </div>
    </section>
  );
}
