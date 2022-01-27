import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import Fade from "react-reveal/Fade";

export default function Skills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const getSkills = async () => {
            const response = await axios.get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2V0apEYIfj-MPLskm4rgKwd0-4lD88CaEElT8kTeIya5uaN0-vY2p9nkcwSqQw4KLlCkQy3CZJgo6/pub?gid=1448552078&single=true&output=csv"
            );

            const dotes = Papa.parse(response.data, { header: true });

            setSkills(dotes.data);
        };
        getSkills();
    }, []);

    return (
        <div className="section">
            <div className="container">
                <div className="skills-container">
                    <Fade right>
                        <h1 className="tamaño-bold">Skills</h1>
                    </Fade>
                    <div className="skills-grid ">
                        {skills.map((skill, index) => (
                            <Fade right>
                                <div className="skill" key={index}>
                                    <img
                                        src={skill.imagen}
                                        alt={skill.titulo}
                                    ></img>
                                    <p className="tamaño-medium">
                                        {skill.titulo}
                                    </p>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
