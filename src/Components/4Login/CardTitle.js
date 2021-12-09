import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitle(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Ingreso de usuarios</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Inicio de sesión</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitle;