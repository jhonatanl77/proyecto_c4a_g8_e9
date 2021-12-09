import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitleUEUI(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Plataforma de consulta de usuarios externos</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Activa o desactiva un usuario</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitleUEUI;