import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitleate(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Usuario externo</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Escoge la opción que necesites</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitleate;