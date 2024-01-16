// Importa las bibliotecas y componentes necesarios
import React, { Component } from 'react'; // Importa React y Component de React
import '../public/App.css'; // Importa los estilos CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa estilos CSS de Bootstrap
import DataTable from 'react-data-table-component'; // Importa el componente DataTable para tablas
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesomeIcon para iconos personalizados
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de búsqueda de FontAwesome
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

// Define un arreglo con nombres de colecciones
const colecciones = [
  
  'Abril 2020',
  'Mayo 2020',
  'Junio 2020',
  'Julio 2020',
  'Agosto 2020',
  'Septiembre 2020',
  'Octubre 2020',
  'Noviembre 2020',
  'Diciembre 2020',
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
  'Enero 2022',
  'Febrero 2022',
  'Marzo 2022',
  'Abril 2022',
  'Mayo 2022',
  'Junio 2022',
  'Agosto 2022',
  'Septiembre 2022',
  'Octubre 2022'
];


// Estilos personalizados para la tabla
const customStyles = {
  // Estilos para la tabla en general
  table: {
    style: {
      backgroundColor: '#001e2b', // Color de fondo de la tabla
      color: '#000', // Color del texto de la tabla
      marginLeft: '20px'
    }
  },
  // Estilos para las cabeceras de las columnas
  headCells: { 
    style: {
      backgroundColor: '#001e2b', // Color de fondo de las cabeceras
      color: 'white', // Color del texto de las cabeceras
      fontWeight: 'bold', // Texto en negrita en las cabeceras
      fontSize: '16px', // Tamaño de fuente en las cabeceras
    }
  },
  // Estilos para las filas de la tabla
  rows: { 
    style: {
      backgroundColor: '#001e2b', // Color de fondo de las filas
      color: 'white', // Color del texto de las filas
    },
  },
  // Estilos para el encabezado de la tabla
  header: {
    style: {
      backgroundColor: '#001e2b', // Color de fondo del encabezado
      color: 'white', // Color del texto del encabezado
    }
  },
  // Estilos para la paginación de la tabla
  pagination: {
    style: {
      backgroundColor: '#001e2b', // Color de fondo de la paginación
      color: 'white', // Color del texto de la paginación
    },
    pageButtonsStyle: {
      color: 'white', // Color de los botones de paginación
      backgroundColor: 'transparent', // Color de fondo de los botones de paginación
      fill: 'white' // Relleno de los botones de paginación
    }  
  }
};

// Opciones de paginación personalizadas
const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

// Clase CustomDataTable que extiende Component
class CustomDataTable extends Component 
{
  state = {
    busqueda: '',
    campeones: [],
    columnas: [],
    selectedCollection: 'Marzo 2022', // Estado para almacenar la colección seleccionada
    selectedPage: 1, // Estado para almacenar la página seleccionada
  };

  // Método para manejar el cambio de colección seleccionada
  handleCollectionChange = async (collectionName) => {
    this.setState({ selectedCollection: collectionName, selectedPage: 1 });
    await this.fetchData(collectionName);
  };

  // Método para manejar cambios en el campo de búsqueda
  onChange = async e => {
    e.persist();
    this.setState({ busqueda: e.target.value });
    this.filtrarElementos();
  }

  // Método para asignar las columnas de la tabla
  asignarColumnas = () => {
    const columnas = [
      {
        name: 'ID',
        selector: '_id',
        sortable: true,
        width: '200px',
        center: true
      },
      {
        name: 'Fecha',
        selector: 'fecha',
        sortable: true,
        width: '240px',
        center: true
      },
      {
        name: 'Usuario',
        selector: 'usuario',
        sortable: true,
        width: '200px',
        center: true
      },
      {
        name: 'Tweet',
        selector: 'text',
        sortable: true,
        width: '1400px',
        left: true
      }
    ];
    this.setState({ columnas: columnas });
  }

