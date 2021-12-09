import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormTanqueo(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Placa de Vehículo</Form.Label>
                <Form.Control type="text" placeholder="Placa del vehículo" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Valor a Tanquear</Form.Label>
                <Form.Control type="text" placeholder="Valor a Tanquear" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de Gasolina</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Corriente</option><option>Extra</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Metodo de pago</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Saldo de cuenta</option><option>Puntos de Cuenta</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Acepta el tratamiento de sus datos" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Tanquear
            </Button>
        </Form>
        
    )

};
export default FormTanqueo;