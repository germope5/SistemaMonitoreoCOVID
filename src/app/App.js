import React, { Component } from 'react';
import '../public/App.css'; // Importa el archivo de estilos
import Acercade from './Acercade';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ConjuntoDatos from './ConjuntoDatos';
import ModeladoTopicos from './ModeladoTopicos';
import Inicio from './Inicio';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <link rel="stylesheet" href="App.css"></link> 
        {/* Barra de Navegación */}
        <nav className="navbar">
         
          {/* Primera Fila - Título */}
          <div className="nav-row">
            <a className="title" href="/" style={{fontSize:"32px"}}>
              Sistema de Monitoreo de Tópicos de Tweets sobre COVID-19
            </a>
          </div>

          {/* Segunda Fila - Logo */}
          <div className="nav-row">
            <a href="/" className="logo">
              <img src="src/public/eye_2740433.png" alt="Logo" style={{width:"120px", height:"120px"}}/>
            </a>
          </div>

          {/* Tercera Fila - Enlaces de Navegación */}
          <div className="nav-row" style={{ width: "800px", height:"80px" }}>
  <ul className="nav-links">
    <li >
      <Link to="/inicio">
        <img src="src/public/home.png" alt="Inicio" style={{width:"50px", height:"50px"}}/>
        <span className="link-title">Inicio</span>
      </Link>
    </li>
    <li >
      <Link to="/modeladotopicos">
        <img src="src/public/modelado.png" alt="ModeladoTopicos" style={{width:"50px", height:"50px"}}/>
        <span className="link-title">Tópicos</span>
      </Link>
    </li>
    <li>
      <Link to="/conjuntodatos">
        <img src="src/public/database.png" alt="ConjuntoDatos" style={{width:"50px", height:"50px"}}/>
        <span className="link-title">Dataset</span>
      </Link>
    </li>
    <li>
      <Link to="/acercade" title="Acerca de">
        <img src="src/public/info.png" alt="AcercaDe" style={{width:"50px", height:"50px"}}/>
        <span className="link-title">Acerca de</span>
      </Link>
    </li>
    <div className="animation start-home"></div>
  </ul>
</div>

        </nav>

        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/acercade" element={<Acercade />} />
          <Route path="/conjuntodatos" element={<ConjuntoDatos />} />
          <Route path="/modeladotopicos" element={<ModeladoTopicos />} />
          {/* Agrega otras rutas para los demás componentes */}
        </Routes>
      {/* Footer */}
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-column">
      <p><b>© {new Date().getFullYear()} Germán Mora Pérez</b></p>
      <p>Todos los derechos reservados</p>
      <p>Universidad Autónoma Metropolitana</p>
      <b><p>Proyecto Terminal</p></b>
      <p>Contacto: <a href="mailto:gemope@azc.uam.mx">gemope@azc.uam.mx</a></p>
    </div>
    <div className="footer-column social-column">
      <img src="src/public/favicon.ico" alt="Favicon" className="favicon-icon" />
      <p>Síguenos en redes sociales:</p>
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/ejemplo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/ejemplo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ejemplo" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
        {/* Agrega más enlaces a tus redes sociales */}
      </ul>
    </div>
    <div className="footer-column">
      <b><p>Explora más:</p></b>
      <ul className="footer-links">
        <li>
          <a href="/terminos">Términos de uso</a>
        </li>
        <li>
          <a href="/privacidad">Política de privacidad</a>
        </li>
        <li>
          <a href="/ayuda">Ayuda y soporte</a>
        </li>
      </ul>
    </div>
  </div>
</footer>
        </div>
      </Router>
    );
  }
}
export default App;


