import React from "react";
import Fade from "react-reveal/Fade";

export default function Header() {
    return (
        <div className="section fondo-banner" id="home">
            <div className="container">
                <div className="titulo-principal">
                    <Fade right>
                        <h1 className="tamaño-bold mt-5 mb-3 mb-lg-5">Hola, yo soy Javier</h1>
                    </Fade>
                    <Fade right cascade>
                        <div className="tamaño-bold mb-3 mb-lg-5">
                            <h2>Creaciones digitales</h2>
                            <h2>diseños unicos</h2>
                            <h2>e intuitivos</h2>
                        </div>
                    </Fade>
                    <Fade right >
                        <p className="tamaño-bold d-none d-sm-block">
                            <b>
                                Sientete libre de consultar por cualquiera de
                                mis proyectos, o bien, para la creacion de algun
                                proyecto para tu emprendimiento personal o
                                empresa
                            </b>
                        </p>
                    </Fade>
                    <Fade right>
                        <a
                            href={`mailto:${"javiertruquin@gmail.com"}`}
                            className="primary-btn tamaño-medium"
                        >
                            CONTACTAME ✉
                        </a>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
