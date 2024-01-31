import React from 'react';
import '../estilos/Header.css';

function Header () {
    return(
        <div className='header-contenedor'>
            <img
            className='header-logo' 
            src={require('../imagenes/logo.png')}/>
            <img 
            className='carrito-logo'
            src={require('../iconos/carrito.png')}/>
        </div>
    )
}

export default Header;