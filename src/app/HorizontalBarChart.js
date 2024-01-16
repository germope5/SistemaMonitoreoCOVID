import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TopicsVisualization from '../app/TopicsVisualization.js';
import jsonData from "../Topicos.json";

// Registra los componentes y escalas necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const HorizontalBarChart = () => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedNumberTopic, setSelectedNumberTopic] = useState(0);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (selectedNumberTopic !== null) {
      // Obtiene los datos del tópico seleccionado para el mes actual
      const topicData = jsonData[selectedMonth].topics.find(
        (topic) => topic.topicNumber === selectedNumberTopic
      );

      if (topicData) {
        const words = topicData.words;

        // Ordena las palabras y sus frecuencias de mayor a menor frecuencia
        const sortedWords = Object.entries(words)
          .sort((a, b) => b[1] - a[1])
          .reduce((acc, [word, frequency]) => {
            acc[word] = frequency;
            return acc;
          }, {});

        // Crea los datos para el gráfico de barras
        const data = {
          labels: Object.keys(sortedWords),
          datasets: [
            {
              label: "Frecuencia de Aparición",
              data: Object.values(sortedWords),
              backgroundColor: "#00af3a",
              hoverBackgroundColor: "#0073e6",
            },
          ],
        };

        // Establece los datos para el gráfico
        setChartData(data);
      }
    }
  }, [selectedMonth, selectedNumberTopic]);

  const handleMonthSelect = (newMonth) => {
    setSelectedMonth(newMonth);
    setSelectedNumberTopic(0); // Restablece el Número de Tópico seleccionado al cambiar de mes
  };

  const handleTopicSelect = (topicNumber) => {
    setSelectedNumberTopic(topicNumber);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div>
        {/* Componente TopicsVisualization para seleccionar mes y tópico */}
        <TopicsVisualization
          onMonthSelect={handleMonthSelect}
          onTopicSelect={handleTopicSelect}
        />
      </div>
      <div
        style={{
          backgroundColor: "beige",
          marginTop: "70px",
          marginRight: "80px",
          marginBottom: "20px",
          borderRadius: "10px",
          overflow: "hidden",
          height: "500px"
        }}
      >
        {/* Gráfico de barras */}
        {chartData && (
          <Bar
            data={chartData}
            options={{
              maintainAspectRatio: false,
              indexAxis: "y",
              scales: {
                x: {
                  beginAtZero: true,
                },
                y: {
                  beginAtZero: true,
                  offset: true,
                  ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                  },
                },
              },
              plugins: {
                legend: {
                  display: true,
                  position: "top",
                },
              },
              filler: {
                propagate: false,
                backgroundColor: "lightblue",
                borderWidth: 3,
              },
            }}
            width={450}
            height={500}
          />
        )}
      </div>
    </div>
  );
};

export default HorizontalBarChart;
