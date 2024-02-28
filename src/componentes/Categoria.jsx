import React from 'react';
import '../estilos/Categoria.css'

export const Categoria = ({ titulo, imagen, manejarClick}) => {


    return (
        <>

            <div className="categoria-contenedor"
                 onClick={manejarClick}>
                <h1 className="titulo-categoria">{titulo}</h1>
                <img
                    className='imagen-categoria'
                    src={imagen}/>
            </div>

        </>
    )
}

