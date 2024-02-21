import React, { useState } from 'react';
import '../estilos/Oferta.css';
import '../estilos/BotonCarrito.css';


function Oferta (props) {

    const [clickeado, setClickeado] = useState(props.idDentroDeListaIds);

    const botonClickeado = () => {
        props.idEliminada !== props.id ? setClickeado(true) : setClickeado(false)
    }

    return (
        <div className='contenedor-oferta'>
            <div className='logo-oferta'>
                <img src={require('../iconos/logo-oferta.png')}/>
            </div>
            <div
            className='contenedor-imagen-oferta'>
                <img 
                className='imagen-oferta'
                src={require(`../imagenes/${props.imagen}.png`)} 
                alt='foto' />
            </div>
            <div className='contenedor-detalle-oferta'>
                <h1 className='titulo-oferta'>{props.tituloOferta}</h1>  
                <h2 className='precio-oferta'>$ {props.precioOferta}</h2>
                {/* <h3 className='interlinea-comercio'>Oferta disponible en:</h3> */}
                <div className='comercio-oferta'>
                    <div className='comercio-nombre-ubicacion'>
                        <span className='logo-rubro-comercio'>
                            <img 
                            src={require(`../iconos/${props.rubro}.png`)}/>
                        </span>
                        <h3 className='nombre-comercio-oferta'>{props.comercioOferta}</h3>
                    </div>
                    <div className='comercio-nombre-ubicacion'>
                        <span className='logo-ubicacion-comercio'>
                            <img src={require('../iconos/ubicacion.png')}/>
                        </span>
                        <h3 className='domicilio-comercio-oferta'>{props.domicilioComercio}</h3>
                    </div>
                </div>
            </div>
            <div className='botonCarrito-contenedor'>
            <button 
            className={clickeado || props.id == props.idEliminada ? 'botonCarrito boton-productoagregado' : 'botonCarrito'}
            onClick={()=> props.clickeadoBoton(botonClickeado(),props.enviarId(props.id),props.children)}
            >{clickeado  || props.id == props.idEliminada ? 'Agregado' : 'Agregar a lista de pedidos'}</button>
        </div>
        </div>
    )
}

export default Oferta;