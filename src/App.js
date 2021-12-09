import logo from './logo.svg';
import './App.css';
import react from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"
import ImgContacto from './Components/2Contacto/ImgContacto';
import InfoContacto from './Components/2Contacto/InfoContacto';
import ImgTexapuntos from './Components/3Texapuntos/ImgTexapuntos';
import InfoTexapuntos from './Components/3Texapuntos/InfoTexapuntos';
import Login from './Components/4Login/Login';
import CardTitle from './Components/4Login/CardTitle';
import FormRegistro from './Components/5FormRegistro/FormRegistro';
import FormRegistroo from './Components/5FormRegistro/FormRegistroo';
import CardTitleru from './Components/5FormRegistro/CardTitleru';
import FormRecuperacion from './Components/6FormRecuperacion/FormRecuperacion';
import CardTitlere from './Components/6FormRecuperacion/CardTitlere';
import AterrizajeUe from './Components/7Aterrizajeue/AterrizajeUe';
import AterrizajeUi from './Components/11Iniciousuarioint/AterrizajeUi';
import CardTitleate from './Components/7Aterrizajeue/CardTitleate';
import FormRegistroautos from './Components/8Registrovehiculos/FormRegistroautos';
import CardTitlefra from './Components/8Registrovehiculos/CardTitlefra';
import NavBar2 from './Components/NavBar2';
import CardTitleSM from './Components/9SaldoMovimientos/CardTitleSM';
import TableSM from './Components/9SaldoMovimientos/TableSM';
import { Pagination } from 'react-bootstrap';
import PaginationSM from './Components/9SaldoMovimientos/PaginatioSM';
import FormRecargaSaldo from './Components/9SaldoMovimientos/FormRecarga';
import FormRecarga from './Components/9SaldoMovimientos/FormRecarga';
import TableTanqueo from './Components/10Tanqueovehiculo/TableTanqueo';
import CardTitleTanqueo from './Components/10Tanqueovehiculo/CardTitleTanqueo';
import FormTanqueo from './Components/10Tanqueovehiculo/FormTanqueo';
import NavBar3 from './Components/NavBar3';
import CardTitlegpui from './Components/12Gestiondeprecios/CardTitlegpui';
import FormGestionPrecios from './Components/12Gestiondeprecios/FormGestionPrecios';
import TableGPUI from './Components/12Gestiondeprecios/TableGPUI';
import CardTitleDCUI from './Components/13DispCombustibles/CardTitleDCUI';
import TableDispComb from './Components/13DispCombustibles/TableDispComb';
import ButtonCons from './Components/13DispCombustibles/ButtonCons';
import FormDispComb from './Components/13DispCombustibles/FormDispComb';
import CardTitleTVUI from './Components/14TanqueovehiculoUI/CardTitleTVUI';
import TableTVUI from './Components/14TanqueovehiculoUI/TableTVUI';
import ConsultaTVUI from './Components/14TanqueovehiculoUI/ConsultaTVUI';
import FormTVUI from './Components/14TanqueovehiculoUI/FormTVUI';
import CardTitleUEUI from './Components/15UsuariosExternosUI/CardTitleUEUI';
import TableUEUI from './Components/15UsuariosExternosUI/TableUEUI';
import FormUEUI from './Components/15UsuariosExternosUI/FormUEUI';



function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <NavBar/>
            <Carousel/>
              Pagina 1 - Inicio
            <Footer/>          
          </Route>
          <Route path="/contacto">
            <NavBar/>
            <ImgContacto/>
            <InfoContacto/>
              Pagina 2 - contacto
            <Footer/> 
          </Route>
          <Route path="/texapuntos">
            <NavBar/>
            <ImgTexapuntos/>
            <InfoTexapuntos/>
              Pagina 3 - Texapuntos
            <Footer/> 
          </Route>
          <Route path="/login">
            <NavBar/>
            <CardTitle/>
            <Login/>
              Pagina 4-Login
            <Footer/> 
          </Route>
          <Route path="/RegistroUsuario">
            <NavBar/>
            <CardTitleru/>
            <FormRegistroo/>
              Pagina 5-RegistroUsuarios
            <Footer/> 
          </Route>
          <Route path="/Recuperacontraseña">
            <NavBar/>
            <CardTitlere/>
            <FormRecuperacion/>
              Pagina 6-Recuperacontraseña
            <Footer/> 
          </Route>
          <Route path="/Iniciousuarioext">
            <NavBar/>
            <CardTitleate/>
            <AterrizajeUe/>
              Pagina 7-Aterrizaje usuario Externo
            <Footer/> 
          </Route>
          <Route path="/Registrovehiculo">
            <NavBar2/>
            <CardTitlefra/>
            <FormRegistroautos/>
              Pagina 8-Registra tu vehiculo
            <Footer/> 
          </Route>
          <Route path="/Saldoymovimientos">
            <NavBar2/>
            <CardTitleSM/>
            <TableSM/>
            <PaginationSM/>
            <hr></hr>
            <FormRecarga/>
            Pagina 9-Ver saldo y movimientos 
            <Footer/> 
          </Route>
          <Route path="/Tanqueovehiculo">
            <NavBar2/>
            <CardTitleTanqueo/>
            <TableTanqueo/>
            <hr></hr>
            <FormTanqueo/>
            Pagina 10-Tanquea tu vehiculo
            <Footer/> 
          </Route>
          <Route path="/Iniciousuarioint">
            <NavBar/>
            <AterrizajeUi/>
              Pagina 11-Aterrizaje usuario interno
            <Footer/> 
          </Route>
          <Route path="/IntGestiondeprecios">
            <NavBar3/>
            <CardTitlegpui/>
            <TableGPUI/>
            <hr></hr>
            <FormGestionPrecios/>
              Pagina 12-Gestión de Precios
            <Footer/> 
          </Route>
          <Route path="/IntDisponibilidadCombustibles">
            <NavBar3/>
            <CardTitleDCUI/>
            <TableDispComb/>
            <ButtonCons/>
            <hr></hr>
            <FormDispComb/>
              Pagina 13-Disponibilidad de Combustibles
            <Footer/> 
          </Route>
          <Route path="/IntTanqueodevehiculos">
            <NavBar3/>
            <CardTitleTVUI/>
            <TableTVUI/>
            <ConsultaTVUI/>
            <hr></hr>
            <FormTVUI/>
              Pagina 14-Tanqueo de vehiculos
            <Footer/> 
            </Route>
          <Route path="/ConsUsuariosExternos">
            <NavBar3/>
            <CardTitleUEUI/>
            <TableUEUI/>
            <ConsultaTVUI/>
            <hr></hr>
            <FormUEUI/>
              Pagina 15-Usuarios Externos
            <Footer/> 
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
