import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitlefra(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Formulario de Registro de Vehículos</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Registra tu vehiculo</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitlefra;