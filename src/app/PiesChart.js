import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const dataByYear = {
  '2020': {
    labels: [
      'Marzo 2020',
      'Abril 2020',
      'Mayo 2020',
      'Junio 2020',
      'Julio 2020',
      'Agosto 2020',
      'Septiembre 2020',
      'Octubre 2020',
      'Noviembre 2020',
      'Diciembre 2020',
    ],
    data: [
      1197361,
      189207,
      101897,
      703083,
      517629,
      807090,
      421662,
      454059,
      304582,
      179664,
      
    ],
  },
  '2021': {
    labels: [
      'Enero 2021',
      'Febrero 2021',
      'Marzo 2021',
      'Abril 2021',
      'Mayo 2021',
      'Junio 2021',
      'Julio 2021',
      'Agosto 2021',
      'Septiembre 2021',
      'Octubre 2021',
      'Noviembre 2021',
      'Diciembre 2021',
    ],
    data: [
      320647,
      259834,
      214987,
      318859,
      195232,
      134577,
      210505,
      245798,
      195584,
      168133,
      125056,
      140776,
      
    ],
  },
  '2022': {
    labels: [
      'Enero 2022',
      'Febrero 2022',
      'Marzo 2022',
      'Abril 2022',
      'Mayo 2022',
      'Junio 2022',
      'Agosto 2022',
      'Septiembre 2022',
      'Octubre 2022',
    ],
    data: [
      151493,
      71268,
      10103,
      63481,
      23522,
      12968,
      9913,
      43292,
      25537,
    ],
  },
};

const defaultColors = [
  'rgba(255, 99, 132, 1.2) ',// (Rojo)
  'rgba(54, 162, 235, 1.2)', //(Azul)
 ' rgba(255, 206, 86, 1.2) ',//(Amarillo)
 ' rgba(75, 192, 192, 1.2)' ,//(Verde)
  'rgba(153, 102, 255, 1.2)' ,//(Morado)
  'rgba(255, 159, 64, 1.2)' ,//(Naranja)
  'rgba(255, 0, 0, 1.2) ',//(Rojo)
  'rgba(0, 255, 0, 1.2)', //(Verde)
  'rgba(0, 0, 255, 1.2)' ,//(Azul)
  'rgba(255, 0, 255, 1.2)', //(Magenta)
  'rgba(0, 255, 255, 1.2)', //(Cian)
  'rgba(128, 0, 0, 1.2)' ,//(Rojo oscuro)
  'rgba(0, 128, 0, 1.2)', //(Verde oscuro)
 ' rgba(0, 0, 128, 1.2)', //(Azul oscuro)
 ' rgba(128, 128, 0, 1.2)', //(Amarillo verdoso)
  'rgba(128, 0, 128, 1.2)', //(Morado oscuro)
  'rgba(0, 128, 128, 1.2)', //(Turquesa)
  'rgba(128, 128, 128, 1.2)', //(Gris)
  'rgba(255, 99, 71, 1.2)', //(Rojo coral)
  'rgba(124, 252, 0, 1.2)', //(Verde amarillento)
  'rgba(210, 105, 30, 1.2)', //(Naranja chocolate)
  'rgba(106, 90, 205, 1.2)' ,//(Azul violeta)
  'rgba(220, 20, 60, 1.2)' ,//(Rojo carmín)
  'rgba(0, 128, 128, 1.2)', //(Azul verdoso)
 ' rgba(107, 142, 35, 1.2)', //(Verde oliva)
  'rgba(255, 215, 0, 1.2)', //(Amarillo oro)
  'rgba(0, 191, 255, 1.2)', //(Azul claro)
  'rgba(255, 0, 255, 1.2)' ,//(Magenta)
  'rgba(72, 61, 139, 1.2)', //(Azul real)
  'rgba(255, 140, 0, 1.2)', //(Naranja oscuro)
  'rgba(176, 224, 230, 1.2)' ,//(Azul celeste)
 ' rgba(255, 192, 203, 1.2)' ,//(Rosa claro)
];

var options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left', // Coloca las leyendas en la parte superior
      align: 'center', // Centra las leyendas horizontalmente
      labels: {
        boxWidth: 12,
        font: {
          size: 12,
          weight: 'bold'
        },
        color: 'black'
      }
    }
  },
  layout: {
    padding: {
      top: 4 // Espacio adicional en la parte superior para dejar espacio para las leyendas
    }
  }
};



export default function Pies() {
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
        backgroundColor: selectedData.data.map((_, index) => defaultColors[index % defaultColors.length]),
        borderColor: '#2e2e2e',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='filtro4' style={{ margin: '0 8px 0 18px',
    backgroundColor: 'beige' }}>
      <label htmlFor="filtro4" style={{marginRight:"5px"}}>Seleccionar Año: </label>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="2020">Año 2020</option>
          <option value="2021">Año 2021</option>
          <option value="2022">Año 2022</option>
        </select>
        <div className="chart-wrapper"  style={{  height: '382px'}} >
        <Pie data={filteredData} options={options} height={100}  />
        </div>
    </div>
  );
}
