import '../public/App.css'; // Importa estilos CSS
import HorizontalBarChart from "./HorizontalBarChart"; // Importa el componente HorizontalBarChart
import React from "react"; // Importa la biblioteca React

function ModeladoTopicos() {
    return (
        <div className="ModeladoTopicos">
            <h1 className="bg-title-modelado" style={{ marginBottom: "40px", fontSize: "28px" }}>
                Descubrimiento de Tópicos
            </h1>
            <HorizontalBarChart />
        </div>
    );
}

export default ModeladoTopicos;