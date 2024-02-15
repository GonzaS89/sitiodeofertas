import React ,{ useState } from 'react';
import '../estilos/CheckoutCarrito.css';

function CheckoutCarrito (props) {


    return (
        <div 
        className={props.carritoClickeado? 'checkout-contenedor visible' : 'checkout-contenedor ocultar'}>
            <div className='checkout-carrito-contenedor visible'>
             <span className="botondecierre" onClick={props.cerrarCheckoutCarrito}>X</span>   
             
            </div>  
        </div>
    )
}

export default CheckoutCarrito;