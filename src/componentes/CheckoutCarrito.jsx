import React ,{ useState } from 'react';
import '../estilos/CheckoutCarrito.css';
import Oferta from './Oferta';

function CheckoutCarrito (props) {  


    return (

        <div 
        className={props.carritoClickeado? 'checkout-contenedor visible' : 'checkout-contenedor ocultar'}>
            <div className='checkout-carrito-contenedor visible'>
             <span className="botondecierre" onClick={props.cerrarCheckoutCarrito}>X</span>   
             <div className="container-productosagregados">
             </div>
            </div>  
        </div>
    )
}

export default CheckoutCarrito;