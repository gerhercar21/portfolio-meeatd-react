import React from "react";
import './Asignaturas.css';
import './Banner.css';

export function Tabs() {
    return (
        <section className="container-tabs">
            <div className="wrapper">
            <div className="tabs">
                <ul>
                <li className="active">
                    <span className="text">Primer Semestre</span>
                </li>
                <li>
                    <span className="text">Segundo Semestre</span>
                </li>
                <li>
                    <span className="text">TFM</span>
                </li>
                </ul>
            </div>
            <div className="content">
                <div className="tab_wrap one" style={{ display: "block" }}>
                {/* <img src="/img/60.png" alt=""> */}
                <div className="title">Primer Semestre</div>
                <div className="tab_content">
                    <p>
                    Las asignaturas inscritas en el primer semestre del MEEATD son:
                    </p>
                    <em style={{ fontSize: "80%" }} className="recomendacion">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        {" "}
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z" />
                    </svg>
                    Haz clic en cada botón para ver más sobre la materia.
                    </em>
                    <div className="materia">
                    <a
                        className="try"
                        href="/Soc"
                        // onclick="getPageContent('easd')"
                    >
                        Enseñar y Aprender en la Sociedad Digital
                        <svg
                        className="transition-transform"
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
                    <div className="materia">
                    <a
                        className="try"
                        href= "/Pidi"
                        onclick="getPageContent('Ect')"
                    >
                        Proyecto de Investigación: De la Idea al Diseño
                        <svg
                        className="transition-transform"
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
                    <div className="materia">
                    <a
                        className="try"
                        href="/Fudi"
                        onclick="getPageContent('fdrd')"
                    >
                        Fundamentación y Diseño de Recursos Digitales
                        <svg
                        className="transition-transform"
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
                    <div className="materia">
                    <a
                        href="/Ect"
                        onclick="getPageContent('pint')"
                        className="try"
                    >
                        La Escritura de Textos Científico-Académicos
                        <svg
                        className="transition-transform"
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
                    <div className="materia">
                    <a
                        style={{ pointerEvents: "none", opacity: "0.17" }}
                        href="#content"
                        onclick="getPageContent('letca')"
                        className="try"
                    >
                        Producción Interactiva
                        <svg
                        className="transition-transform"
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
                </div>
                
                <div className="tab_wrap" style={{ display: "none" }}>
                {/* <img src="/img/story-board.jpg" alt=""> */}
                <div className="title">Segundo Semestre</div>
                <div className="tab_content story-board">
                    <p>
                    Las asignaturas inscritas en el segundo semestre del MEEATD son:
                    </p>
                    <em style={{ fontSize: "80%" }} className="recomendacion">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        {" "}
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z" />
                    </svg>
                    Haz clic en cada botón para ver más sobre la materia.
                    </em>
                    <div className="materia">
                    <a
                        style={{ pointerEvents: "none", opacity: "0.17" }}
                        href="#content"
                        onclick="getPageContent('stfm')"
                        className="try"
                    >
                        Seminarios de Trabajo Final de Máster
                        <svg
                        className="transition-transform"
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
                    <div className="materia">
                    <a
                        style={{ pointerEvents: "none", opacity: "0.17" }}
                        href="#content"
                        onclick="getPageContent('temer')"
                        className="try"
                    >
                        Tecnologías Emergentes
                        <svg
                        className="transition-transform"
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
                    <div className="materia">
                    <a
                        style={{ pointerEvents: "none", opacity: "0.17" }}
                        href="#content"
                        onclick="getPageContent('acined')"
                        className="try"
                    >
                        Análisis Cualitativo en Investigación Educativa
                        <svg
                        className="transition-transform"
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
                </div>
                <div className="tab_wrap two" style={{ display: "none" }}>
                {/* <img class="img-tab" src="/img/develop-first.png" alt=""> */}
                <div className="title">Trabajo Final de Máster (TFM)</div>
                <div className="tab_content">
                    <p>Este apartado está pendiente por desarrollar.</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
