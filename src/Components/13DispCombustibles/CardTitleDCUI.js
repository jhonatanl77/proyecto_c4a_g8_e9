import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitleDCUI(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Plataforma de Disponibilidad de Combustible</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Gestiona los pedidos de tu combustible</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitleDCUI;