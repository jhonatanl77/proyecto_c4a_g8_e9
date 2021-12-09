import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';

function CardTitlere(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Formulario de Recuperación de contraseña</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Escriba los datos para recuperar su contraseña</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitlere;