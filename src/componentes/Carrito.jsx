import React from 'react';
import '../estilos/Carrito.css';

function Carrito (props) {


    return (
        <div className="carrito-contenedor">
            <span className="contador-productos-carrito">1</span>
            <img className="carrito-logo" 
            src={require('../iconos/carrito.png')}/>
        </div>
    )
}

export default Carrito;