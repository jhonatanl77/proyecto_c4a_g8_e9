import React from 'react';
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap';
function TableTanqueo(){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Tipo de Gasolina</th>
                <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Corriente</td>
                <td>$8,611</td>
                </tr>
                <tr>
                <td>Extra</td>
                <td>14,041</td>
                </tr>
            </tbody>
        </Table>

    )

};
export default TableTanqueo;