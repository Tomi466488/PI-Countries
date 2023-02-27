import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import landing from "../Images/landing.mp4";

export default function LandingPage() {
  return (
    <div className={style.conPrin}>
      <div className={style.homepage}>
        <video
          loop
          muted
          className={style.imgLanding}
          src={landing}
          alt="Bienvenida"
          autoplay="autoplay"
        />

        <h1 className={style.txt}>BIENVENIDO, ENCUENTRA</h1>
        <h1 className={style.txt}>TU PROPIO DESTINO</h1>

        <div className={style.welcome}>
          <Link to="/home">
            <button className={style.boton}>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
