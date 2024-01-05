import React from "react";
import './Banner.css';
import poster from '../assets/poster-pres-meeatd.jpg'

export function Banner() {
    return (
        <section className="action-projects">
        <article className="container-projects">
          <div className="img-projects intro-projects" id="projects">
            <h1>
              <separate>¡</separate>Bienvenidxs<separate>!</separate>
            </h1>
            <p>
              Como primera actividad de este portafolio, les comparto el siguiente{" "}
              <separate style={{ color: "#BF1162" }}>
                {" "}
                <b>video introductorio</b>
              </separate>{" "}
              en el que presento un poco más sobre mí, mis motivaciones y mis
              expectativas del Máster en Entornos de Enseñanza y Aprendizaje con
              Tecnologías Digitales.
              <br /> <br />
              <em style={{ fontSize: "80%" }} className="recomendacion">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  {" "}
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z" />
                </svg>
                Activa los subtítulos si lo necesitas, sólo haz clic el ícono de
                "opciones" en la parte inferior derecha del video.
              </em>
            </p>
            <br />
            <div style={{ textAlign: "center" }}>
            {/* <iframe
                controls=""
                poster={poster}
                style={{ borderRadius: ".7rem" }}
                controlslist="nodownload noplaybackrate"
                src="https://videos.gerardohdezcarrera.org/meeatd/presentation-eeatd.mp4"></iframe> */}

              <video
                controls=""
                poster={poster}
                style={{ borderRadius: ".7rem" }}
                controlslist="nodownload noplaybackrate"
              >
                <source
                  src="https://videos.gerardohdezcarrera.org/meeatd/presentation-eeatd.mp4"
                  type="video/mp4"
                />
                <track
                  src="vtt/pres-meeatd.vtt"
                  kind="subtitles"
                  srcLang="es"
                  label="Español"
                />
              </video>
            </div>
          </div>
          <div className="intro-projects animado5">
            <h3>
              <strong>¿Qué te ha parecido?</strong>
            </h3>
            <p>
              Espero que este video demuestre un poco más sobre mí, si necesitas saber
              algo más o quieres que platiquemos de alguna cosa de interés,{" "}
              <strong>
                {" "}
                ¡no dudes en escribirme o buscarme en mis redes sociales!
              </strong>
              <br />
              <br />
              Te comparto los siguientes textos académicos que he escrito:
            </p>
            <ul>
              <li>
                <em>
                  Hegemonía y alternativas pedagógicas 4: Juventudes, experiencias y
                  saberes del trabajo.
                </em>
                <br />
                9a Conferencia Latinoamericana y Caribeña de Ciencias Sociales -
                CLACSO · 9 jun. 2022. <br />
                <a
                  href="https://conferenciaclacso.org/programa/resumen_ponencia.php?&ponencia=Conf-1-3054-65258&eje=32"
                  target="_blank"
                >
                  {" "}
                  <strong>
                    Ver más{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
                        fill="currentColor"
                      />
                    </svg>
                  </strong>
                </a>{" "}
              </li>
              <br />
              <li>
                <em>
                  Pensar los saberes del trabajo y los saberes socialmente
                  productivos: el horizonte de los jóvenes. ante la incertidumbre.
                </em>
                <br />
                XVI Congreso Nacional de Investigación Educativa - CNIE 2021 · 16 nov.
                2021.
                <br />
                <a
                  href="https://www.comie.org.mx/congreso/memoriaelectronica/v16/doc/2320.pdf"
                  target="_blank"
                >
                  {" "}
                  <strong>
                    Ver más{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
                        fill="currentColor"
                      />
                    </svg>
                  </strong>
                </a>{" "}
              </li>
              <br />
              <li>
                <em>
                  El vínculo educación-trabajo: la(s) juventud(es) frente a la
                  incertidumbre del siglo XXI.
                </em>
                <br />
                Revista de la Facultad de Filosofía y Letras, Universidad Nacional
                Autónoma de México · 12 ago. 2021.
                <br />
                <a
                  href="http://revistafyl.filos.unam.mx/el-vinculo-educacion-trabajo-las-juventudes-frente-a-la-incertidumbre-del-siglo-xxi/"
                  target="_blank"
                >
                  {" "}
                  <strong>
                    Ver más{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
                        fill="currentColor"
                      />
                    </svg>
                  </strong>
                </a>{" "}
              </li>
            </ul>
          </div>
        </article>
      </section>
    );
}