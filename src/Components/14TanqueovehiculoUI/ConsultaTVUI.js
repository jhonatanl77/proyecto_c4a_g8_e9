import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function ConsultaTVUI(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Número de documento</Form.Label>
                <Form.Control type="text" placeholder="Número de documento" />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Consultar
            </Button>
        </Form>
    )

};
export default ConsultaTVUI;