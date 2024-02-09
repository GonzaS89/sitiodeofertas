import React , { useState }from 'react';
import '../estilos/CheckoutCarrito.css';

function CheckoutCarrito (props) {
         
    return (
        <div className={ props.carritoClickeado ? 'checkout-contenedor visible' : 'checkout-contenedor'}>
            <div className='checkout-carrito-contenedor visible'>
             <span className="botondecierre">X</span>   
            </div>  
        </div>
    )
}

export default CheckoutCarrito;