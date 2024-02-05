import React from 'react';
import '../estilos/Header.css';
import Carrito from './Carrito';

function Header () {
    return(
        <div className='header-contenedor'>
            <img
            className='header-logo' 
            src={require('../imagenes/logo.png')}/>
            <Carrito />
        </div>
    )
}

export default Header;