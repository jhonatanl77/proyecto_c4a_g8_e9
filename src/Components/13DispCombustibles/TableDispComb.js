import React from 'react';
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap';
function TableDispComb(){
    return(

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Tipo de Gasolina</th>
                <th>Galones Disponibles</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Corriente</td>
                <td>1600</td>
                </tr>
                <tr>
                <td>Extra</td>
                <td>1820</td>
                </tr>
            </tbody>
        </Table>
       

    )

};
export default TableDispComb;