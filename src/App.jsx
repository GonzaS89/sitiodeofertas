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
  const [noEstaAgregadoAlCarrito, setNoEstaAgregadoAlCarrito] = useState(true);
  let textoBotonCarrito;
  const itemAgregado = () => {
    setNoEstaAgregadoAlCarrito(noEstaAgregadoAlCarrito => !noEstaAgregadoAlCarrito)};
    const cambiarContenidoBoton = () => {
      textoBotonCarrito = noEstaAgregadoAlCarrito ? 'Agregado':'Agregar al carrito';
  }

  const clickeadoBotonCarrito = () => {
    setItemsCarrito(itemsCarrito + 1);
    itemAgregado();
    cambiarContenidoBoton();
    
  }

    

  return (

    <div className="App">
      <Header cantidadItems = {itemsCarrito}/>
      <div className='contenedor-principal'>
        <div className='contenedor-filtros'>
          <h1 className="titulo-filtro">Filtros de búsqueda</h1>
            {listaDeRubros.map(rubro => 
                <Rubro 
                nombreRubro = {rubro}
                cantidadProductos = {contadorDeRubros(listaDeRubrosRepetidos,rubro)}/>
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
  textoBoton = {textoBotonCarrito}/>
  
)}



{/* <Oferta 
imagen = 'patamuslo'
tituloOferta = '3 Kgs de patamuslo'
precioOferta = '3800'
comercioOferta = 'Pollería El Pollo'
domicilioComercio = 'B° La Avenida'
rubro = 'polleria'/>
<Oferta 
imagen = 'papas'
tituloOferta = '3 Kgs de papas'
precioOferta = '1500'
comercioOferta = 'Verduleria Carlos'
domicilioComercio = 'B° La Villa'
rubro = 'verduleria'/>
<Oferta 
imagen = 'supremas'
tituloOferta = '1 kg de supremas'
precioOferta = '3500'
comercioOferta = 'Pollería Jorge'
domicilioComercio = 'B° Paraiso'
rubro = 'polleria'/>
<Oferta 
imagen = 'jabonliquido'
tituloOferta = '5 lts de Jabón Liquido'
precioOferta = '5000'
comercioOferta = 'Todo Limpio'
domicilioComercio = 'B° Avenida'
rubro = 'lavanderia'/>
<Oferta 
imagen = 'yogurt1lmanfrey'
tituloOferta = 'Yogurt de litro manfrey'
precioOferta = '900'
comercioOferta = 'Despensa Algo'
domicilioComercio = 'B° Tres Luces'
rubro = 'lacteos'/> */}
      </div>
      </div>
      
      
    </div>
  );
}

export default App;
