import React, { useState } from 'react';
import '../estilos/rubro.css';

function Rubro({ nombreCheckbox, cantidadProductos, enviarDatos }) {


    const obtenerDatos = (e) => {
        const estadoCheck = e.target.checked;
        const nombreCheck = e.target.attributes.label.value

        enviarDatos(estadoCheck,nombreCheck)
    }

    return (
        <form className='contenedor-checkbox'
        >
            <input className="check-rubro"
                label = {nombreCheckbox}
                type='checkbox'
                onChange={obtenerDatos}
            ></input>
            <label className='nombre-checkbox'>{nombreCheckbox}</label>
            <p className='contador-productos'>(<span>{cantidadProductos}</span>) </p>
        </form>
    )
}

export default Rubro;