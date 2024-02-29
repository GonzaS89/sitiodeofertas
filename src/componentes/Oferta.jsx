import React, { useState } from "react";
import "../estilos/Oferta.css";
import "../estilos/BotonCarrito.css";

function Oferta(props) {

  const [itemDentro, setItemDentro] = useState();

  const clickBoton = () => {setItemDentro(true)}
  

  return (
    <div className="contenedor-oferta">
      {/* <div className="logo-oferta">
        <img src={require("../iconos/logo-oferta.png")} 
        alt="logo-oferta"/>
      </div> */}
      <div className="contenedor-imagen-oferta">
        <img
          className="imagen-oferta"
          src={require(`../iconos/${props.rubro}.png`)}
          alt="foto"
        />
      </div>
      <div className="contenedor-detalle-oferta">
        <h1 className="titulo-oferta">{props.tituloOferta}</h1>
        <h2 className="precio-oferta">$ {props.precioOferta}</h2>
        <div className="comercio-odferta">
          <div className="comercio-nombre-ubicacion">
            <span className="logo-rubro-comercio">
              <img src={require('../iconos/tienda2.png')} 
              alt="logo-tienda"/>
            </span>
            <h3 className="nombre-comercio-oferta">{props.comercioOferta}</h3>
          </div>
          <div className="comercio-nombre-ubicacion">
            <span className="logo-ubicacion-comercio">
              <img src={require("../iconos/ubicacion.png")}
              alt="logo-ubication" />
            </span>
            <h3 className="domicilio-comercio-oferta">
              {props.domicilioComercio}
            </h3>
          </div>
        </div>
      </div>
      <div className="botonCarrito-contenedor">
        <button
          className={
            !props.listaIdsEliminadas.includes(props.idEliminada) &&  props.listaIds.includes(props.id) && itemDentro ? "botonCarrito boton-productoagregado" : "botonCarrito"
          }
          onClick={() =>
            props.clickeadoBoton(
              clickBoton(),
              props.enviarId(props.id),
              props.children
            )
          }
        >
        {!props.listaIdsEliminadas.includes(props.idEliminada) &&  props.listaIds.includes(props.id) && itemDentro ? "Agregado" : "Agregar a lista de pedidos" }
        </button>
      </div>
    </div>
  );
}

export default Oferta;
