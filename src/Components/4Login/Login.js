import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function Login(){
    return(
      <>
      <Container ClassName="m-5">
        <Row>
          <Col lg={4} md={6} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu usario" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu clave" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordar" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
          <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to='/RegistroUsuario'>¿No tienes cuenta?... Registrate!</Link>
                <Link className="dropdown-item" to='/Recuperacontraseña'>¿Has olvidado tu contraseña?</Link>
          </Col>      
        </Row>

      </Container>
        
   </>
    )

};
export default Login;