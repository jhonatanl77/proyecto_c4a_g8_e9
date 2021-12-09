import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormUEUI(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Número de documento</Form.Label>
                <Form.Control type="text" placeholder="Número de documento" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Activo</option><option>Inactivo</option>
                </Form.Select>
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Activar/Desactivar
            </Button>
        </Form>
        
    )

};
export default FormUEUI;