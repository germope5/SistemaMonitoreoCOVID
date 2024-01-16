import React from 'react';
import { Line } from 'react-chartjs-2'; // Importa el componente de gráfico de líneas de react-chartjs-2
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js'; // Importa elementos y configuraciones de Chart.js
import moment from 'moment'; // Importa la biblioteca moment para el manejo de fechas y horas
import 'moment/locale/es-mx'; // Establece el idioma de moment a español mexicano

// Registra los elementos necesarios de Chart.js
ChartJS.register(Tooltip, Legend);

// Datos de ejemplo para los años 2020, 2021 y 2022
const dataByYear = {
  '2020': {
    data: [0, 0, 1197361, 189207, 101897, 703083, 517629, 807090, 421662, 454059, 304582, 179664],
  },
  '2021': {
    data: [320647, 259834, 214987, 318859, 195232, 134577, 210505, 245798, 195584, 168133, 125056, 140776],
  },
  '2022': {
    data: [151493, 71268, 10103, 63481, 23522, 12968, 0, 9913, 43292, 25537, 0, 0],
  },
};

// Opciones de configuración del gráfico
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        stepSize: 100000,
        callback: function (value, index, values) {
          return value.toLocaleString('es-mx'); // Formatea los valores del eje Y con formato de número en español
        },
      },
      min: 0,
    },
  },
  plugins: {
    legend: {
      position: 'top',
      align: 'center',
      labels: {
        boxWidth: 12,
        font: {
          size: 12,
          weight: 'bold',
        },
        color: 'black',
      },
    },
  },
  layout: {
    padding: {
      top: 4,
    },
  },
};

export default function LinesChart2() {
  // Datos del gráfico
  const chartData = {
    labels: moment.months({ locale: 'es-mx' }), // Etiquetas de los meses en español mexicano
    datasets: [
      {
        label: 'Año 2020',
        data: dataByYear['2020'].data, // Datos del año 2020
        tension: 0.5,
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Color de fondo de la línea
        borderColor: 'rgb(255, 0, 0)', // Color del borde de la línea
        borderWidth: 1,
        fill: true, // Relleno debajo de la línea
        pointBackgroundColor: 'rgb(255, 0, 0)', // Color de los puntos en la línea
        pointRadius: 5, // Tamaño de los puntos
      },
      {
        label: 'Año 2021',
        data: dataByYear['2021'].data, // Datos del año 2021
        tension: 0.8,
        backgroundColor: 'rgba(255, 206, 86, 0.5)', // Color de fondo de la línea
        borderColor: 'rgb(255, 165, 0)', // Color del borde de la línea
        borderWidth: 1,
        fill: true, // Relleno debajo de la línea
        pointBackgroundColor: 'rgb(255, 165, 0)', // Color de los puntos en la línea
        pointRadius: 5, // Tamaño de los puntos
      },
      {
        label: 'Año 2022',
        data: dataByYear['2022'].data, // Datos del año 2022
        tension: 0.3,
        backgroundColor: 'rgba(0, 154, 238, 0.5)', // Color de fondo de la línea
        borderColor: 'rgb(0, 0, 255)', // Color del borde de la línea
        borderWidth: 1,
        fill: true, // Relleno debajo de la línea
        pointBackgroundColor: 'rgb(0, 0, 255)', // Color de los puntos en la línea
        pointRadius: 5, // Tamaño de los puntos
      },
    ],
  };

  return (
    <div className="chart-wrapper2" style={{  height: '382px'}} >
      {/* Renderiza el gráfico de líneas */}
      <Line data={chartData} options={options} height={100}  />
    </div>
  );
}
