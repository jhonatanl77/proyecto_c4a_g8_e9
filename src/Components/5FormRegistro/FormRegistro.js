import React from 'react';
import { Link } from "react-router-dom";
import {Button, Modal,Form, Container, Row,Col} from 'react-bootstrap';
function FormRegistro(){
    return(
        <form >
        <div className="form-group">
            <label className="control-label">Id</label>
            <input className="form-control" type="number" name="id" value="" onchange=""/>
        </div>
        <div className="form-group">
            <label className="control-label">Nombre</label>
            <input className="form-control" type="text" name="nombre" value="" onchange=""/>
        </div>
        <div className="form-group">
            <label className="control-label">Fecha</label>
            <input className="form-control" type="date" name="fecha" value=""onchange=""/>
        </div>
        <div className="form-group">
            <label className="control-label">Director</label>
            <input className="form-control" type="text" name="director" value="" onchange=""/>
        </div>
        <div className="form-group">
            <label className="control-label">Descripción</label>
            <textarea className="form-control" type="text" name="descripcion" value="" onchange="" rows="3"></textarea>
        </div>
        <div className="form-group">
            <label className="control-label">¿Completado?</label>
            <select className="form-control" type="text" name="" value="" onchange="">
                <option value="true">Si</option>
                <option value="false">No</option>

            </select>
        </div>
        <div className="form-group text-center">
            <button type="submit" className="btn btn-primary mr-1">Guardar</button>
            <button type="button" className="btn btn-danger">Cancelar</button>
        </div>

    </form>
    )

};
export default FormRegistro;