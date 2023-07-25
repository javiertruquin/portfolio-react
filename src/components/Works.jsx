import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Papa from "papaparse";
import axios from "axios";
import CardPro from "./CardPro";

export default function Works() {
    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        const getProyectos = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2V0apEYIfj-MPLskm4rgKwd0-4lD88CaEElT8kTeIya5uaN0-vY2p9nkcwSqQw4KLlCkQy3CZJgo6/pub?gid=0&single=true&output=csv"
            );

            const paginas = Papa.parse(response.data, { header: true });

            setProyectos(paginas.data);
        };
        getProyectos();
    }, []);

    return (
        <div className="section my-5" id="work">
            <div className="container mb-5">
                <div className="work-wrapper">
                    <Fade right>
                        <h1 className="tamaño-bold mt-5 mb-5">Trabajos</h1>
                    </Fade>

                    <div className="grid mt-5">
                        {proyectos.map((pro, id) => (
                            <Fade right cascada>
                                <CardPro key={id} data={pro} />
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
