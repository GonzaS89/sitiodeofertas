import React from 'react';
import '../estilos/Header.css';
import '../estilos/Carrito.css'


function Header (props) {
    return(
        <div className='header-contenedor'>
            <img
            className='header-logo' 
            src={require('../iconos/logo-lokerilotene.png')}/>
            <div className="carrito-contenedor">
            <span className="contador-productos-carrito">{props.cantidadItems}</span>
            <img className="carrito-logo" 
            onClick={props.clickEnCarrito}
            src={require('../iconos/carrito.png')}/>
        </div>
        </div>
    )
}

export default Header;