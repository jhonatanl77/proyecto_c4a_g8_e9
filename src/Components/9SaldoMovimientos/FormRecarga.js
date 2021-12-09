import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormRecarga(){
    return(
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Placa de Vehículo</Form.Label>
                <Form.Control type="text" placeholder="Placa del vehiculo" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de vehiculo</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Bancolombia</option><option>Banco de Bogotá</option><option>Davivienda</option><option>BBVA</option><option>Banco de occidente</option><option>Banco Itaú</option><option>Banco Agrario</option><option>Colpatria</option><option>GNB Sudameris</option><option>Banco Popular</option>
                    <option>Banco caja social</option><option>Banco Av Villas</option><option>Scotiabank</option><option>Bancoomeva</option><option>Banco Pichicncha</option><option>Banco W</option><option>Banco Finandina</option><option>Banco Falabella</option><option>Bancamia</option><option>Banco Credifinanciera</option>
                    <option>Banco Coopcentral</option><option>Bancoldex</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Acepta el tratamiento de sus datos" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Recargar
            </Button>
        </Form>
        
    )

};
export default FormRecarga;