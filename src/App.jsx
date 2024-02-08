import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Rubro from './componentes/Rubro';
import Oferta from './componentes/Oferta';

import data from './data.json';

let listaDeRubros = [];
data.forEach (producto => {
  if(!listaDeRubros.includes(producto.rubro)) listaDeRubros.push(producto.rubro)
})

let listaDeRubrosRepetidos = [];
data.forEach(productos => {
  listaDeRubrosRepetidos.push(productos.rubro)
})

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
    if(rubro == elemento) contador++;
  }
  return contador
}


function App() {

  const [itemsCarrito, setItemsCarrito] = useState(0);

  

  const clickeadoBotonCarrito = () => {
    setItemsCarrito(itemsCarrito + 1); 
       
  }

    

  return (

    <div className="App">
      <Header cantidadItems = {itemsCarrito}/>
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
  clickeadoBoton = {clickeadoBotonCarrito}
  id = {productos.id}/>
  
)}
      </div>
      </div>
    </div>
  );
}

export default App;
