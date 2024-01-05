import React from "react";
import './Banner.css';

export function Presentation() {
    return(
        <section className="presentation animado4">
            <article className="columns-pres">
                <div className="col-pres1">
                <h1>PORTAFOLIO</h1>
                <h2>Gerardo Hernández Carrera</h2>
                <p>
                    MEEATD <separate>|</separate> 2023-2024 <separate />{" "}
                </p>
                </div>
            </article>
            {/* <div className="section-divider">
                <svg viewBox="0 0 1920 60" aria-hidden="true">
                <path
                    fill="var(--color-white)"
                    d="M1920,60H0V0S387,59,960,59,1920,0,1920,0Z"
                />
                </svg>
            </div> */}
        </section>
    );
}