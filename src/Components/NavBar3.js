import { Link } from "react-router-dom";

function NavBar3(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/Iniciousuarioext'>Usuario interno</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to='/IntGestiondeprecios'>Gestión de Precios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/IntDisponibilidadCombustibles'>Disponibilidad de Combustible</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/IntTanqueodevehiculos'>Tanqueo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/ConsUsuariosExternos'>Usuarios externos</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-outline-light" to='/login' type="submit">Login</Link>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default NavBar3;