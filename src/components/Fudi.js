import React from "react";
import './Blog.css';

export function Fudi() {
    return (
        <>
        <br></br>
        <section className="presentation animado4">
            <article className="columns-pres">
            <div className="col-pres1">
                <h1>ASIGNATURA:</h1>
                <h2>Fundamentación y Diseño de Recursos Digitales</h2>
                <p>
                <strong>Profesorado:</strong> <br />
                Cristina Galván<separate> | </separate>Mariona Grane Oro
                </p>
            </div>
            </article>
        </section>
        <section className="container blog">
            <article className="valoracion">
            <h2>Valoración del desarrollo de competencias </h2>
            <p>
                A lo largo de esta asignatura he logrado hacer un balance muy integral
                con mi formación profesional, pues llevo +3 años de experiencia en el
                sector corporativo EdTech en la parte de creación de contenido digital
                de formación.
                <br />
                <br />
                Me recordó el por qué quise dedicarme a este campo profesional y,
                además, me ha motivado a seguir aprendiendo para mejorar mis habilidades
                de diseño de Objetos de Aprendizaje.
                <br />
                <br />
                Algo que me gustaría resaltar es el trabajo en equipo para la creación
                de la app formativa. Me pareció una excelente dinámica, pues es muy
                cierto que en este campo es necesario contar con un equipo para poder
                desarrollar los proyectos.
                <br />
                <br />
                Además, un comentario muy personal, me ha fascinado encajar con mi
                compañero Carlos Caldas, el cual aportó muchos elementos de valor
                formativo. Qué gran casualidad que se junte Latinoamérica para trabajar
                en conjunto (no sé si esto sea afirmación o pregunta).
                <br />
                <br />
                Sin duda, ha sido una experiencia muy grata tomar esta clase, pues me ha
                ayudado a solidificar mis bases conceptuales del diseño
                tecno-pedagógico, además, me he divertido y aprendido mucho con las
                actividades que se dejaron.
                <br />
                <br />
                Con esto planteado, me gustaría valorar numéricamente el desarrollo de
                las competencias generales y específicas que estaban planeadas para el
                final de la asignatura:
                <br />
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
                    title="Valoración-FIDI"
                    frameBorder={0}
                    width={1200}
                    height={675}
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                    }}
                    src="https://view.genial.ly/6594e2555b2bd5001458a635"
                    type="text/html"
                    allowscriptaccess="always"
                    allowFullScreen="true"
                    scrolling="no"
                    allownetworking="all"
                />{" "}
                </div>{" "}
            </div>
            <p />
            </article>
            <div className="blog-pres">
            <h2>Actividades de la asignatura</h2>
            <p>
                A lo largo de la asignatura se trabajaron con distintas actividades
                sincrónicas como asincrónicas. De las cuales puedo identificar dos
                principales entregas: una de ellas más enfocada a las cuestiones
                reflexivas de la fundamentación de herramientas digitales y otra más
                enfocada en el diseño de herramientas digitales.
                <br />
                <br />
                En ambas se trabajó de manera teórica y práctica, lo cual fue de gran
                ayuda para solidificar y hacer significativo el aprendizaje.
                <br />
                <br />
                En la primera parte más dedicada a la fundamentación, recupera una
                actividad que fue escalando a lo largo de las sesiones. Esta actividad
                fue la de revisar un Objeto de Aprendizaje (OA). Para esto se hizo una
                revisión algún OA existente, posterior se justificó la teoría del
                aprendizaje que está detrás y, por último, se trabajó en un documento de
                "audiodescripción", lo cual es muy importante cuando hablamos de
                accesibilidad.
                <br />
                <br />
                En la segunda parte, trabajamos en el diseño de una app móvil que fuera
                formativa. Este trabajo fue sumamente emocionante, pues se trabajó en
                equipo con el briefing, el flowchart, el guión interactivo y, de manera
                opcional, con un prototipo de la app.
                <br />
                <br />
                Echa un vistazo a algunos de estos entregables de la asignatura.
            </p>
            </div>
            <div className="row">
            <div className="col animate1 col-first two-c">
                <div className="card">
                <img src="/img/easd-f1.png" className="card-img-top" alt="FUDI" />
                <div className="card-body">
                    <h5 className="card-title">
                    <strong>Actividad.</strong>
                    <br />
                    Visitando el micro
                    </h5>
                    <div className="author d-flex align-items-center">
                    <img
                        src="img/gerardo-hernandez-carrera.JPG"
                        alt="Gerardo Hernández"
                    />
                    <p>
                        Gerardo Hernández
                        <strong className="read-time">• Noviembre 23, 2023</strong>
                    </p>
                    </div>
                    <p className="card-text">
                    <span className="read-more">
                        <a href="/Micro">Leer más →</a>
                    </span>
                    </p>
                </div>
                </div>
            </div>
            <div className="col animate2 col-slider slider-two-c">
                <div className="card" id="firstCardAuthor">
                <img
                    src="/img/easd-f2.png"
                    className="card-img-top"
                    alt="Escritoras Latinoamericanas"
                />
                <div className="card-body">
                    <h5 className="card-title">
                    <strong>Actividad.</strong>
                    <br />
                    Diseño de app formativa
                    </h5>
                    <div className="author d-flex align-items-center">
                    <img
                        src="img/gerardo-hernandez-carrera.JPG"
                        alt="Gerardo Hernández"
                    />
                    <p>
                        Gerardo Hernández
                        <strong className="read-time">• Diciembre 18, 2023</strong>
                    </p>
                    </div>
                    <p className="card-text">
                    <span className="read-more">
                        <a href="/Design">Leer más →</a>
                    </span>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}