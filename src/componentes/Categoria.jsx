import React from 'react';
import '../estilos/Categoria.css'

export const Categoria = (props) => {


    return (
        <>

            <div className="categoria-contenedor"
                 onClick={()=> props.enviarCategoria(props.titulo)}>
                <h1 className="titulo-categoria">{props.titulo}</h1>
                <img
                    className='imagen-categoria'
                    src={props.imagen}
                    alt='imagen-categoria'/>
            </div>

        </>
    )
}

