import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormRecuperacion(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="email" placeholder="Escriba su usuario" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="Escriba su email" />
                </Form.Group>


            </Row>

           
            <Button variant="primary" type="submit">
                Restablecer
            </Button>
        </Form>
        
    )

};
export default FormRecuperacion;