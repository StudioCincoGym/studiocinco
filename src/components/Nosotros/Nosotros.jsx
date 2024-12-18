import { useEffect } from "react";
import "./Nosotros.css";

function Nosotros() {
  useEffect(() => {
    const section = document.querySelector(".nosotros-contenido");
    const imagen = document.querySelector(".frente");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imagen.classList.add("animacion-activa");
        } else {
          imagen.classList.remove("animacion-activa");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (

    <div className="nosotros-contenido">
      <div className="titulo-nosotros">
        <h1 className="titulo">Nosotros</h1>
      </div>
      <div className="nosotros"  id="nosotros">
        <div className="nosotros-text">
          <h3 className="text-nosotros">
            StudioCinco es más que un gimnasio, es el corazón de nuestra casa.
            Aquí, tanto madre como hijo comparten su pasión por el deporte, 
            guiando a cada miembro con dedicación y experiencia. En este espacio familiar, 
            te invitamos a ser parte de nuestra comunidad, donde el bienestar y el compañerismo 
            son nuestro estilo de vida.
          </h3>
        </div>
        <div className="frente-contenedor">
          <div className="frente"></div>
        </div>
      </div>
    </div>
      
  );
}

export default Nosotros;
