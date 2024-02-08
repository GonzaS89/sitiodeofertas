import React from 'react';
import '../estilos/rubro.css';

function Rubro (props) {
    return (
        <div className='contenedor-rubro'>
            <input className="check-rubro" id="checkbox" type='checkbox'></input>
            <p className='nombre-rubro'>{props.nombreRubro}</p>
            <p className='contador-productos'>(<span>{props.cantidadProductos}</span>) </p>
        </div>
    )
}

export default Rubro;