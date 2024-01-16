import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "./TopicsVisualization.css";
import jsonData from "../Topicos.json";

const TopicsVisualization = ({ onMonthSelect, onTopicSelect }) => {
  // Ref para acceder al elemento SVG
  const svgRef = useRef();
  // Estados para el mes y el tópico seleccionados
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(0);

  // Manejador para cuando se hace clic en un tópico
  const handleTopicClick = (topicNumber) => {
    setSelectedTopic(topicNumber);
    onTopicSelect(topicNumber);
  };

  // Efecto que se ejecuta cuando cambian los valores de selectedMonth o selectedTopic
  useEffect(() => {
    // Dimensiones y margen para el SVG
    const width = 800;
    const height = 600;
    const margin = { left: 40 };
    // Selección del elemento SVG y configuración de dimensiones
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Elimina todos los elementos dentro del SVG (limpieza previa)
    svg.selectAll("*").remove();

    // Obtiene los datos de palabras para el mes y tópico seleccionados
    const wordsData = jsonData[selectedMonth].topics[selectedTopic].words;

    // Obtiene las palabras como una matriz de claves
    const words = Object.keys(wordsData);

    // Configuración para la disposición de círculos
    const circleRadius = 55;
    const circlePadding = 4;
    const circlesPerRow = 5;

    // Creación de círculos en el SVG para cada palabra
    const circles = svg
      .selectAll(".circle")
      .data(words)
      .enter()
      .append("circle")
      .attr("class", "circle")
      .attr("cx", (d, i) => margin.left + circlePadding + circleRadius + (i % circlesPerRow) * (2 * (circleRadius + circlePadding)))
      .attr("cy", (d, i) => circlePadding + circleRadius + Math.floor(i / circlesPerRow) * (2 * (circleRadius + circlePadding)))
      .attr("r", circleRadius)
      .attr("fill", "rgba(24, 172, 40, 1.5)")
      .on("mouseover", function(event, d) {
        // Cambia el tamaño y el color del círculo al pasar el mouse
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", circleRadius * 1.2);
        d3.select(this).attr("fill", "rgb(0, 115, 230)");
      })
      .on("mouseout", function(event, d) {
        // Restaura el tamaño y el color del círculo al quitar el mouse
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", circleRadius);
        d3.select(this).attr("fill", "rgba(24, 172, 40, 1.5)");
      });

    // Creación de etiquetas de texto para cada palabra
    const labels = svg
      .selectAll(".circle-label")
      .data(words)
      .enter()
      .append("text")
      .attr("class", "circle-label")
      .attr("x", (d, i) => margin.left + circlePadding + circleRadius + (i % circlesPerRow) * (2 * (circleRadius + circlePadding)))
      .attr("y", (d, i) => circlePadding + circleRadius + Math.floor(i / circlesPerRow) * (2 * (circleRadius + circlePadding)))
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(d => d)
      .on("mouseover", function(event, d) {
        // Cambia el estilo del texto al pasar el mouse
        d3.select(this)
          .style("font-weight", "bold")
          .style("font-size", "16px");
      })
      .on("mouseout", function(event, d) {
        // Restaura el estilo del texto al quitar el mouse
        d3.select(this)
          .style("font-weight", "bold")
          .style("font-size", "12px");
      });
  }, [selectedMonth, selectedTopic]);

  return (
    <div className="visualization-container">
      <div className="menu" style={{ marginBottom: "10px" }}>
        {/* Selector de mes */}
        <label htmlFor="monthSelect" style={{ color: "white", marginRight: "5px" }}>Selecciona un mes:</label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={(event) => {
            // Actualiza el mes seleccionado
            const selectedValue = parseInt(event.target.value);
            setSelectedMonth(selectedValue);
            onMonthSelect(selectedValue);
          }}
          style={{ marginBottom: "10px" }}
        >
          {/* Genera opciones para seleccionar un mes */}
          {jsonData.map((monthData, index) => (
            <option key={index} value={index}>
              {monthData.month}
            </option>
          ))}
        </select>
        <div className="buttons-container">
          {/* Botones para seleccionar un tópico */}
          {jsonData[selectedMonth].topics.map((topicData) => (
            <button
              key={topicData.topicNumber}
              onClick={() => handleTopicClick(topicData.topicNumber)}
              className={topicData.topicNumber === selectedTopic ? "selected-button" : ""}
            >
              Tópico {topicData.topicNumber}
            </button>
          ))}
        </div>
      </div>
      {/* Elemento SVG donde se visualizan las palabras */}
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default TopicsVisualization;
