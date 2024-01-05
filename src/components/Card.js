import React from "react";
import './Banner.css';
import {Asignaturas} from './Asignaturas.js';
import imagen from '../assets/banner-asignaturas.png'

export function Card() {
    let component
    switch (window.location.pathname) {
      case "./Asignaturas":
        component = <Asignaturas />
        break;
    }
    return (
        <section className="action-projects2">
            <div className="animado7">
                {/* <h1>
                        &#10140; Revisa algunos de mis trabajos
                    </h1> */}
                <article className="container-projects2">
                <div className="img-projects2">
                <a href="/Asignaturas">
                    <img src={imagen} alt="" />
                    </a>
                </div>
                <div className="intro-projects2">
                    <h3>
                    <strong>Asignaturas en curso</strong>
                    </h3>
                    <p>
                    Si te interesa conocer cómo mi formación ha evolucionado con el tiempo
                    y qué habilidades he adquirido en el camino, te invito a explorar las
                    asignaturas. Solo tienes que hacer clic en el botón a continuación
                    para empezar.
                    </p>
                    <div className="action-btn-projects2">
                    <a href="/Asignaturas">
                        Ver asignaturas
                        <svg
                        className="transition-transform"
                        width={20}
                        height={20}
                        fill="none"
                        viewBox="0 0 24 24"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M13.75 6.75l5.5 5.25-5.5 5.25M19 12H4.75"
                        />
                        </svg>
                    </a>
                    </div>
                </div>
                </article>
            </div>
        </section>
    );
}