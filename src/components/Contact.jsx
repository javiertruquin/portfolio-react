import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import Fade from "react-reveal/Fade";

export default function Contact() {
    const [contacto, setContacto] = useState([]);

    useEffect(() => {
        const getContacto = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2V0apEYIfj-MPLskm4rgKwd0-4lD88CaEElT8kTeIya5uaN0-vY2p9nkcwSqQw4KLlCkQy3CZJgo6/pub?gid=1877804502&single=true&output=csv"
            );

            const dotes = Papa.parse(response.data, { header: true });

            setContacto(dotes.data);
        };
        getContacto();
    }, []);

    return (
        <div className="section">
            <div className="container">
                <div className="skills-container">
                    <Fade right>
                        <h1 className="tamaño-bold">Contactame</h1>
                        <h2 className=" my-5">Creemos juntos tu próxima experiencia</h2>
                        <a
                            className="email-contacto"
                            href={`mailto:${"javiertruquin@gmail.com"}`}
                        >
                            javiertruquin@gmail.com
                        </a>
                    </Fade>
                    <div className="skills-grid mb-5">
                        {contacto.map((contacto, index) => (
                            <Fade right>
                                <div className="skill " key={index}>
                                    <a href={contacto.url} className="hover-icono">
                                        <img
                                            src={contacto.imagen}
                                            alt={contacto.titulo}
                                        ></img>
                                    </a>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
