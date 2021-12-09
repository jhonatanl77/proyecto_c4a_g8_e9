import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitleru(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Formulario de Registro</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Registro de Usuarios</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitleru;