import React , { useState }from 'react';
import '../estilos/CheckoutCarrito.css';

function CheckoutCarrito (props) {
     
    
    return (
        <div className={props.carritoClickeado ? 'checkout-contenedor visible' : 'checkout-contenedor'}>
            <div className={props.carritoClickeado ? 'checkout-carrito-contenedor visible' : 'checkout-carrito-contenedor'}>
             <span className="botondecierre">X</span>   
            </div>  
        </div>
          

    )
}

export default CheckoutCarrito;