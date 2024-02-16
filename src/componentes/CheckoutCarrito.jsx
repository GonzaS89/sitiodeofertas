import React ,{ useState } from 'react';
import '../estilos/CheckoutCarrito.css';
import Oferta from './Oferta';
import data from '../data.json';

function CheckoutCarrito (props) {  

    const [listaIdAgregadas, setListaIdAgregadas] = useState([]);

    const agregarIdClickeada = () => {
        setListaIdAgregadas([...listaIdAgregadas, props.idClickeada])
    };

    return (

        <div 
        className={props.carritoClickeado? 'checkout-contenedor visible' : 'checkout-contenedor ocultar'}>
            <div className='checkout-carrito-contenedor visible'>
             <span className="botondecierre" onClick={props.cerrarCheckoutCarrito}>X</span>   
             <div className="container-productosagregados">
                <h1>{}</h1>
             </div>
            </div>  
        </div>
    )
}

export default CheckoutCarrito;