import React from 'react';
import { Link } from "react-router-dom";
import {Card, CardGroup} from 'react-bootstrap';
function AterrizajeUe(){
    return(
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="./images/aterrizaje/Captura1.JPG" width='50' />
                <Card.Body>
                <Card.Title>Registra tu vehículo</Card.Title>
                <Card.Text>
                
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="nav-link active" to='/Registrovehiculo'>Registra tu vehiculo</Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./images/aterrizaje/Captura2.JPG" />
                <Card.Body>
                <Card.Title>Ver saldo y movimientos</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="nav-link active" to='/Saldoymovimientos'>Ver saldos y movimientos</Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="./images/aterrizaje/Captura3.JPG" />
                <Card.Body>
                <Card.Title>Tanquea tu vehículo</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="nav-link active" to='/Tanqueovehiculo'>Tanquea tu vehiculo</Link>
                </Card.Footer>
            </Card>
    </CardGroup>
  
    )

};
export default AterrizajeUe;