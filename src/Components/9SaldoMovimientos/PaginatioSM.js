import React from 'react';
import { Link } from "react-router-dom";
import {Pagination} from 'react-bootstrap';
function PaginationSM(){
    return(
        <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item active>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
      </Pagination>
    )

};
export default PaginationSM;