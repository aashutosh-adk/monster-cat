import React from "react";
import "./Slidebar.scss";

export default function Slidebar({ open, setOpen }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="close" onClick={() => setOpen(false)}>✕</button>

      <nav>
        <a href="#">Music</a>
        <a href="#">Artists</a>
        <a href="#">News</a>
        <a href="#">Events</a>
      </nav>
    </div>
  );
}
