import React from "react";
import './Blog.css';
import './Banner.css';
import imagen from "../assets/audiodescripcion.png";
import {Card} from './Card.js';
import {Banner} from './Banner.js';


function Micro() {
    return (
        <>
        <br></br>
        <section className="presentation animado4">
          <article className="columns-pres">
            <div className="col-pres1">
              <h1>ACTIVIDAD</h1>
              <h2>Visitando el micro</h2>
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
              <p>
                El análisis y trabajo un Objeto de Aprendizaje (OA) se hizo en tres
                diferentes momentos, los cuales se podrán revisar haciendo clic en los
                siguientes botones:
              </p>
              <article className="btn-id">
                <div className="action-btn">
                  <a href="#descripcion">
                    Revisión de Objeto de Aprendizaje
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
                  <a href="#teoria">
                    Justificación de teoría del aprendizaje
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
                  <a href="#accesibilidad">
                    Pantalla de audiodescripción
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
              <h1 id="descripcion">Revisión de Objeto de Aprendizaje</h1>
              <br />
              <p>
                <strong>Instrucciones:</strong>
                <br />
                Antes de iniciarnos en el diseño instruccional te invitamos a explorar
                un OA de estos repositorios. Cada uno de ustedes analizará un OA y
                compartirá en el foro una breve descripción del recurso:
                <i>
                  ¿a quién va dirigido? ¿cuál es el objetivo de aprendizaje? ¿es
                  interactivo? ¿tal y cómo está, puede servir para dirigir una acción
                  de aprendizaje o es necesario algún recurso complementario como una
                  guía de trabajo, batería de preguntas u otro? ¿cómo podemos decir
                  que la persona aprende como este recurso? Describa el recurso
                  considerando las características de un objeto de aprendizaje.
                </i>
                <br />
                <br />
                <br />
                <strong>Introducción:</strong>
                <br />
                El Objeto de Aprendizaje (OA) analizado para esta actividad, es un
                prototipo que hice en Genially hace algunos años para un proyecto en
                el que trabajé como freelance.
                <br />
                <br />
                Para comenzar, hablar de Objeto de Aprendizaje lleva a pensar en
                distintas definiciones, las cuales pueden variar de acuerdo con el
                enfoque que se le dé. Para fines particulares, se partirá con la
                definición de Objeto de Aprendizaje como un material digital de
                aprendizaje que aborda un tema o resultado de aprendizaje claramente
                identificable (Weller, 2007).
                <br />
                <br />
                Con esto planteado, el presente texto abordará el análisis del OA
                previamente mencionado, comenzando con una descripción general del
                mismo, seguido de una comparación descrptiva de las características
                que debe de tener un OA y finalizando con un breve apartado de
                conclusiones.
                <br />
                <br />
                <br />
                <strong>Datos generales del OA:</strong>
                <br />
                Con la intención de brindar información general, el OA analizado está
                dirigido a estudiantes de un curso de diseño de productos digitales y
                tiene como objetivo que los estudiantes conozcan las características
                de la etapa ideación y de la técnica de mashups.
                <br />
                <br />
                La interactividad es básica en un inicio, pues únicamente se agregan
                animaciones de entrada de los elementos así como hover en los botones
                de navegación, sin embargo, al momento de realizar la actividad, se
                puede encontrar otro tipo de interactividad, como arrastre de objetos
                y feedback automatizado al presionar un botón de validación.
                <br />
                <br />
                En términos muy estrictos, este OA necesitaría de algún recurso
                complementario para dirigir una acción de aprendizaje más completa,
                pues este tema depende de tópicos previos.
                <br />
                <br />
                Podemos decir que el estudiante aprende con este recurso porque por un
                lado se hace una explicación sobre los temas de una manera
                estructurada y, por otro, se plantea un reto práctico el cual los
                estudiantes deben resolver para poder concluir. Para este reto, se
                programan respuestas automatizadas, las cuales brindarán feedback una
                vez que lo complete.
                <br />
                <br />
                Este OA cuenta con una secuencialidad y narrativa que dirige a los
                estudiantes a completar un objetivo de aprendizaje en específico,
                asimismo, puede utilizarse o referenciarse como apoyo para algún curso
                presencial, en línea o blended, debido a que depende de una mediación
                adicional para que tenga mayor provecho de uso.
                <br />
                <br />
                <br />
                <strong>Comparativa con las características de un OA:</strong>
                <br />
                Después de este recorrido para conocer de manera general qué es un OA
                y cuál es la información general del OA analizado, en esta última se
                hará una comparación descriptiva de las caratcerísticas planteadas por
                García (2015, abril):
                <br />
              </p>
              <ul>
                <li>
                  <strong>Reutilización:</strong>
                  El OA analizado cumple con esta característica, pues puede
                  recuperarse para distintos contextos educativos, por ejemplo, podría
                  utilizarse para otros cursos de la misma oferta de la institución,
                  no sólo para el curso de diseño de productos.
                </li>
                <li>
                  <strong>Educatividad:</strong>
                  Como se mencionó, este OA puede generar aprendizaje debido a que se
                  explica un contenido en particular y, posteriormente, se realiza un
                  reto práctico para validar el aprendizaje.
                </li>
                <li>
                  <strong>Interoperabilidad:</strong>
                  Debido a que este OA está en Genially, éste puede integrarse en
                  distintos sistemas, ya que vive en la web y se accede a él a través
                  de un link. Asimismo, Genially proporciona elementos de
                  responsividad con el fin de poder visualizarse adecuadamente en
                  distintos dispositivos.
                </li>
                <li>
                  <strong>Accesibilidad:</strong>
                  De acuerdo con lo establecido por García (2015, abril), el OA cumple
                  con este criterio, pues puede ser identificado, buscado y encontrado
                  debido al “etiquetado a través de diversos descriptores (metadatos)”
                  (p. 4). Sin embargo, cabría evidenciar que otros elementos que no
                  mencionó sobre la accesibilidad en recursos digitales no están
                  presentes, tales como texto alternativo, versiones en audio, lengua,
                  entre otros.
                </li>
                <li>
                  <strong>Durabilidad:</strong>
                  En términos concretos, el contenido del OA es vigente y actualizado,
                  por lo que no sería necesario hacer ajustes al menos por el momento.
                </li>
                <li>
                  <strong>Independencia y autonomía:</strong>
                  Respecto a este rubro, cabría mencionarse que el OA no cuenta con
                  independencia ni autonomía del sistema con el cual fue creado, ya
                  que, al vivir en la web, depende prácticamente del sitio de
                  Genially. A pesar de esto, Genially ya proporciona herramientas para
                  descargar tus creaciones en distintos formatos, uno de ellos es
                  SCORM, el cual le daría esa independencia y autonomía.
                </li>
                <li>
                  <strong>Generatividad:</strong>
                  La intención de este OA en términos de planeación con el cliente,
                  fue consolidar plantillas para que pudieran ser base para futuras
                  creaciones que se requirieran. Asimismo, este OA tiene potencial
                  para seguir complejizando en cuanto al contenido.
                </li>
                <li>
                  <strong>Flexibilidad, versatilidad y funcionalidad:</strong>
                  Este OA busca ser flexible y versátil en cuanto a su uso en diversos
                  contextos.
                </li>
              </ul>
              <br />
              <br />
              <p>
                <strong>OA analizado:</strong>
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
                    title="Copia - Espacios físicos de aprendizaje"
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
                    src="https://view.genial.ly/654c3b58db642400116339a5"
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
              <p>
                <strong>Conclusión:</strong>
                <br />
                Para finalizar, se puede observar que el presente OA cumple con la
                mayoría de las características planteadas por García (2015, abril),
                sin embargo, como gran área de oportunidad es sobre el elemento de
                accesibilidad. Si bien cumple con la definición planteada por el
                autor, es importante considerar otros elementos en la interactividad
                los cuales no sólo tienen que ver con la parte de producción, sino
                también con la parte del diseño de la experiencia del usuario (texto
                alternativo, versiones en audio, lengua, entre otros).
                <br />
                <br />
                Por ello surge preguntar, ¿cómo podemos complejizarlo desde el diseño
                tecno-pedagógico?
              </p>
              <br />
              <br />
              <br />
              <strong>Referencias:</strong>
              <ul>
                <li>
                  García, L. (2005, abril). Objetos de aprendizaje. Características y
                  repositorios. Editorial del Boletín Electrónico de Noticias de
                  Educación a Distancia.{" "}
                  <a href="http://e-spacio.uned.es/fez/eserv/bibliuned:327/editabril2005.pdf">
                    http://e-spacio.uned.es/fez/eserv/bibliuned:327/editabril2005.pdf
                  </a>
                </li>
                <li>
                  Weller, M. (2007). Learning Objects, Learning Design, and Adoption
                  Through Succession.{" "}
                  <i>Journal of Computing in Higher Education, 19</i>, 26–47.{" "}
                  <a href="https://doi.org/10.1007/BF03033418">
                    https://doi.org/10.1007/BF03033418
                  </a>
                </li>
              </ul>
              <br />
              <br />
              <br />
              <h1 id="teoria">Justificación de teoría del aprendizaje</h1>
              <br />
              <p>
                El Objeto de Aprendizaje (OA) que visité se fundamenta en la teoría
                del aprendizaje cognitivista. Como vimos en la sesión síncrona, el
                cognitivismo se destaca por enfocarse en los procesos mentales
                internos que intervienen en el aprendizaje, tales como la atención, la
                memoria y la resolución de problemas. En el OA, los objetivos y las
                instrucciones están diseñados para captar la atención del alumno y
                dirigir sus procesos cognitivos hacia la comprensión de los conceptos
                clave. Al presentar una explicación estructurada de los temas, se
                facilita la asimilación de la información, apoyando el proceso de
                construcción del conocimiento.
                <br />
                <br />
                Además, la inclusión de un reto práctico en el OA refleja la
                aplicación de los principios del modelo de aprendizaje de Gagné. Este
                modelo propone una serie de fases que van desde la atención inicial
                hasta la retroalimentación, integrando la práctica como un componente
                esencial del proceso de aprendizaje. En el ejercicio interactivo
                propuesto, los alumnos son desafiados a poner en práctica los
                conceptos aprendidos para resolver un problema relacionado en el
                campo. Esta aplicación práctica activa la transferencia de
                conocimiento y promueve un aprendizaje significativo al vincular los
                nuevos conceptos con situaciones del mundo real.
                <br />
                <br />
                La retroalimentación automatizada que se ofrece al finalizar el reto
                consolida la conexión con la teoría cognitivista al proporcionar
                explicaciones detalladas sobre respuestas correctas e incorrectas.
                Este proceso refuerza los conceptos adquiridos, identifica posibles
                malentendidos y guía a los alumnos hacia una comprensión más profunda.
                <br />
                <br />
                Considero que el OA que visité se alinea de manera efectiva con la
                teoría del cognitivismo. La estructura, que combina objetivos,
                instrucciones, explicaciones estructuradas, un desafío práctico y
                feedback automatizado, busca potenciar la capacidad cognitiva de los
                alumnos, promoviendo un aprendizaje activo, significativo y
                transferible.
                <br />
                <br />
                <br />
              </p>
              <h1 id="accesibilidad">Pantalla de audiodescripción</h1>
              <br />
              <p>
                Imagen de fondo ilustrativa de una hoja en blanco con lápices.
                <br />
                <br />
                En la esquina superior izquierda se encuentra un ícono con la letra
                “i” de información el cual funciona al hacer click en el mismo. Al
                hacer click sobre el ícono, se abrirá un modal con los siguientes
                textos:
                <br />
                <br />
                Título: “RETO”
                <br />
                <br />
                Párrafo: “Considerando la aplicación de la la técnica Mashups,
                identifica los pasos que son necesarios para una aplicación efectiva.”
                <br />
                <br />
                Título: “PROBLEMA”
                <br />
                <br />
                Párrafo: “Rodolfo es un relojero de gran trayectoria y prestigio, y le
                gustaría generar ideas para innovar y seguir creciendo su empresa.
                Para ello, requiere demostrar a su equipo de diseñadores lo rápido y
                fácil que puede ser llegar a ideas innovadoras en muy poco tiempo,
                creando conceptos disruptivos y combinando diferentes elementos
                juntos, por lo que deberá identificar los pasos para poder iniciar un
                MASH-UP.”
                <br />
                <br />
                Párrafo: “¡Identifica el orden que requiere seguir Rodolfo!”
                <br />
                <br />
                En la parte central superior, dentro un recuadro blanco se encuentran
                el título “¡Ponte a prueba!” y el párrafo “Arrastra las acciones de
                Mashups de los recuadros azules y colócalos en el orden cronológico de
                la técnica hacia los espacios en blanco”.
                <br />
                <br />
                En la parte central, del lado izquierdo se encuentran 8 recuadros de
                color azul que están divididos en dos columnas. Estos recuadros
                contienen los posibles pasos para resolver el reto. Estos recuadros
                tendrán que arrastrarse dejando presionado el cursor sobre ellos y
                arrastrándolos a los espacios en blanco que se encuentran de lado
                central derecho, los cuales están enumerados del uno al cinco.
                <br />
                <br />
                Los recuadros azules arrastrables contienen los siguientes textos. En
                la primera columna, los primeros cuatro recuadros
                <br />
                <br />
                PÁRRAFO: “Contextualizar la experiencia de tu usuario”
                <br />
                PÁRRAFO: “Lluvia de post-its”
                <br />
                PÁRRAFO: “Define el foco del estudio”
                <br />
                PÁRRAFO: “¡Mash up time!”
                <br />
                PÁRRAFO: “Coloca post it por columna”
                <br />
                PÁRRAFO: “Crea una historia acerca de alguien”
                <br />
                PÁRRAFO: “Define las categorías”
                <br />
                PÁRRAFO: “Selección de enunciados”
                <br />
                <br />
                En la parte inferior, se encuentra un botón naranja con el texto
                “Verificar”. Este botón dará una respuesta autómatica al momento de
                arrastrar los recuadros a sus lugares correspondientes. Si la
                respuesta es incorrecta, regresará los recuadros incorrectos a su
                lugar inicial. Si la respuesta es correcta, aparecerá un ícono de
                respuesta correcta a un costado del recuadro correspondiente.
                <br />
                <br />
                Cuando se dé click en verificar y los recuadros están en sus lugares
                correspondientes, aparecerá un recuadro con el título “¡Muy bien” y el
                párrafo “Haz clic en los botones para recibir retroalimentación”.
                <br />
                <br />
                Asimismo, aparecerán recuadros de información en los que se explica el
                por qué de las respuestas incorrectas y correctas.
                <br />
                <br />
                Asimismo, el botón de “Verificar” cambiará y aparecerá un nuevo botón
                sustituyéndolo en la parte inferior el cual tiene de texto
                “Continuar”. Al hacer clic sobre él, te llevará a la siguiente página.
              </p>
              <img
                style={{ borderRadius: "5rem" }}
                className="audiodescripcion"
                src={imagen}
                alt="Pantalla Audiodescripcion"
              />
            </div>
          </article>
        </section>
        <Card />
      </>
   
    );
}

export default Micro