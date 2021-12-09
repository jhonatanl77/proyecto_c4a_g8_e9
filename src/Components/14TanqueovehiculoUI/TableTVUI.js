import React from 'react';
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap';
function TableTVUI(){
    return(

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Número de documento</th>
                <th>Saldo</th>
                <th>Puntos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Carlos Alberto Perez Sosa</td>
                <td>123456</td>
                <td>$100,000</td>
                <td>30</td>
                </tr>

            </tbody>
        </Table>
       

    )

};
export default TableTVUI;