import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitleTanqueo(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Plataforma de Tanqueo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Realiza el Tanqueo de tu vehículo</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitleTanqueo;