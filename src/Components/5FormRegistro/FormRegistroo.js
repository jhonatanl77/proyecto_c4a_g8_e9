import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormRegistroo(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Idenitificación</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Clave</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Repita su Clave</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Administrador</option>
                    <option>Usuario interno</option>
                    <option>Usuario Externo</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Activo</option>
                    <option>Inactivo</option>
                </Form.Select>
                </Form.Group>

            </Row>


            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Acepta el tratamiento de sus datos" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrarse
            </Button>
        </Form>
        
    )

};
export default FormRegistroo;