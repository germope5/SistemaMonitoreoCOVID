import React, { Component } from 'react';
import '../public/App.css'; // Importa los estilos CSS
import { Carousel } from 'react-responsive-carousel'; // Importa el componente Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del Carousel

// Define la clase del componente Acercade
class Acercade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCardVisible: false,
        };
        this.carouselRef = React.createRef();
    }

    handleLeftClick = () => {
        // Navegar a la imagen anterior
        this.carouselRef.current.prev();
    }

    handleRightClick = () => {
        // Navegar a la siguiente imagen
        this.carouselRef.current.next();
    }

    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll);

        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
                // Agregar un retraso antes de mostrar la tarjeta
                setTimeout(() => {
                    this.setState({ isCardVisible: true });
                }, 500); // Puedes ajustar la duración del retraso según tus preferencias
    }

    handleScroll = () => {
        const elements = document.querySelectorAll('.project-section');
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= windowHeight * 0.75) {
                element.style.opacity = 1;
            }
        });
    };

    render() {
        // Definir una lista de imágenes para el carrusel
        const carouselImages = [
            'src/public/imagen-1.jpg',
            'src/public/imagen-2.jpg',
            'src/public/imagen-3.jpg',
            'src/public/imagen-4.jpg',
            'src/public/imagen-5.jpg',
        ];

        // Define estilos para el contenedor de imágenes
        const imageContainerStyles = {
            display: 'flex',
            justifyContent: 'center', // Centra horizontalmente
            alignItems: 'center', // Centra verticalmente
            marginTop: '20px', // Espacio arriba del contenedor
        };

// Define estilos para la tarjeta de presentación
const creatorCardStyles = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center', // Centra verticalmente
    width: '780px', // Ancho de la tarjeta reducido
    margin: '0 auto', // Centra horizontalmente la tarjeta
};

// Define estilos para la imagen del creador
const creatorImageStyles = {
    width: '160px', // Ancho de la imagen
    height: '160px', // Alto de la imagen
    borderRadius: '75%', // Forma circular
    marginRight: '20px', // Espacio entre la imagen y el texto
    textAlign: 'center',
    
};


