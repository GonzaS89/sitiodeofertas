import React from 'react';

function Oferta () {
    return (
        <div className='contenedor-oferta'>
            <img
            className='imagen-oferta'
            src={require('../imagenes/vacio.png')} 
            alt='foto'/>
            <div className='contenedor-detalle-oferta'>
                <h1 className='titulo-oferta'>1 kilo de vacío</h1>  
                <h2 className='precio-oferta'>$ 5000</h2>
                <h3 className='comercio-oferta'>Podés conseguir ésto en Carniceria SuperCarnes</h3>
            </div>
        </div>
    )
}

export default Oferta;