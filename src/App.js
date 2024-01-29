import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Oferta from './componentes/Oferta'



function App() {
  return (
    <div className="App">
      <Header />
      <div className='listado-ofertas'>
        <Oferta 
        imagen = 'vacio'
        tituloOferta = '1 Kg de vacío'
        precioOferta = '5000'
        comercioOferta = 'Carnicería Supercarnes'
        domicilioComercio = 'Capitán Jaime Sola - B° La Cancha'
        rubro = 'carniceria'/>
        <Oferta 
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
      </div>
      
    </div>
  );
}

export default App;
