import React from 'react';
import '../estilos/Itemcarrito.css'

const Itemcarrito = props => {
    return (

        <div className="producto-carrito">
            <img className="imagen-producto-carrito"
                 src={require(`../iconos/${props.rubro}.png`)} 
                 alt="imagen-prod" 
            />
            <div className="detalles-producto-carrito">
                <p className="nombre-producto">{props.producto}</p>
                <p className="comercio-producto">{props.comercio}</p>
                <p className="comerciodomicilio-producto">{props.domicilioComercio}</p>
            </div>
            <span className="precio-producto-carrito">$ {props.precio}</span>
            < div className="contenedor-iconocierre">
                <img className='iconocierre' 
                     onClick={props.quitarDeListaDeCarrito}
                     src = {require('../iconos/tachodebasura.png')}
                     id = {props.id}/>
            </div>
        </div>

    )
}

export default Itemcarrito;