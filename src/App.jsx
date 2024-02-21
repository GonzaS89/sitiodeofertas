import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Rubro from './componentes/Rubro';
import Oferta from './componentes/Oferta';
import data from './data.json';


//Lista de comercio
let listaDeComercios = [];
data.forEach (producto => {
  if(!listaDeComercios.includes(producto.comercio)) listaDeComercios.push(producto.comercio)
})

let listaDeComerciosRepetidos = [];
data.forEach(productos => {
  listaDeComerciosRepetidos.push(productos.comercio)
})

//Lista de barrios

let listaDeBarrios = [];
data.forEach (producto => {
  if(!listaDeBarrios.includes(producto.domicilioComercio)) listaDeBarrios.push(producto.domicilioComercio)
})

let listaDeBarriosRepetidos = [];
data.forEach(productos => {
  listaDeBarriosRepetidos.push(productos.domicilioComercio)
})


const contadorDeRubros = (array,rubro) => {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];
    if(rubro === elemento) contador++;
  }
  return contador
}


function App() {


    let listaDeRubros = [];
    data.forEach (producto => {
        if(!listaDeRubros.includes(producto.rubro)) listaDeRubros.push(producto.rubro)
    })

    let listaDeRubrosRepetidos = [];
    data.forEach(productos => {listaDeRubrosRepetidos.push(productos.rubro)})

  const [itemsCarrito, setItemsCarrito] = useState(0);
  const [carritoClickeado, setCarritoClickeado] = useState(false);
  const [listaIds, setListaIds] = useState([]);
  const [sumaCarrito, setSumaCarrito] = useState(0);
  const [listaDeIdsVacia, setListaIdsVacia] = useState(true);
  const [idEliminada, setIdEliminada] = useState('');
  const [idDentroDeListaIds,setIdDentroDeListaIds] = useState(false);
  const [longitudListaIds, setLongitudListaIds] = useState(0);

  const obtenerPrecio = id => {
        data.map(producto => id == producto.id && 
            setSumaCarrito(sumaCarrito + producto.precio))
  }

  const restarPrecioProductoBorrado = (id) => {
        data.map(producto => id == producto.id &&
            setSumaCarrito(sumaCarrito - producto.precio))        
  }
 

//   const comprobarListaIdsEstaVacia = () => {
//     longitudListaIds > 0 ?  
//     setListaIdsVacia(false) : setListaIdsVacia(true)
// }

  const recibirId = (id) => {
    setListaIds([...listaIds, id]);
    setIdDentroDeListaIds(true);
    setLongitudListaIds(longitudListaIds + 1);
    obtenerPrecio(id);
}

   
  const clickeadoBotonCarrito = () => {
    setItemsCarrito(listaIds.length + 1);
};

  const mostrarCheckoutCarrito = () => {
    setCarritoClickeado(!carritoClickeado);
    longitudListaIds  > 0 ?  
    setListaIdsVacia(false) : setListaIdsVacia(true);
};


  const cerrarCheckoutCarrito = () => {setCarritoClickeado (!carritoClickeado)};

  const quitarDeListaDeCarrito = e => {
    setListaIds(listaIds.filter(id => id !== e.target.id));
    setIdEliminada(e.target.id);
    restarPrecioProductoBorrado(e.target.id);
    longitudListaIds - 1 > 0 ?  
    setListaIdsVacia(false) : setListaIdsVacia(true);
    setItemsCarrito(listaIds.length - 1);
    setLongitudListaIds(longitudListaIds - 1);
    setIdDentroDeListaIds(false);
  }
  
  

  return (

    <div className="App">
      <Header 
      cantidadItems = {itemsCarrito}
      clickEnCarrito = {mostrarCheckoutCarrito}/>
      <div className='contenedor-principal'>
        <div className='contenedor-filtros'>
          <h1 className="titulo-filtro">Filtros de búsqueda</h1>
          <h2 className="subtitulo-filtro">Por rubros</h2>
            {listaDeRubros.map(rubro => 
                <Rubro 
                nombreCheckbox = {rubro}
                cantidadProductos = {contadorDeRubros(listaDeRubrosRepetidos,rubro)}/>
            )}
            <h2 className="subtitulo-filtro">Por comercios</h2>
            {listaDeComercios.map(comercio => 
                <Rubro 
                nombreCheckbox = {comercio}
                cantidadProductos = {contadorDeRubros(listaDeComerciosRepetidos,comercio)}/>
            )}
            <h2 className="subtitulo-filtro">Por barrios</h2>
            {listaDeBarrios.map(barrio => 
                <Rubro 
                nombreCheckbox = {barrio}
                cantidadProductos = {contadorDeRubros(listaDeBarriosRepetidos,barrio)}/>
            )}
        </div>
        <div className='listado-ofertas'>

{data.map (productos => 
  
  <Oferta 
  imagen = {productos.imagen}
  tituloOferta = {productos.producto}
  precioOferta = {productos.precio}
  comercioOferta = {productos.comercio}
  domicilioComercio = {productos.domicilioComercio}
  rubro = {productos.rubro}
  id = {productos.id}
  clickeadoBoton = {clickeadoBotonCarrito}
  enviarId = {recibirId}
  idEliminada = {idEliminada}/>
)}
      </div>
      </div>


    <div 
        className={carritoClickeado? 'checkout-contenedor visible' : 'checkout-contenedor ocultar'}>
            <div className='checkout-carrito-contenedor visible'>
             <img 
             className="botondecierre" 
             onClick={cerrarCheckoutCarrito}
             src = {require('./iconos/cruz.png')}/>  
             <h1 className="titulo-productosagregados">{listaDeIdsVacia ? 'Lista de pedidos vacía' : 'Tu lista de pedidos'}</h1>
             <div className="container-productosagregados">
                {listaIds.map(id => 
                    data.map(producto =>
                        id === producto.id &&
                        <div className="producto-carrito">
                        <img src={require(`./iconos/${producto.rubro}.png`)} 
                        alt="imagen-prod" 
                        className="imagen-producto-carrito" />
                        <div className="detalles-producto-carrito">
                            <p className="nombre-producto">{producto.producto}</p>
                            <p className="comercio-producto">{producto.comercio}</p>
                            <p className="comerciodomicilio-producto">{producto.domicilioComercio}</p>
                        </div>
                        <span className="precio-producto-carrito">$ {producto.precio}</span>
                        <span className="contenedor-iconocierre">
                          <img  
                          className='iconocierre' 
                          onClick={quitarDeListaDeCarrito}
                          src = {require('./iconos/tachodebasura.png')}
                          id = {producto.id}/>
                        </span>
                        </div>
                    )
                )}
             </div>
             <span className={listaDeIdsVacia ? 'sumartotalproductos ocultar' : 'sumartotalproductos visible'}
             >Confirmar pedido por $ {sumaCarrito}</span>
            </div>  
    </div>

    </div>

  );
}

export default App;
