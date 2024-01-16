//Librerías necesarias para el funcionamiento del Gráfico de Barras
import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Colores predeterminados para las barras.
const defaultColors = [
  'rgba(255, 99, 132, 0.3)',
  'rgba(54, 162, 235, 0.3)',
  'rgba(255, 206, 86, 0.3)',
  'rgba(75, 192, 192, 0.3)',
  'rgba(153, 102, 255, 0.3)',
  'rgba(255, 159, 64, 0.3)',
  'rgba(255, 0, 0, 0.3)',
  'rgba(0, 255, 0, 0.3)',
  'rgba(0, 0, 255, 0.3)',
  'rgba(255, 0, 255, 0.3)',
  'rgba(0, 255, 255, 0.3)',
  'rgba(128, 0, 0, 0.3)',
  'rgba(0, 128, 0, 0.3)',
  'rgba(0, 0, 128, 0.3)',
  'rgba(128, 128, 0, 0.3)',
  'rgba(128, 0, 128, 0.3)',
  'rgba(0, 128, 128, 0.3)',
  'rgba(128, 128, 128, 0.3)',
  'rgba(255, 99, 71, 0.3)',
  'rgba(124, 252, 0, 0.3)',
  'rgba(210, 105, 30, 0.3)',
  'rgba(106, 90, 205, 0.3)',
  'rgba(220, 20, 60, 0.3)',
  'rgba(0, 128, 128, 0.3)',
  'rgba(107, 142, 35, 0.3)',
  'rgba(255, 215, 0, 0.3)',
  'rgba(0, 191, 255, 0.3)',
  'rgba(255, 0, 255, 0.3)',
  'rgba(72, 61, 139, 0.3)',
  'rgba(255, 140, 0, 0.3)',
  'rgba(176, 224, 230, 0.3)',
  'rgba(255, 192, 203, 0.3)',
];

//Ajustes del gráfico
var options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 200000, // Puedes ajustar el intervalo de los valores en el eje Y
      },
    },
  },
};

//Función del Gráfico de Barras
export default function Bars() {
  const [selectedYear, setSelectedYear] = useState('2020');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Filtrar los datos para el año seleccionado
  const selectedData = dataByYear[selectedYear];
  const filteredData = {
    labels: selectedData.labels,
    datasets: [
      {
        label: 'Cantidad de Tweets por Mes-Año',
        data: selectedData.data,
        backgroundColor: defaultColors,
        borderColor: '#2e2e2e', // Color de borde para las barras
        borderWidth: 1, // Grosor del borde de las barras
      },
    ],
  };

  //Código JSX que muestra el gráfico en la Aplicación Web
  return (
    <div className='filtro4' style={{ backgroundColor: 'beige',margin: '0 0 0 28px'}}>
      <label htmlFor='filtro4'>Seleccionar Año: </label>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value='2020'>Año 2020</option>
        <option value='2021'>Año 2021</option>
        <option value='2022'>Año 2022</option>
      </select>
      <div className="chart-wrapper"  style={{  height: '382px'}} >
      <Bar data={filteredData} options={options} />
      </div>
    </div>
  );
}