// Define estilos para la columna izquierda (imagen y nombre)
const leftColumnStyles = {
    flex: 1, // Toma el 50% del ancho de la tarjeta
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

// Define estilos para la columna derecha (datos adicionales)
const rightColumnStyles = {
    flex: 1, // Toma el 50% del ancho de la tarjeta
    marginLeft: '20px', // Espacio entre las dos columnas
    
};

        return (
            <div className='content-Acercade'>
                

                {/* Título de la sección */}
                <h1 className="bg-title-acercade" style={{ fontSize: "28px" }}>
                    Acerca del Proyecto
                </h1>
                {/* Tarjeta de presentación del creador */}
                <div className={`creator-card ${this.state.isCardVisible ? 'fade-in-card' : ''}`} style={creatorCardStyles}>
            {/* Columna izquierda para la foto y el nombre */}
            
            <div className="left-column" style={leftColumnStyles}>
                {/* Imagen del creador */}
                <img className="creatorImage"
                    src="src/public/creador.jpg" // Reemplaza con la ruta de la imagen del creador
                    alt="Imagen del Creador"
                    style={creatorImageStyles}
                />
                <h2>Germán Mora</h2>
            </div>

            {/* Columna derecha para otros datos */}
            <div className="right-column" style={rightColumnStyles}>
                {/* Datos adicionales */}
                <h2 style={{textAlign:"center"}}><strong >Desarrollador web</strong></h2>
                <p style={{color:"gray", textAlign:"center"}}>
                <a
                    href="https://github.com/germope5"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "gray" }}
                >
                @germope5
                </a>
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href="https://github.com/germope5" target="_blank" rel="noopener noreferrer">
                    <img
                        className='imagenGit'
                        style={{
                            width: "50px",
                            height: "50px",
                            margin: "0 auto"
                        }}
                        src="src/public/blue_gh.png"
                        alt="GitHub logo"
                    />
                    </a>
                </div>
            </div>
        </div>
                <div className="project-content">
                    <section className="project-section">
                        <h2>Introducción</h2>
                        <p>
                            {/* Introducción del proyecto */}
                            La enfermedad pandémica causada por el Coronavirus se ha presentado como un tema
                            central de discusión a lo largo de los últimos tres años en todos los medios de comunicación,
                            en especial en Twitter. Por mencionar algunos temas, se tiene: la rápida propagación del
                            virus, el desarrollo de las vacunas y la seguridad sanitaria. Twitter ha incrementado su
                            impacto debido a la gran cantidad de información que posee, así que diversos estudios
                            de análisis de textos se han realizado en ella. Los organismos institucionales, políticos y
                            figuras públicas se han percatado de la importancia de tener presencia en estas plataformas,
                            que les permiten entregar mensajes con un impacto y alcance sin precedentes.
                            Esta gran cantidad de información se encuentra desorganizada, y su análisis manual,
                            resulta ser una tarea tediosa y con un gran consumo de tiempo. Esta información puede
                            ser analizada con un amplio abanico de herramientas computacionales relacionadas al
                            análisis de datos, tales como la clasificación de textos, extracción de la información o
                            sistemas de pregunta/respuesta. Dentro de la inteligencia artificial, está presente el Procesamiento
                            del Lenguaje Natural (PLN), el cual, permite entender, interpretar y manipular el
                            lenguaje humano y proporciona las herramientas de análisis de textos por medio de las
                            computadoras.
                            Por lo mencionado anteriormente, en este proyecto se propone desarrollar un sistema
                            de monitoreo de tópicos extraídos de tweets en español de México. Este sistema utilizará
                            herramientas de PLN para procesar los textos de salida de los algoritmos de descubrimiento
                            de tópicos. Además, será capaz de visualizar la información de los tópicos a través de
                            gráficos e ilustraciones. La visualización permitirá que cualquier persona u organización
                            interesada en algún tópico pueda analizarlo y explorarlo de manera intuitiva.
                        </p>
                        {/* Carrusel de imágenes */}
                        <div style={imageContainerStyles}>
                            <Carousel
                                showArrows={true}
                                centerMode={true}
                                showThumbs={false}
                                style={{
                                    marginBottom: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                                infiniteLoop={true}
                                onClickItem={() => {}}
                                ref={this.carouselRef}
                            >
                                {carouselImages.map((image, index) => (
                                    <div key={index} onClick={() => {}}>
                                        <img
                                            src={image}
                                            alt={`Imagen ${index}`}
                                            style={{
                                                maxWidth: '420px',
                                                height: '580px',
                                                margin: 'auto',
                                                marginBottom: '20px',
                                                cursor: 'pointer', // Cambia el cursor al hacer clic en la imagen
                                            }}
                                        />
                                        <div
                                            className="left-click-area"
                                            onClick={this.handleLeftClick}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                left: 0,
                                                width: '20%', // Abarca la mitad izquierda de la imagen
                                                cursor: 'pointer',
                                            }}
                                        ></div>
                                        <div
                                            className="right-click-area"
                                            onClick={this.handleRightClick}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                right: 0,
                                                width: '20%', // Abarca la mitad derecha de la imagen
                                                cursor: 'pointer',
                                            }}
                                        ></div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="image-footer">
                            <p style={{ textAlign: "center" }}>Las imágenes se generaron desde la web: <a href="https://leonardo.ai/" target="_blank" rel="noopener noreferrer">
                                Leonardo.ai
                            </a></p>
                        </div>

                    </section>
                    <section className="project-section">
                        <h2>Objetivos</h2>
                        <h3>Objetivo General</h3>
                        <p>
                            {/* Objetivo general del proyecto */}
                            Implementar un sistema para el monitoreo de tópicos relacionados con el COVID-19
                            utilizando técnicas de PLN, recursos gráficos y las palabras representativas de los tópicos.
                        </p>
                        <h3>Objetivos Específicos</h3>
                        <ol>
                            {/* Lista de objetivos específicos */}
                            <li>Diseñar e implementar un módulo para analizar los tweets en español de México.</li>
                            <li>Diseñar un modelo de clases e implementar una base de datos para almacenar los
                                textos y los tópicos descubiertos de las publicaciones de Twitter</li>
                            <li>Diseñar e implementar un módulo para descubrir tópicos propuestos en [1] y almacenar
                                la información en la base de datos.</li>
                            <li>Seleccionar las bibliotecas gráficas que mejor se adapten a los requerimientos del
                                sistema de monitoreo.</li>
                            <li>Desarrollar un módulo de visualización para el seguimiento de tópicos mediante
                                bibliotecas gráficas para la web.</li>
                        </ol>
                    </section>
                </div>
            </div>
        );
    }
}

export default Acercade; // Exporta el componente para su uso en otros lugares
