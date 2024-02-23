import React from "react";
import "../estilos/Itemcarrito.css";

const Itemcarrito = (props) => {
  return (
    <div className="producto-carrito">
      <img
        className="imagen-producto-carrito"
        src={require(`../iconos/${props.rubro}.png`)}
        alt="imagen-prod"
      />
      <div className="detalles-producto-carrito">
        <p className="nombre-producto">{props.producto}</p>
        <p className="comercio-producto">{props.comercio}</p>
        <p className="comerciodomicilio-producto">{props.domicilioComercio}</p>
      </div>
      <span className="precio-producto-carrito">$ {props.precio}</span>
      <div className="contenedor-iconocierre">
        <img
          className="iconocierre"
          id={props.id}
          onClick={() => props.quitarDeListaDeCarrito(props.id,props.children)}
          src={require("../iconos/tachodebasura.png")}
        />
      </div>
    </div>
  );
};

export default Itemcarrito;