  // Método para filtrar elementos de la tabla
  filtrarElementos = () => {
    const { busqueda, campeones } = this.state;

    if (!busqueda) {
      // Si la barra de búsqueda está vacía, mostrar todos los elementos originales
      this.setState({ campeones: campeones });
      return;
    }

    // Resto del código de filtrado (sin cambios)

    //MANDAR A LLMAR al _id y al Tweet.
    const search = campeones.filter(item => {
      if (
        item._id.toString().includes(busqueda) ||
        item.text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(busqueda) 
      ) {
        return item;
      }
    });

    this.setState({ campeones: search });
  };

   // Método que se ejecuta cuando el componente se monta
  async componentDidMount() {
    try {
      // Obtener la colección seleccionada desde el estado
      const { selectedCollection, selectedPage } = this.state;
  
      // Obtener la cantidad total de páginas en la colección seleccionada
      await this.fetchData(selectedCollection);
  
      // Construir la URL de la API con los valores seleccionados y la página actual
      const url = `http://localhost:3000/miapi/collection/${selectedCollection}?page=${selectedPage}`;
  
      // Realizar la solicitud a la API para obtener los datos de la colección y página seleccionadas
      const response = await axios.get(url);
  
      // Asignar los datos obtenidos a la variable campeones en el estado
      this.setState({ campeones: response.data });
  
      // Asignar columnas después de obtener los datos
      this.asignarColumnas();
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

   // Método que se ejecuta cuando el componente se actualiza
  async componentDidUpdate(prevProps, prevState) 
  {
    const { selectedCollection, selectedPage } = this.state;

    // Verificar si hubo un cambio en la colección seleccionada o la página
    if (
      selectedCollection !== prevState.selectedCollection ||
      selectedPage !== prevState.selectedPage
    ) {
      try {
        await this.fetchData();
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  }

   // Método para obtener datos de la API
  fetchData = async () => {
    const { selectedCollection, selectedPage } = this.state;

    // Construir la URL de la API con los valores seleccionados
    const url = `http://localhost:3000/miapi/collection/${selectedCollection}?page=${selectedPage}`;

    // Forzar la recolección de basura antes de realizar la solicitud
    if (global.gc) {
      global.gc();
    }
    
    
    // Realizar la solicitud a la API para obtener los datos de la colección y página seleccionadas
    const response = await axios.get(url);

    // Asignar los datos obtenidos a la variable campeones en el estado
    this.setState({ campeones: response.data });

    // Asignar columnas después de obtener los datos
    this.asignarColumnas();
  };

  render() {
    return (
      <div className="table-responsive">
        
        <div className="barraBusqueda" >
          <input
            type="text"
            placeholder="Buscar..."
            className="textField"
            name="busqueda"
            value={this.state.busqueda}
            onChange={this.onChange}
          />
          <button type="button" className="btnBuscar" /*onClick={onClear}*/>
            {' '}
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div>
          {/* Dropdown para seleccionar la colección */}
          <label style={{marginLeft:"20px"}}>Periodos: </label>
          <select
            className="select-collection" // Agregamos la clase "select-collection"
            value={this.state.selectedCollection}
            onChange={(e) => this.handleCollectionChange(e.target.value)}
          >
            <option value="">Seleccione un Periodo</option>
            {colecciones.map((nombre) => (
              <option key={nombre} value={nombre}>{nombre}</option>
            ))}
          </select>
         
        </div>
        <DataTable
          columns={this.state.columnas} // Columnas definidas anteriormente
          data={this.state.campeones} // Datos de la tabla
          title="Set de Tweets sobre COVID-19 en México" // Título de la tabla
          pagination // Habilita la paginación
          paginationComponentOptions={paginacionOpciones} // Opciones de paginación personalizadas
          fixedHeader // Encabezado fijo
          fixedHeaderScrollHeight="600px" // Altura del encabezado fijo
          customStyles={customStyles} // Estilos personalizados para la tabla
          noDataComponent={<span>No se encontró ningún elemento</span>} // Mensaje si no hay datos
        />
      </div>
    );
  }
}
// Exporta el arreglo de colecciones para su uso en otros componentes
export {colecciones};
export default CustomDataTable;// Exporta el componente CustomDataTable para su uso en otros lugares de la aplicación
