import React from "react";
import './Blog.css';

export function Pidi() {
    return (
        <>
        <br></br>
        <section className="presentation animado4">
            <article className="columns-pres">
            <div className="col-pres1">
                <h1>ASIGNATURA:</h1>
                <h2>Proyecto de Investigación: de la Idea al Diseño</h2>
                <p>
                <strong>Profesorado:</strong> <br />
                Cristina Alonso Cano<separate> | </separate>Maria Jose Rubio Hurtado
                </p>
            </div>
            </article>
        </section>
        <section className="container blog">
            <article className="valoracion">
            <h2>Valoración del desarrollo de competencias </h2>
            <p>
                La clase con las profesoras Ana Cristina y Maria José fue todo un reto,
                pero sin duda fue de gran ayuda para avanzar con mi TFM.
                <br />
                <br />
                Las clases, las presentaciones y las explicaciones me parecieron muy
                pertinentes, aunque un tanto escuetas, pues igual por el tiempo no se
                llegaron a profundizar algunos temas.
                <br />
                <br />
                Sin embargo, el tiempo dedicado fue de calidad por la atención que
                brindaron las profesoras en todo momento. Como una área de oportunidad
                que identifico es la parte del <i>feedback</i>, pues me parece que en
                algunas entregas en la plataforma los comentarios eran muy generales, me
                hubiera gustado tener comentarios con mayor profundidad.
                <br />
                <br />
                Asimismo, algo que considero pertinente mencionar como área de mejora,
                es la parte de la bibliografía, pues me parece que hay libros muy
                valiosos y que no sólo se quedan a nivel <i>best seller</i>, ya que
                estos tienden a tener una perspectiva muy general y, además, de "manual"
                sobre el proceso de investigación.
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
                    title="Valoración-PIDID"
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
                    src="https://view.genial.ly/6594e981213ddb00146b0288"
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
            <h2>Entregables de la asignatura</h2>
            <p>
                A lo largo de esta asignatura se trabajaron con distintas actividades
                asíncronas, las cuales identificó tres principales: una participación en
                foro; construcción de marco teórico y estado de la cuestión; y
                desarrollo del marco metodológico.
                <br />
                <br />
                Echa un vistazo a los entregaciones de la asignatura.
            </p>
            </div>
            <div className="row">
            <div className="col animate1 col-first">
                <div className="card">
                <img
                    src="/img/easd-f1.png"
                    className="card-img-top"
                    alt="Entre besos y amor"
                />
                <div className="card-body">
                    <h5 className="card-title">
                    <strong>Blog.</strong>
                    <br />
                    Evidencias acumuladas basadas en la investigación sobre EEATD
                    </h5>
                    <div className="author d-flex align-items-center">
                    <img
                        src="img/gerardo-hernandez-carrera.JPG"
                        alt="Gerardo Hernández"
                    />
                    <p>
                        Gerardo Hernández
                        <strong className="read-time">• Octubre 18, 2023</strong>
                    </p>
                    </div>
                    <p className="card-text">
                    <span className="read-more">
                        <a href="./blog/pidi-foro-b1.html">Leer más →</a>
                    </span>
                    </p>
                </div>
                </div>
            </div>
            <div className="col animate2 col-slider">
                <div className="card" id="firstCardAuthor">
                <img src="/img/easd-f2.png" className="card-img-top" alt="EEATD" />
                <div className="card-body">
                    <h5 className="card-title">
                    <strong>Bloque temático 1.</strong>
                    <br />
                    Marco teórico y Estado de la cuestión
                    </h5>
                    <div className="author d-flex align-items-center">
                    <img
                        src="img/gerardo-hernandez-carrera.JPG"
                        alt="Gerardo Hernández"
                    />
                    <p>
                        Gerardo Hernández
                        <strong className="read-time">• Octubre, 2023</strong>
                    </p>
                    </div>
                    <p className="card-text">
                    <span className="read-more">
                        <a href="./blog/mt-ea.html">Leer más →</a>
                    </span>
                    </p>
                </div>
                </div>
            </div>
            <div className="col animate3 col-slider">
                <div className="card" id="firstCardAuthor">
                <img src="/img/easd-f3.png" className="card-img-top" alt="EEATD" />
                <div className="card-body">
                    <h5 className="card-title">
                    <strong>Bloque temático 2.</strong>
                    <br />
                    Marco metodológico
                    </h5>
                    <div className="author d-flex align-items-center">
                    <img
                        src="img/gerardo-hernandez-carrera.JPG"
                        alt="Gerardo Hernández"
                    />
                    <p>
                        Gerardo Hernández
                        <strong className="read-time">• Noviembre, 2023</strong>
                    </p>
                    </div>
                    <p className="card-text">
                    <span className="read-more">
                        <a href="/Metod">Leer más →</a>
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

export default Pidi