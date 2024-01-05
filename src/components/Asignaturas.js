import React from "react";
import './Asignaturas.css';
import './Banner.css';
import {Footer} from './Footer.js';
import {Tabs} from './Tabs.js';
import {Soc} from './Soc.js';


export function Asignaturas() {
    return (
        <>
        <br></br>
          <section className="presentation animado4">
    <article className="columns-pres">
      <div className="col-pres1">
        <h1>PORTAFOLIO</h1>
        <h2>Asignaturas</h2>
        <p>
          MEEATD <separate>|</separate> 2023-2024 <separate />{" "}
        </p>
      </div>
    </article>
  </section>
  <section className="action-projects">
    <article className="container-projects">
      <div className="img-projects intro-projects" id="projects">
        <p>
          En esta sección, te llevaré a un recorrido a través de mi trayectoria
          académica, organizada por semestres. Aquí podrás explorar las
          asignaturas inscritas y las actividades realizadas en el periodo de
          cada una, con la intención de obtener una visión general de mi
          experiencia educativa.
          <br />
          <br />
          La división se hace a partir de la distribución semestral de las
          asignaturas, así como la asignatura anual del Trabajo Final de Máster.
        </p>
      </div>
    </article>
  </section>

  <div id="content" style={{ paddingTop: "0.05rem" }}></div>
  <div className="division">
    <br />
  </div>
  {/* <EyASoc /> */}
  <Tabs />
</>

    );
}