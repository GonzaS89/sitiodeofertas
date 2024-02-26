import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Rubro from "./componentes/Rubro";
import Oferta from "./componentes/Oferta";
import CheckoutCarrito from "./componentes/CheckoutCarrito";
import Itemcarrito from "./componentes/Itemcarrito";
import data from "./data.json";

//Lista de comercio
let listaDeComercios = [];
data.forEach((producto) => {
    if (!listaDeComercios.includes(producto.comercio))
        listaDeComercios.push(producto.comercio);
});

let listaDeComerciosRepetidos = [];
data.forEach((productos) => {
    listaDeComerciosRepetidos.push(productos.comercio);
});

//Lista de barrios

let listaDeBarrios = [];
data.forEach((producto) => {
    if (!listaDeBarrios.includes(producto.domicilioComercio))
        listaDeBarrios.push(producto.domicilioComercio);
});

let listaDeBarriosRepetidos = [];
data.forEach((productos) => {
    listaDeBarriosRepetidos.push(productos.domicilioComercio);
});

const contadorDeRubros = (array, rubro) => {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        if (rubro === elemento) contador++;
    }
    return contador;
};

function App() {
    let listaDeRubros = [];
    data.forEach((producto) => {
        if (!listaDeRubros.includes(producto.rubro))
            listaDeRubros.push(producto.rubro);
    });

    let listaDeRubrosRepetidos = [];
    data.forEach((productos) => {
        listaDeRubrosRepetidos.push(productos.rubro);
    });

    const [itemsCarrito, setItemsCarrito] = useState(0);
    const [carritoClickeado, setCarritoClickeado] = useState(false);
    const [listaIds, setListaIds] = useState([]);
    const [listaIdsEliminadas, setListaIdsEliminadas] = useState([]);
    const [sumaCarrito, setSumaCarrito] = useState(0);
    const [listaDeIdsVacia, setListaIdsVacia] = useState(true);
    const [longitudListaIds, setLongitudListaIds] = useState(0);
    const [idEliminada, setIdEliminada] = useState();
    const [rubrosSeleccionados, setRubrosSeleccionados] = useState('');
    const [estadoCheckBoxSeleccionado,setEstadoCheckBoxSeleccionado] = useState(false)

    const enviarDatosCheckbox = (rubro) => {console.log(rubro)}

    const obtenerPrecio = (id) => {
        data.map(
            (producto) =>
                id === producto.id && setSumaCarrito(sumaCarrito + producto.precio)
        );
    };

    const restarPrecioProductoBorrado = (id) => {
        data.map(
            (producto) =>
                id === producto.id && setSumaCarrito(sumaCarrito - producto.precio)
        );
    };

    const recibirId = (idAgregada) => {
        setListaIds([...listaIds, idAgregada]);
        setLongitudListaIds(longitudListaIds + 1);
        obtenerPrecio(idAgregada);
        
    };

    const idEliminadaDentroDeLista = (idEliminada) => {
      return listaIdsEliminadas.map((id) => id !== idEliminada && true)
    }

    const clickeadoBotonCarrito = () => {
        setItemsCarrito(listaIds.length + 1);
    };

    const mostrarCheckoutCarrito = () => {
        setCarritoClickeado(!carritoClickeado);
        longitudListaIds > 0 ? setListaIdsVacia(false) : setListaIdsVacia(true);
    };


    const cerrarCheckoutCarrito = () => {
        setCarritoClickeado(!carritoClickeado);
        idEliminadaDentroDeLista();
        setListaIdsEliminadas(listaIds.filter((id) => id !== idEliminada));
    };


    const quitarDeListaDeCarrito = (idEnviada) => {
        setIdEliminada(idEnviada);
        setListaIdsEliminadas(listaIds.filter((id) => id !== idEliminada));
        restarPrecioProductoBorrado(idEnviada);
        setListaIds(listaIds.filter((id) => id !== idEnviada));
        longitudListaIds - 1 > 0 ? setListaIdsVacia(false) : setListaIdsVacia(true);
        setItemsCarrito(listaIds.length - 1);
        setLongitudListaIds(longitudListaIds - 1);
        setListaIdsEliminadas([...listaIdsEliminadas, idEnviada]);
    } 

    return (
        <div className="App">
            <Header
                cantidadItems={itemsCarrito}
                clickEnCarrito={mostrarCheckoutCarrito}
            />
            <>
                <div className="contenedor-principal">
                    <div className="contenedor-filtros">
                        <h1 className="titulo-filtro">Filtros de búsqueda</h1>
                        <h2 className="subtitulo-filtro">Por rubros</h2>
                        {listaDeRubros.map((rubro) => (
                            <Rubro
                                nombreCheckbox={rubro}
                                cantidadProductos={contadorDeRubros(
                                    listaDeRubrosRepetidos,
                                    rubro
                                )}
                                enviarDatosCheckbox = {enviarDatosCheckbox}
                            />
                        ))}
                        <h2 className="subtitulo-filtro">Por comercios</h2>
                        {listaDeComercios.map((comercio) => (
                            <Rubro
                                nombreCheckbox={comercio}
                                cantidadProductos={contadorDeRubros(
                                    listaDeComerciosRepetidos,
                                    comercio
                                )}
                            />
                        ))}
                        <h2 className="subtitulo-filtro">Por barrios</h2>
                        {listaDeBarrios.map((barrio) => (
                            <Rubro
                                nombreCheckbox={barrio}
                                cantidadProductos={contadorDeRubros(
                                    listaDeBarriosRepetidos,
                                    barrio
                                )}
                            />
                        ))}
                    </div>
                    <div className="listado-ofertas">
                        {data.map((productos) => (
                      
                            <Oferta
                                imagen={productos.imagen}
                                tituloOferta={productos.producto}
                                precioOferta={productos.precio}
                                comercioOferta={productos.comercio}
                                domicilioComercio={productos.domicilioComercio}
                                rubro={productos.rubro}
                                id={productos.id}
                                clickeadoBoton={clickeadoBotonCarrito}
                                enviarId={recibirId}
                                idEliminada={idEliminada}
                                listaIdsEliminadas = {listaIdsEliminadas}
                                listaIds = {listaIds}
                            />
                        ))}
                    </div>
                </div>
            </>

            <>
                <div
                    className={
                        carritoClickeado
                            ? "checkout-contenedor visible"
                            : "checkout-contenedor ocultar"
                    }
                >
                    <div className="checkout-carrito-contenedor visible">
                        <img
                            className="botondecierre"
                            onClick={cerrarCheckoutCarrito}
                            src={require("./iconos/cruz.png")}
                        />
                        <h1 className="titulo-productosagregados">
                            {listaDeIdsVacia
                                ? "Lista de pedidos vacía"
                                : "Tu lista de pedidos"}
                        </h1>
                        <div className="container-productosagregados">
                            {listaIds.map((id) =>
                                data.map(
                                    (producto) =>
                                        id === producto.id && (
                                            <Itemcarrito
                                                rubro={producto.rubro}
                                                producto={producto.producto}
                                                comercio={producto.comercio}
                                                domicilioComercio={producto.domicilioComercio}
                                                precio={producto.precio}
                                                id={producto.id}
                                                quitarDeListaDeCarrito={quitarDeListaDeCarrito}
                                            />
                                        )
                                )
                            )}
                        </div>
                        <span
                            className={
                                listaDeIdsVacia
                                    ? "sumartotalproductos ocultar"
                                    : "sumartotalproductos visible"
                            }
                        >
                            Confirmar pedido por $ {sumaCarrito}
                        </span>
                    </div>
                </div>
            </>
        </div>
    );
}

export default App;
