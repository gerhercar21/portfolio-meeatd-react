import React from "react";
import './Blog.css';

export function Ect() {
    return (
        <>
        <br></br>
        <section className="presentation animado4">
            <article className="columns-pres">
            <div className="col-pres1">
                <h1>ASIGNATURA:</h1>
                <h2>La Escritura de Textos Científico-Académicos</h2>
                <p>
                <strong>Profesorado:</strong> <br />
                Francesc Martínez Olmo
                </p>
            </div>
            </article>
        </section>
        <section className="container blog">
            <article className="valoracion">
            <h2>Valoración del desarrollo de competencias </h2>
            <p>
                La asignatura con el profesor Francesc ha sido excelente. Las
                presentaciones de las clases, las actividades síncronas, el taller de la
                comunicación para conferencia y el entusiasmo del profesor hicieron un
                excelente <i>match</i>.
                <br />
                <br />
                Me voy con una gran sonrisa porque esta clase no sólo me ha motivado a
                escribir, sino que también a seguir aprendiendo a través de la misma
                escritura académica, la cual me es muy apasionante.
                <br />
                <br />
                Un agradecimiento al profesor Francesc y a mis compis de clase, hicimos
                un gran equipo.
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
                    title="Valoracion-ECT"
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
                    src="https://view.genial.ly/6594e7cb213ddb00146aa119"
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
            <h2>Taller de la asignatura</h2>
            <p>
                Durante esta asignatura se trabajó con un texto con las características
                de una propuesta de comunicación para una conferencia.
                <br />
                <br />
                Para ello, el taller se dividió en tres partes. La primera parte fue
                relativa a la redacción del resumen y las palabras clave de algún
                proyecto de investigación en el que hayamos participado anteriormente.
                La segunda parte constó de la redacción de la comunicación provisional,
                en donde se desarrollaba con mayor detalle las característica de la
                investigación. Estas dos primeras partes fueran revisadas{" "}
                <i>peer-2-peer</i>, lo cual fue muy valioso para recibir
                retroalimentación de las y los compañeros.
                <br />
                <br />
                Por último, la tercera parte constó de hacer las mejoras de acuerdo con
                la retroalimentación recibida de estos dos primeros entregables, esto
                con el fin de juntar la comunicación versión final.
                <br />
                <br />
                Este trabajo fue muy emocionante, porque en todo momento se pusieron
                ciertas reglas de estilo las cuales son muy importantes conocer para
                participar en algún congreso.
                <br />
                <br />
                Echa un vistazo al entregable que desarrollé para la asignatura.
            </p>
            </div>
            <div className="row">
            <div className="col animate1 col-first one-c">
                <div className="card">
                <img
                    src="/img/easd-f1.png"
                    className="card-img-top"
                    alt="Taller ETC"
                />
                <div className="card-body">
                    <h5 className="card-title">
                    <strong>Comunicación.</strong>
                    <br />
                    Jóvenes Construyendo el Futuro: Juventudes, vivencias y saberes
                    del trabajo
                    </h5>
                    <div className="author d-flex align-items-center">
                    <img
                        src="img/gerardo-hernandez-carrera.JPG"
                        alt="Gerardo Hernández"
                    />
                    <p>
                        Gerardo Hernández
                        <strong className="read-time">• Diciembrre 18, 2023</strong>
                    </p>
                    </div>
                    <p className="card-text">
                    <span className="read-more">
                        <a href="/EctD">Leer más →</a>
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