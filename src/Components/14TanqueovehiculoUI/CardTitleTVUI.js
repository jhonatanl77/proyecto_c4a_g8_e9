import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitleTVUI(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Plataforma de Tanqueo de vehiculo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tanqueo de vehiculos</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitleTVUI;