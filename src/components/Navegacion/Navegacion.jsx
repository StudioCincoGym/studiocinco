import './Navegacion.css';
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { IoMdContact } from "react-icons/io";
import { GiFamilyHouse } from "react-icons/gi";
import { useState } from 'react';

const Navegacion = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Cierra el menú después de navegar
  };

  return (
    <nav>
      {/* Botón de hamburguesa para abrir y cerrar el menú */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Menú de navegación */}
      <ul className={`navlist ${menuOpen ? 'open' : ''}`}>
        <li className='navitem' onClick={() => handleNavigation('home')}>
          <FaHome /> Home
        </li>
        <li className='navitem' onClick={() => handleNavigation('actividades')}>
          <CgGym/>Actividades
        </li>
        <li className='navitem' onClick={() => handleNavigation('nosotros')}>
          <GiFamilyHouse/>Nosotros
        </li>
        <li className='navitem' onClick={() => handleNavigation('contacto')}>
          <IoMdContact/>Contacto
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
