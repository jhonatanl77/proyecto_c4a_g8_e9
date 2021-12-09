import React from 'react';
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap';
function TableGPUI(){
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Fecha inicio</th>
                <th>Fecha Fin</th>
                <th>Gasolina Corriente</th>
                <th>Gasolina Extra</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>14/04/2021</td>
                <td>22/06/2021</td>
                <td>$7,700</td>
                <td>$12,300</td>
                </tr>
                <tr>
                <td>22/06/2021</td>
                <td>16/09/2021</td>
                <td>$7,900</td>
                <td>$13,200</td>
                </tr>
                <tr>
                <td>16/09/2021</td>
                <td>01/11/2021</td>
                <td>$8,200</td>
                <td>$13,677</td>
                </tr>
                <tr>
                <td>01/11/2021</td>
                <td>31/12/2021</td>
                <td>$8,611</td>
                <td>$14,041</td>
                </tr>

            </tbody>
        </Table>

    )

};
export default TableGPUI;