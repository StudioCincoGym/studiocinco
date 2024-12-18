import { useEffect, useState } from "react";
import './Actividades.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Actividades() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const getActividades = async () => {
      const response = await fetch(`https://studiocincoback.onrender.com/api/actividades`);
      if (response.ok) {
        const { apiactividades } = await response.json();
        setActividades(apiactividades || []);
      }
    };
    getActividades();
  }, []);
  
  return (
    <>
      <div className="actividades-container">
        <h1 className="titulo-titulo">Actividades</h1>
        
        {/* Botón para desplazarse hacia la izquierda */}
        <button
          aria-label="boton izquierdo"
          className="scroll-btn left"
          onClick={() => {
            document
              .querySelector(".actividades-scroll")
              .scrollBy({ left: -300, behavior: "smooth" });
          }}
        >
          <FaArrowLeft />
        </button>

        <div className="actividades-scroll">
          {/* Mapeamos las actividades */}
          {actividades.map((actividad) => {
  // console.log('Imagen base64:', actividad.imagen);  // Verifica si la imagen base64 es correcta
  // let image = `data:image/jpg;base64,${actividad.imagen.replace(/(\r\n|\n|\r)/gm, "")}`
  return (
    <div
      className="actividades-tarjeta"
      key={actividad.id}
      style={{
        backgroundImage: `url("/studiocinco/assets/${actividad.imagen}")`,
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
    
    <h3 className="actividad-titulo">
        {actividad.actividad} ({actividad.instructor})
      </h3>
      <p className="actividad-dias">{actividad.dias}</p>
      <ul className="actividad-horarios">
        <li>{actividad.horarios}</li>
      </ul>
      <p className="actividad-precio">Precio: ${actividad.costos}</p>
    </div>
  );
})}

        </div>

        {/* Botón para desplazarse hacia la derecha */}
        <button
          aria-label="boton derecha"
          className="scroll-btn right"
          onClick={() => {
            document
              .querySelector(".actividades-scroll")
              .scrollBy({ left: 300, behavior: "smooth" });
          }}
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default Actividades;
