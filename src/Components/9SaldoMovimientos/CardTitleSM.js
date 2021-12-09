import React from 'react';
import { Link } from "react-router-dom";
import {Card} from 'react-bootstrap';
function CardTitleSM(){
    return(
      <>
        <Card style={{ width: '81rem' }}>
            <Card.Body>
                <Card.Title>Estado de cuenta</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Revisa tu estado de cuenta</Card.Subtitle>
            </Card.Body>
        </Card>   
    </>
    )

};
export default CardTitleSM;