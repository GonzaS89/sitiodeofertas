import React, { useCallback, useState } from 'react';
import '../estilos/rubro.css';

function Rubro(props) {

    const [estadoCheckBox, setEstadoCheckbox] = useState(false);
    const [rubroCheckbox, setRubroCheckbox] = useState('');

    const obtenerDatos = (e) => {
        setEstadoCheckbox(e.target.checked)
        setRubroCheckbox(e.target.attributes.label.value)
    }

    const enviarDatosCheckbox = (e) => {
        e.preventDefault()
    }

    

    return (
        <form className='contenedor-checkbox'
            onSubmit={enviarDatosCheckbox}
        >
            <input className="check-rubro"
                label={props.nombreCheckbox} type='checkbox'
                value={estadoCheckBox}
                onChange={obtenerDatos}
                onClick={()=>props.clickCheck(rubroCheckbox)}
            ></input>
            <label className='nombre-checkbox'>{props.nombreCheckbox}</label>
            <p className='contador-productos'>(<span>{props.cantidadProductos}</span>) </p>
        </form>
    )
}

export default Rubro;