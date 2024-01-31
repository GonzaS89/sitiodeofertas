import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Rubro from './componentes/Rubro';
import Oferta from './componentes/Oferta';
import data from './data.json';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

let listaDeRubros = [];
{data.map (producto => {
  listaDeRubros.push(producto.rubro)
})}

function contadorProductos (array, elemento) {
    let contador;
    for (let i = 0; i < array.length; i++) {
        if(array.includes(elemento)) {contador++};
    }
    
}


function App() {
  return (

    <div className="App">
      <Header />
      <div className='contenedor-principal'>
        <div className='contenedor-filtros'>
            {listaDeRubros.map( rubro => 
                < Rubro 
                nombreRubro = {rubro}
                cantidadProductos = {contadorProductos(listaDeRubros,rubro)}/>
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
  rubro = {productos.rubro}/>
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
