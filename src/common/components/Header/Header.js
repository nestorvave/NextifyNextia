import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Hero } from "../../../assets/images/hero.svg";
import "./_header.scss";

export default function Header() {
  return (
    <div className="header">
      <Hero />
      <div>
        <h1>Escuchar</h1>
        <h2>Seleccionado para ti</h2>
      </div>
    </div>
  );
}
