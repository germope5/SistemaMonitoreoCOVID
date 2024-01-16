import React, { Component } from 'react';
import '../public/App.css'; // Importa el archivo de estilos de la aplicación
import LinesChart3 from "./LinesChart3"; // Importa el componente de gráfico de líneas #1
import LinesChart2 from "./LinesChart2"; // Importa el componente de gráfico de líneas #2
import PiesChart from "./PiesChart"; // Importa el componente de gráfico de pastel

class Inicio extends Component {
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const elements = document.querySelectorAll('.chart-container');
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top <= windowHeight * 0.75) {
        element.style.opacity = 1;
      }
    });
  };

  render() {
    return (
      <div className='content-Inicio' style={{ alignItems: 'center' }}>
        {/* Título de la página */}
        <h1 className="bg-title" style={{ fontSize: "28px" }}>
          Representación Visual de Estadísticas
        </h1>

        <div className='Presentacion_text'>
          <p style={{color:"white", textAlign: "center"}}>
          <b>¡Te damos la bienvenida al Sistema de Monitoreo de Tópicos 
            sobre Tweets relacionados con el COVID-19 en México! </b>
          </p>
          <p style={{color:"white"}}>
         
          Esta aplicación proporciona una visión completa y actualizada de las
           conversaciones en línea relacionadas con la pandemia en México. En la página de inicio,
            encontrarás tres gráficos principales que muestran datos clave de tweets 
            desde el año 2020 hasta el 2022.
          </p>
          
        </div>
        
        {/* Contenedor del primer conjunto de gráficos */}
        <div className="chart-container" style={{ width: '85%', marginBottom: '30px', marginTop: '20px', marginLeft: '100px', marginRight: '20px', justifyContent: "center" }}>
          {/* Componente de gráfico de líneas #1 */}
          <div style={{ marginRight: '20px' }}>
            <LinesChart3 />
          </div>
          <div style={{}}>
            {/* Descripción del gráfico de líneas #1 */}
            <p className="texto-grafico" style={{ textAlign: "center", marginTop: "20px" }}>
              <b style={{ color: '#007BFF' }}>Gráfico #1:</b> Gráfico de Líneas <b style={{ color: '#007BFF' }}>Total de Tweets en Día/Mes/Año</b>
            </p>
            {/* Descripción detallada del gráfico #1 */}
            <p style={{textAlign:"center", fontSize: "14px", margin: "30px 50px 30px 50px" }}>
              El rango de fechas que comprende el gráfico va desde marzo del 2020 a octubre del 2022.  Estos cambios podrían estar relacionados con eventos
              o tendencias específicas que influyeron en la plataforma social.
            </p>
          </div>
        </div>

        {/* Contenedor del segundo conjunto de gráficos */}
        <div className="chart-container" style={{ width: '85%', marginBottom: '30px', marginTop: '20px', marginLeft: '100px', marginRight: '20px', justifyContent: "center" }}>
          {/* Componente de gráfico de líneas #2 */}
          <div style={{ marginRight: '20px' }}>
            <LinesChart2 />
          </div>
          <div style={{}}>
            {/* Descripción del gráfico de líneas #2 */}
            <p className="texto-grafico" style={{ textAlign: "center", marginTop: "20px" }}>
              <b style={{ color: '#007BFF' }}>Gráfico #2:</b> Gráfico de Líneas <b style={{ color: '#007BFF' }}>Tweets Totales por Año</b>
            </p>
            {/* Descripción detallada del gráfico #2 */}
            <p style={{ textAlign:"center", fontSize: "14px", margin: "30px 50px 30px 50px" }}>
              El gráfico muestra de manera simultánea la cantidad de Tweets en los tres años con mayor presencia durante la pandemia.

            </p>
          </div>
        </div>

        {/* Contenedor del tercer conjunto de gráficos */}
        <div className="chart-container" style={{ width: '85%', marginBottom: '30px', marginTop: '20px', marginLeft: '100px', marginRight: '20px', justifyContent: "center" }}>
          {/* Componente de gráfico de pastel */}
          <div style={{ marginRight: '20px' }}>
            <PiesChart />
          </div>
          <div style={{ flex: 1 }}>
            {/* Descripción del gráfico de pastel */}
            <p className="texto-grafico" style={{ textAlign: "center", marginTop: "20px" }}>
              <b style={{ color: '#007BFF' }}>Gráfico #3:</b> Gráfico de Pastel <b style={{ color: '#007BFF' }}>Tweets Totales por Mes Selección por Año</b>
            </p>
            {/* Descripción detallada del gráfico #3 */}
            <p style={{  textAlign:"center", fontSize: "14px", margin: "30px 50px 30px 50px" }}>
              Este gráfico visualiza la información por año y muestra en qué periodos se intensificó la discusión sobre el COVID-19.
             
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio; // Exporta el componente Inicio
