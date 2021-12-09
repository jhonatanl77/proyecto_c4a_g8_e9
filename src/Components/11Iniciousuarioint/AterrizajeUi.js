import React from 'react';
import { Link } from "react-router-dom";
import {Card, CardGroup} from 'react-bootstrap';
function AterrizajeUi(){
    return(
        <>
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="./images/aterrizaje/Captura3.JPG" width='50' />
                <Card.Body>
                <Card.Title>Gestión de Precios</Card.Title>
                <Card.Text>
                
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="nav-link active" to='/IntGestiondeprecios'>Gestión de Precios</Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./images/aterrizaje/Captura4.JPG" />
                <Card.Body>
                <Card.Title>Disponibilidad de Combustible</Card.Title>
                <Card.Text>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="nav-link active" to='/IntDisponibilidadCombustibles'>Disponibilidad de Combustible</Link>
                </Card.Footer>
            </Card>
            
        </CardGroup>

        <CardGroup>
 
            <Card>
                <Card.Img variant="top" src="./images/aterrizaje/Captura2.JPG" />
                <Card.Body>
                <Card.Title>Tanqueo de vehículo</Card.Title>
                <Card.Text>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="nav-link active" to='/IntTanqueodevehiculos'>Tanqueo de vehiculo</Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./images/aterrizaje/Captura5.JPG" />
                <Card.Body>
                <Card.Title>Usuarios Externos</Card.Title>
                <Card.Text>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="nav-link active" to='/ConsUsuariosExternos'>Usuarios Externos</Link>
                </Card.Footer>
            </Card>
        </CardGroup>

        </>
    
    )

};
export default AterrizajeUi;


