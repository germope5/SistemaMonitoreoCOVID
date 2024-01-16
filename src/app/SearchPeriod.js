import React, { useState } from 'react'; // Importa React y el hook useState
import Autosuggest from 'react-autosuggest'; // Importa el componente Autosuggest
import '../public/App.css'; // Importa estilos CSS

const SearchPeriod = ({ dataByMonth, setSelectedCollection }) => {
  // Define el componente SearchPeriod como una función que recibe dos props: dataByMonth y setSelectedCollection
  const [value, setValue] = useState(''); // Define un estado local 'value' y una función 'setValue' para controlar el valor del campo de búsqueda.
  const periods = Object.keys(dataByMonth); // Obtiene las claves (nombres de los meses) del objeto 'dataByMonth' y las almacena en 'periods'.

  const getSuggestions = (inputValue) => {
    // Define una función llamada 'getSuggestions' que toma un 'inputValue' como argumento.
    return periods.filter((period) =>
      period.toLowerCase().includes(inputValue.toLowerCase())
    );
    // Filtra los meses que contienen (case-insensitive) el 'inputValue' y los devuelve como sugerencias.
  };

  const getSuggestionValue = (suggestion) => suggestion;
  // Define una función 'getSuggestionValue' que simplemente devuelve el valor de la sugerencia.

  const renderSuggestion = (suggestion) => (
    // Define una función 'renderSuggestion' que renderiza cómo se muestra cada sugerencia.
    <div>{suggestion}</div>
  );

  const onSuggestionsFetchRequested = ({ value }) => {
    // Define una función 'onSuggestionsFetchRequested' que se ejecuta cuando se solicitan sugerencias.
    setValue(value); // Actualiza el estado 'value' con el valor del campo de búsqueda.
  };

  const onSuggestionsClearRequested = () => {
    // Define una función 'onSuggestionsClearRequested' que se ejecuta cuando se borran las sugerencias.
    setValue(''); // Restablece el estado 'value' a una cadena vacía.
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    // Define una función 'onSuggestionSelected' que se ejecuta cuando se selecciona una sugerencia.
    setSelectedCollection(suggestion); // Llama a la función 'setSelectedCollection' con la sugerencia seleccionada.
  };

  const inputProps = {
    // Define un objeto 'inputProps' con propiedades para configurar el campo de entrada.
    placeholder: 'Buscar mes...', // Define un marcador de posición para el campo de entrada.
    value, // Asigna el valor del campo de entrada al estado 'value'.
    onChange: (_, { newValue }) => setValue(newValue), // Define una función para manejar los cambios en el campo de entrada y actualizar el estado 'value'.
  };

  return (
    <div className="search-period-container">
      {/* Renderiza un contenedor con clase 'search-period-container' */}
      <Autosuggest 
        suggestions={getSuggestions(value)} // Proporciona las sugerencias basadas en el estado 'value'.
        onSuggestionsFetchRequested={onSuggestionsFetchRequested} // Define la función para solicitar sugerencias.
        onSuggestionsClearRequested={onSuggestionsClearRequested} // Define la función para borrar sugerencias.
        onSuggestionSelected={onSuggestionSelected} // Define la función para manejar la selección de sugerencias.
        getSuggestionValue={getSuggestionValue} // Define la función para obtener el valor de una sugerencia.
        renderSuggestion={renderSuggestion} // Define la función para renderizar cómo se muestra una sugerencia.
        inputProps={inputProps} // Proporciona las propiedades para configurar el campo de entrada.
      />
    </div>
  );
};

export default SearchPeriod;
