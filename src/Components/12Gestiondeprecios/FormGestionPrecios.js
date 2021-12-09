import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormGestionPrecios(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Fecha inicio</Form.Label>
                <Form.Control type="text" placeholder="Fecha inicio" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Fecha Fin</Form.Label>
                <Form.Control type="text" placeholder="Fecha Fin" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Gasolina Corriente</Form.Label>
                <Form.Control type="text" placeholder="Fecha Inicio" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Gasolina Extra</Form.Label>
                <Form.Control type="text" placeholder="Fecha Fin" />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Agregar nuevo precio
            </Button>
        </Form>
        
    )

};
export default FormGestionPrecios;