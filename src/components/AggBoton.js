
import React from "react";
import './styles/AggBoton.css'
import botonImg from '../Imagenes/agregar.png'
import { Link } from 'react-router-dom'

const AggBoton = () => (
    <Link to="/ejercicio/nuevo">
        <img src={botonImg} className="proyecto-Add" alt="ejercicios"/>
    </Link>
)

export default AggBoton