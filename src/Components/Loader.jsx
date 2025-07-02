import React from "react";
import "./Loader.css"; // Crea este archivo para los estilos

export default function Loader() {
  return (
    <div className="loader-bg">
      <img src="/mirandaLogoSolo.png" alt="Logo" className="loader-logo" />
    </div>
  );
}