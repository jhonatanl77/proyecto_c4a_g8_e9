import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormDispComb(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Fecha de entrega</Form.Label>
                <Form.Control type="text" placeholder="Fecha de entrega" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Corriente(Galones)</Form.Label>
                <Form.Control type="text" placeholder="Corriente (Galones)" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Extra (Galones)</Form.Label>
                <Form.Control type="text" placeholder="Extra (Galones)" />
                </Form.Group>

            </Row>

            <Button variant="primary" type="submit">
                Realizar Pedido
            </Button>
        </Form>
        
    )

};
export default FormDispComb;