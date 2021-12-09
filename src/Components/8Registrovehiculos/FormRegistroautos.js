import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormRegistroautos(){
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
                    <option>Automovil</option>
                    <option>Camioneta</option>
                    <option>Camion pequeño</option>
                    <option>Camion grande</option>
                    <option>Bus</option>
                    <option>Bus grande</option>
                </Form.Select>
                </Form.Group>

                

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Modelo</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>1980</option><option>1981</option><option>1982</option><option>1983</option><option>1984</option><option>1985</option><option>1986</option><option>1987</option><option>1988</option><option>1989</option>
                    <option>1990</option><option>1991</option><option>1992</option><option>1993</option><option>1994</option><option>1995</option><option>1996</option><option>1997</option><option>1998</option><option>1999</option>
                    <option>2000</option><option>2001</option><option>2002</option><option>2003</option><option>2004</option><option>2005</option><option>2006</option><option>2007</option><option>2008</option><option>2009</option>
                    <option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option>
                    <option>2020</option><option>2021</option><option>2022</option>
                </Form.Select>
                </Form.Group>

            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Marca</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Alfa Romeo</option><option>Audi</option><option>BMW</option><option>chery</option><option>Chevrolet</option><option>Citroen</option><option>Daewo</option><option>Fiat</option><option>Ford</option><option>Foton</option>
                    <option>Honda</option><option>Hiunday</option><option>Jaguar</option><option>Jeep</option><option>Kia</option><option>LandRover</option><option>Lexus</option><option>Mazda</option><option>Mercedes Benz</option><option>Mini Cooper</option>
                    <option>Mitsubishi</option><option>Nissan</option><option>Peugeot</option><option>Porsche</option><option>Renault</option><option>SEAT</option><option>Skoda</option><option>Ssanyong</option><option>Subaru</option><option>Susuki</option>
                    <option>Tesla</option><option>Toyota</option><option>Volkswagen</option><option>Volvo</option>
  
                </Form.Select>
                </Form.Group>


                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="textarea" placeholder="Descripción" />
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
export default FormRegistroautos;