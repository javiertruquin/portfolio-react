import React from "react";

export default function CardProyecto({ data }) {
    const { titulo, descripcion, imagen,imagencelu, link } = data;

    return (
        <div>
            <div
                className="card d-sm-flex d-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                        imagen +
                        ")",
                }}
            >
                <div className="content">
                    <h1 className="tamaño-bold title-cards">{titulo}</h1>
                    <p className="text-cards tamaño-medium">{descripcion}</p>
                    <a
                        href={link ? link : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn tamaño-medium"
                    >
                        Visitar
                    </a>
                </div>
            </div>
            {/* CAMBIO TAMAÑO */}
            <div
                className="card d-flex d-sm-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
                        imagencelu +
                        ")",
                }}
            >
                <div className="content">
                    <h1 className="tamaño-bold">{titulo}</h1>
                    <p className="tamaño-medium">{descripcion}</p>
                    <a
                        href={link ? link : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn tamaño-medium"
                    >
                        Visitar
                    </a>
                </div>
            </div>
        </div>
    );
}
