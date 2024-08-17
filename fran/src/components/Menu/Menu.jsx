import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
  <>


    <nav className="menu">
    <div className="logo">
    <img src="./images/icono.png" alt="Icono de Viaje"/>
    <span>TRAVELING</span>
  </div>
      <ul>
        <li><a href="#quienes-somos">Quiénes somos</a></li>
        <li><a href="#destinos">Destinos</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#ofertas">Ofertas</a></li>
      </ul>
    </nav>
    </>
  );
};

export default Menu;
