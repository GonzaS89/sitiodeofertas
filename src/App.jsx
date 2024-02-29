import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Rubro from "./componentes/Rubro";
import Oferta from "./componentes/Oferta";
import Itemcarrito from "./componentes/Itemcarrito";
import data from "./data.json";
import { Categoria } from "./componentes/Categoria";

// Lista URL imagenes

const listaDeImagenes = [
    {
        "nombre": "carniceria",
        "url": "https://s1.eestatic.com/2019/03/26/ciencia/nutricion/carnes-dietas-nutricion_386222785_118855389_1706x960.jpg"
    },
    {
        "nombre": "polleria",
        "url": "https://www.diariodecultura.com.ar/wp-content/uploads/2022/08/polleria.jpg"
    },
    {
        "nombre": "verduleria",
        "url": "https://fotos.perfil.com/2021/01/15/trim/987/555/como-impacto-la-inflacion-en-las-verdulerias-portenas-1114624.jpg?webp"
    },
    {
        "nombre": "lacteos",
        "url": "https://clubdelicatessen.com/wp-content/uploads/2021/05/productos-lacteos.jpg"
    },
    {
        "nombre": "fiambreria",
        "url": "https://madrepata.com.ar/wp-content/uploads/2017/05/54.jpg"
    },
    {
        "nombre": "panaderia",
        "url": "https://www.colbake.com/wp-content/uploads/2019/01/tradicion-maquinaria-panaderia.jpg"
    }
]

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
    const [rubrosSeleccionados, setRubrosSeleccionados] = useState([]);

    const obtenerDatosCheckbox = (estadoCheckbox, rubroCheckbox) => {
        estadoCheckbox ?
            setRubrosSeleccionados([...rubrosSeleccionados, rubroCheckbox]) :
            setRubrosSeleccionados(rubrosSeleccionados.filter((rubros) => rubros !== rubroCheckbox))

    }

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

    const [categoriaClickeada, setCategoriaClickeada] = useState();
    const [listaProductosPorCategoria, setListaProductosPorCategoria] = useState([]);

    const agregarProductoPorCategoria = (categoria) => {
        data.map((producto) => producto.rubro === categoria &&
        setListaProductosPorCategoria([...listaProductosPorCategoria, producto])
    )}

    const recibirCategoria = (categoriaClickeada) => {
        setCategoriaClickeada(categoriaClickeada);
        agregarProductoPorCategoria(categoriaClickeada)
    }

    const setearCategoria = () => {setCategoriaClickeada(undefined)}

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
                                enviarDatos={obtenerDatosCheckbox}
                            />
                        ))}
                        {/* <h2 className="subtitulo-filtro">Por comercios</h2>
                        {listaDeComercios.map((comercio) => (
                            <Rubro
                                nombreCheckbox={comercio}
                                cantidadProductos={contadorDeRubros(
                                    listaDeComerciosRepetidos,
                                    comercio
                                )}
                            />
                        ))} */}
                        {/* <h2 className="subtitulo-filtro">Por barrios</h2>
                        {listaDeBarrios.map((barrio) => (
                            <Rubro
                                nombreCheckbox={barrio}
                                cantidadProductos={contadorDeRubros(
                                    listaDeBarriosRepetidos,
                                    barrio
                                )}
                            />
                        ))} */}
                    </div>
                    <div className="contenedor-categorias">
                        <h1 className="titulo-categorias">Elegí una categoría</h1>
                        <div className="categorias-contenedor">
                            {listaDeRubros.map((rubro) =>
                                listaDeImagenes.map((imagen) =>
                                    rubro === imagen.nombre &&
                                    <Categoria
                                        titulo={rubro}
                                        imagen={imagen.url}
                                        enviarCategoria={recibirCategoria}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className={categoriaClickeada !== undefined ? 'listado-ofertas visible mostrarDesdeDerecha' : 'listado-ofertas ocultar moverHaciaIzquierda'}>
                        {data.map((productos) => (
                            categoriaClickeada === productos.rubro &&
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
                                listaIdsEliminadas={listaIdsEliminadas}
                                listaIds={listaIds}
                            />
                        ))}
                    </div>
                </div>
            </>

            <>
                <div
                    className={
                        carritoClickeado
                            ? "checkout-contenedor visible entrarPantallaCheckout"
                            : "checkout-contenedor ocultar"
                    }
                >
                    <div className="checkout-carrito-contenedor visible">
                        <img
                            className="botondecierre"
                            onClick={cerrarCheckoutCarrito}
                            src={require("./iconos/cruz.png")}
                            alt="boton-cierre"
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
            <div className="contenedor-botones">
                <img
                className="botones-android" 
                src={require('./iconos/triangulo.png')} alt="botones-android"
                onClick={setearCategoria} />
                <img
                className="botones-android" 
                src={require('./iconos/circulo.png')} alt="botones-android" />
                <img
                className="botones-android" 
                src={require('./iconos/cuadrado.png')} alt="botones-android" />
            </div>
        </div>
    );
}

export default App;
