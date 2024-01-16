//Librerías necesarias para el Componente ConjuntoDatos.js, en donde se hace
//uso del componente CustomDataTable.js para mostrar el DataSet que se utilizó para
// su realización.
import React, { Component } from 'react';
import '../public/App.css'; // Importa el archivo de estilos
import CustomDataTable from './CustomDataTable';

// Define la clase del componente ConjuntoDatos
class ConjuntoDatos extends Component {
    render() {
        return (
            <div className='content-Conjuntodatos'>
                {/* Título de la sección */}
                <h1 className="bg-title-table" style={{ marginBottom: '18px', fontSize: "28px" }}>
                    Explorador de los Tweets
                </h1>
                {/* Renderiza el componente CustomDataTable */}
                <CustomDataTable />
            </div>
        );
    }
}

export default ConjuntoDatos; // Exporta el componente ConjuntoDatos para su uso en otros lugares de la aplicación