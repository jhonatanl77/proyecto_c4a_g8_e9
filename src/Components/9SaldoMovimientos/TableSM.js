import React from 'react';
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap';
function TableSM(){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Fecha</th>
                <th>Movimiento</th>
                <th>Valor</th>
                <th>Saldo disponible</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>14/04/2021</td>
                <td>Recarga</td>
                <td>$100,000</td>
                <td>$100,000</td>
                </tr>
                <tr>
                <td>22/06/2021</td>
                <td>Tanqueo</td>
                <td>$80,000</td>
                <td>$20,000</td>
                </tr>
                <tr>
                <td>16/09/2021</td>
                <td>Recarga</td>
                <td>$60,000</td>
                <td>$80,000</td>
                </tr>
                <tr>
                <td>01/11/2021</td>
                <td>Tanqueo</td>
                <td>$70,000</td>
                <td>$10,000</td>
                </tr>

            </tbody>
        </Table>

    )

};
export default TableSM;