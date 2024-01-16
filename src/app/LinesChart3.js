import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; // Importa el componente de gráfico de líneas de react-chartjs-2
import moment from 'moment'; // Importa la biblioteca moment para el manejo de fechas y horas
import SearchPeriod from './SearchPeriod'; // Importa un componente llamado SearchPeriod (debe ajustarse a la ruta real)
import '../public/App.css'; // Importa estilos CSS
import 'moment/locale/es-mx'; // Establece el idioma de moment a español mexicano
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'; // Importa elementos y configuraciones de Chart.js

// Registra los elementos necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LinesChart = () => {
  const [selectedCollection, setSelectedCollection] = useState('Marzo 2020'); // Estado para almacenar el mes seleccionado
  const [data, setData] = useState([]); // Estado para almacenar los datos del gráfico
  const [chartData, setChartData] = useState(); // Estado para almacenar los datos del gráfico en el formato requerido
  moment.locale('es-mx'); // Establece el idioma de moment a español mexicano

  // Objeto de datos de ejemplo para cada mes (debe reemplazarse con datos reales)
  const dataByMonth = {
    'Marzo 2020': {
      data: [53326 , 36778, 84382, 25445,13730,0,0,50086,44786,49674,49264,21557,
        32786 ,8519,14906,18306,13221,41288,39167,42157,14884,88599,101521,63193,
        70811,79270,44979 ,30637,23097,26876,14128],
    },
    'Abril 2020': {
      data: [4268,8526,5729,7932 ,4881,6601,9722,12795,8402,6835,6950,6938,10589,
        1707,593, 9512, 6893, 6230 , 3437 , 5087, 5417, 4422, 2302, 2788,2634,7686,
        4605, 7867, 5416, 6048,0
      ],
    },
    'Mayo 2020': {
      data: [5011,5781,3851 , 3855, 2894, 6928, 5397, 5397,5197,2314, 3660, 4240, 3470,
        1543, 2496, 2502, 4039, 3289, 1723,  2700, 3466, 1735, 3279, 2119, 1924, 4427,
        3269, 1744, 1351, 1724,0
      ],
    },
    'Junio 2020': {
      data: [8810,18621,29154,23148,29255,17348,19271,24974,19082,26905,35535,11422,
        22701,20944,28996,27597,29802,29977,29157,18767,16516,29870,27320 ,
        25103,30986,24911,17118,15333,22970,22718,0],
    },
    'Julio 2020': {
      data: [26654,17569,25706,17062,6478 ,17112,7776,0,8573,20337,15331,14745,21777,26633,
        26503,28678,22843,1730,16935,27258,17309,23159,21496,11393,0,0,13854,13661,22222,
        7837,21542],
    },
    'Agosto 2020': {
      data: [14208,12563,9751 ,18265,19918,19965,20230,11847,15168,11266,
        24381,69016,77551,13033,3141,11632,74201,97224,73780,34243,19599,12567,2428,
        22323,22097,17696,17417,20680,13488,9176,18837],
    },
    'Septiembre 2020': {
      data: [59,18797,17390,16083,12102,9715,16503,20663,19016,15362,13279,9566,10454,16385,14097,
        14673,17516,16847,8323,11586,10783,16471,16430,15471,16190,10807,9728,13086,18080,16199,0],
    },
    'Octubre 2020': {
      data: [16168,20255,12102,9690,16836,22256,18873,19231,16307,10961,10925,983,0,0,5176,17542,8803,
        11473,20705,20880,20889,19907,19060,15816,18725,21594,22627,11568,23122,20945,628],
    },
    'Noviembre 2020': {
      data: [0,5801,15010,19657,14939,19864,11864,10431,18989,10365,13174,12948,4717,0,0,0,9716,17528,
        14463,15813,12238,5207,11719,12392,8604,12213,10610,4857,3377,8085,0],
    },
    'Diciembre 2020': {
      data: [10868,0,0,0,0,0,0,0,10263,19921,13124,5516,6402,8508,13401,12382,17993,10782,5962,12003,
        13210,8323,11005,0,0,0,0,0,0,0,0],
    },
    'Enero 2021': {
      data: [0,0,0,674,5209,16025,19646,15492,2901,1939,15537,16427,25321,20329,21293,6846,7543,14177,19784,
        10877,0,0,0,0,14392,18472,18330,18212,16941,4142,10138],
    },
    'Febrero 2021': {
      data: [17589,13226,536,0,9124,9954,4557,15871,11245,15192,10229,12814,3901,5469,9791,8486,11096,
        14011,13375,7553,5024,8175,12350,5514,9938,14912,6154,3747,0,0,0],
    },
    'Marzo 2021': {
      data: [10750,15742,13950,9547,4305,0,0,2865,6813,11994,12693,15685,857,2987,5244,0,2523,15323,
        17002,3182,581,14082,6774,15272,12094,6719,7915,0,0,0,0],
    },
    'Abril 2021': {
      data: [0,0,0,0,8968,19989,15816,14490,17997,5963,5347,11352,13880,11760,11798,11077,1388,9553,13254,
        11880,13130,17132,16483,11833,11166,17090,10708,10529,11578,14697,0],
    },
    'Mayo 2021': {
      data: [478,3519,11235,11414,13024,12375,10173,0,0,0,4773,7942,6084,9521,2913,3466,8066,5135,
        3350,8907,5686,7921,0,6372,11920,9071,14206,10233,0,0,7438],
    },
    'Junio 2021': {
      data: [14575,10549,13724,572,1863,3220,7551,6096,9920,9574,6053,3149,2508,5837,2649,7054,
        8092,4770,0,0,4409,8977,1620,0,0,0,0,0,0,1814,0],
    },
    'Julio 2021': {
      data: [9873,17,0,0,0,0,0,820,9561,8055,5798,12853,14123,13750,11825,12602,0,0,6087,10025,13478,
        12637,1425,7813,3161,934,13099,9150,12276,12891,8352],
    },
    'Agosto 2021': {
      data: [6162,11033,9923,9947,11531,11785,308,0,934,12461,12405,10040,24827,7373,6346,10292,11571,
        12290,10889,11075,631,0,0,6492,10886,10424,9519,813,0,6395,9446],
    },
    'Septiembre 2021': {
      data: [6621,10240,10196,6676,4943,10365,10714,9144,12313,8642,2832,0,6224,8485,8029,0,0,0,0,
        2719,9930,8342,8675,8931,5487,5020,8879,7047,7645,7485,0],
    },
    'Octubre 2021': {
      data: [7030,87,0,3940,7301,8005,8077,7221,4091,3773,5480,6108,7327,5905,6615,4238,4381,7106,
        7727,6537,7631,6878,4712,4232,6666,6584,6506,7043,6932,0,0],
    },
    'Noviembre 2021': {
      data: [0,187,214,7008,6547,4605,3167,6326,6218,5977,5927,6416,3974,3801,6176,6321,6422,5988,6167,
        4476,4408,6474,7040,6672,5,911,1471,2114,19,25,0],
    },
    'Diciembre 2021': {
      data: [1377,670,320,5119,3320,4512,7563,6562,6718,6202,3545,4361,6984,7427,6060,7056,6309,5217,
        4867,8516,11626,10309,9180,6955,0,0,0,0,0,0,0],
    },
    'Enero 2022': {
      data: [0,0,0,0,0,7003,7175,9273,9045,15999,15208,13817,13052,8463,3151,11,9676,12315,4125,4888,
        9600,2782,0,0,0,0,0,0,0,0,5908],
    },
    'Febrero 2022': {
      data: [8997,7364,6657,7067,769,0,0,0,0,0,0,0,0,0,0,4160,5860,6202,4174,4289,6465,3496,2489,0,0,
        47,8,3223,0,0,0],
    },
    'Marzo 2022': {
      data: [2963,0,0,0,419,13,14,10,7,13,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,3529,3122],
    },
    'Abril 2022': {
      data: [3368,2189,1857,3927,3595,3358,3655,3458,2341,2250,3911,4141,124,2149,2646,3251,2287,4426,
        4630,3472,2387,0,0,0,0,0,59,0,0,0,0],
    },
    'Mayo 2022': {
      data: [60,786,0,0,1883,2730,557,0,0,0,0,0,0,0,0,0,0,1532,2794,12,2610,2238,2321,2181,1434,934,
        1144,306],
    },
    'Junio 2022': {
      data: [2626,1122,1946,1390,1302,2896,1686,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    },
    'Agosto 2022': {
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,893,1089,1310,798,2023,1820,1980],
    },
    'Septiembre 2022': {
      data: [1571,1845,992,962,1956,1828,1079,23,1370,1011,1374,1714,1832,1815,1834,1201,1051,1150,
        1876,1909,1651,1704,1706,1006,1204,1750,1608,1369,1348,1553,0],
    },
    'Octubre 2022': {
      data: [966,840,1881,1878,1651,1437,1272,441,0,0,0,806,1773,1377,831,781,1422,1471,1315,1244,
        1016,663,0,670,1259,543,0,0,0,0,0],
    },



  };

  useEffect(() => {
    if (selectedCollection) {
      // Reemplaza esta llamada a la API con tu lógica para obtener los datos del objeto dataByMonth
      const monthData = dataByMonth[selectedCollection].data;
      setData(monthData);
    }
  }, [selectedCollection]);

  useEffect(() => {
    if (data.length > 0) {
      const dayCounts = {};

      // Procesa los datos para contar los valores por día
      data.forEach((count, index) => {
        const day = index + 1;
        const month = moment(selectedCollection, 'MMMM YYYY').format('MMMM');
        const formattedDate = `${day.toString().padStart(2, '0')} / ${month}`;

        if (!dayCounts[formattedDate]) {
          dayCounts[formattedDate] = 0;
        }
        dayCounts[formattedDate] = count;
      });

      // Convierte los datos procesados en etiquetas y valores para el gráfico
      const formattedLabels = Object.keys(dayCounts);
      const dayTotals = Object.values(dayCounts);

      // Aquí puedes forzar la recolección de basura
      if (global.gc) {
        global.gc();
      }

      // Define los conjuntos de datos para el gráfico
      const datasets = [
        {
          label: selectedCollection,
          data: dayTotals,
          tension: 0.7,
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          pointBackgroundColor: '75, 192, 192',
          pointRadius: 5,
          borderWidth: 3,
        },
      ];

      // Establece los datos del gráfico
      setChartData({
        labels: formattedLabels,
        datasets: datasets,
      });
    }
  }, [data, selectedCollection]);

  return (
    <div className="lines-chart-container">
      <div className="period-selector">
        <label style={{ marginRight: "5px" }}>Escribe un Mes:</label>
        {/* Utiliza el componente SearchPeriod para seleccionar un mes */}
        <SearchPeriod
          dataByMonth={dataByMonth}
          setSelectedCollection={setSelectedCollection}
        />
      </div>
      <div className="chart-wrapper">
        {/* Renderiza el gráfico de líneas */}
        {chartData && <Line data={chartData} height={100} />}
      </div>
    </div>
  );
};

export default LinesChart;
