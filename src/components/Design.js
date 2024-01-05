import React from "react";
import './Blog.css';
import './Banner.css';
import imgFlowchart from "../assets/Flowchart-EmotiLand-App.png";
import pdfFlowchart from "../assets/EmotiLand-Flowchart.pdf";
import imgGuion from "../assets/guion-interactivo-emotiland.jpg";
import pdfGuion from "../assets/guion-emotiland.pdf";
import imgProto from "../assets/prototipo-img.png";
import {Card} from './Card.js';
import {Banner} from './Banner.js';


function Design() {
    return (
        <>
        <br></br>
        <section className="presentation animado4">
          <article className="columns-pres">
            <div className="col-pres1">
              <h1>ACTIVIDAD</h1>
              <h2>Diseño de app formativa</h2>
              <p>
                MEEATD <separate>|</separate> 2023-2024 <separate />{" "}
              </p>
            </div>
          </article>
        </section>
        <section className="action-projects">
          <article className="container-projects">
            <div className="img-projects intro-projects" id="projects">
              <a href="/asignaturas.html#content">
                {" "}
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    width={10}
                    height={10}
                    viewBox="0 0 493.578 493.578"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676   L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262   c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759   c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z" />
                    </g>
                  </svg>
                  Regresar
                </strong>
              </a>
              <br />
              <br />
              <br />
              <p>Se trabajaron con tres distintas fases para el diseño de la app:</p>
              <article className="btn-id">
                <div className="action-btn">
                  <a href="#briefing">
                    Briefing
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
                <div className="btn-two">
                  <a href="#flowchart">
                    Flowchart
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
                <div className="action-btn">
                  <a href="#guion">
                    Guión Interactivo
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
                <div className="btn-two">
                  <a href="#prototipo">
                    Prototipo
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
              </article>
              <h1 id="briefing">Briefing</h1>
              <p>
                Como tarea inicial para diseñar la app, fue necesario hacer un
                briefing, el cual contiene descripciones sobre para qué es la app,
                para quién es y a través de qué se logrará nuestro objetivo. Este
                primer acercamiento fue sumamente importante, pues mnos permitió
                conocer y describir con mayor detalle a los usuarios destino de la
                app.
              </p>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    paddingTop: 0,
                    height: 0
                  }}
                >
                  <iframe
                    title="Briefing - Emotiland"
                    frameBorder={0}
                    width={1200}
                    height={675}
                    style={{
                      borderRadius: "1rem",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src="https://view.genial.ly/65610779a09bc20011ab1f64"
                    type="text/html"
                    allowscriptaccess="always"
                    allowFullScreen="true"
                    scrolling="yes"
                    allownetworking="all"
                  />
                </div>
              </div>
              <br />
              <br />
              <br />
              <h1 id="flowchart">Flowchart</h1>
              <p>
                El diseño del Flowchart, posterior a tener nuestro briefing, fue de
                suma importancia para antes de comenzar a diseñar nuestras pantallas,
                pues este diagrama de flujo nos sirvió para saber cómo es el
                funcionamiento de la app en cuanto al sistema.
                <br />
                <br />
              </p>
              <div className="non-desk">
                <img
                  src={imgFlowchart}
                  alt="Flowchart EmotiLand"
                />
                <p>
                  Para ver el flowchart haz clic{" "}
                  <a href={pdfFlowchart} target="_blank">
                    {" "}
                    <strong>aquí</strong>
                  </a>
                  .
                </p>
              </div>
              {/* <div
                className="iframes"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0
                }}
              >
                <object
                  alt="Flowchart EmotiLand"
                  frameBorder={0}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem"
                  }}
                  data="./assets/EmotiLand-Flowchart.pdf"
                  allowFullScreen="yes"
                />
              </div> */}
              <br />
              <br />
              <br />
              <h1 id="guion">Guión Interactivo</h1>
              <p>
                Una vez que se hizo y corrigió el Flowchart, fue momento de comenzar
                con nuestros wireframes y con el guión interactivo. En este entregable
                diseñamos algunas de las pantallas más relevantes de la app y
                describimos la funcionalidad y requerimientos para que el equipo de
                desarrollo pudiera tenerlo como guía.
                <br />
                <br />
              </p>
              <div className="non-desk">
                <img
                  src={imgGuion}
                  alt="Guión Interactivo EmotiLand"
                />
                <p>
                  Para ver el guión Interactivo haz clic{" "}
                  <a href={pdfGuion} target="_blank">
                    {" "}
                    <strong>aquí</strong>
                  </a>
                  .
                </p>
              </div>
              {/* <div
                className="iframes"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  paddingTop: 0,
                  height: 0
                }}
              >
                <object
                  alt="Guión Interactivo EmotiLand"
                  frameBorder={0}
                  width={1200}
                  height={675}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "1rem"
                  }}
                  data="/pdf/guion-emotiland.pdf"
                  allowFullScreen="yes"
                />
              </div> */}
              <br />
              <br />
              <br />
              <h1 id="prototipo">Prototipo</h1>
              <p>
                Como elemento adicional, se trabajó en un prototipo, el cual se hizo
                con <strong>Storyline 3</strong> de la paquetería de Articulate.
                <br />
                <br />
              </p>
              <div className="non-desk">
                <img src={imgProto} alt="Prototipo EmotiLand" />
                <p>
                  Para ver el prototipo haz clic{" "}
                  <a href="https://meeatd.gerardohdezcarrera.org/emotiland-prototipo/story_html5" target="_blank">
                    {" "}
                    <strong>aquí</strong>
                  </a>
                  .
                </p>
              </div>
              {/* <div className="iframes" style={{ width: "100%" }}>
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    paddingTop: 0,
                    height: 0
                  }}
                >
                  <iframe
                    title="Prototipo - Emotiland"
                    frameBorder={0}
                    width={1200}
                    height={675}
                    style={{
                      borderRadius: "1rem",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src="/EmotiLand-Prototipo/story_html5.html"
                    type="text/html"
                    allowscriptaccess="always"
                    allowFullScreen="true"
                    scrolling="yes"
                    allownetworking="all"
                  />
                </div>
                <br />
                <br />
                <br />
              </div> */}
            </div>
          </article>
        </section>
        <Card />
      </>
   
    );
}

export default Design