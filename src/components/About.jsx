import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
    return (
        <div className="secion" id="about">
            <div className="container">
                <div className="about-section">
                    <div className="content">
                        <Fade right >
                            <h1 className="tamaño-bold mb-5 text-nowrap ">Sobre mí</h1>
                        </Fade>
                        <Fade right>
                            <p className="tamaño-medium me-3">
                                Hola, Soy Javier Truquin, soy programador
                                front-end en javascript. Me esfuerzo en mejorar
                                y aprender todo lo que sea necesario para nuevos
                                desafíos.
                                <br></br>
                                <br></br>
                                Como programador mi objetivo es optimizar la
                                practicidad del sistema, sin perder el foco del
                                atractivo visual del proyecto.
                                <br></br>
                                <br></br>
                                Como pasatiempo me gustan las series, películas
                                y videos juegos.
                            </p>
                        </Fade>
                    </div>
                    <div className="image-wrapper">
                        <img
                            className="imagen-about"
                            src="https://res.cloudinary.com/dwwta0kis/image/upload/v1633464662/Portfolio/117949552_4528920750482205_7077292127736344503_o_rcydt2.jpg"
                            alt="about"
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
