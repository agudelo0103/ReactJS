import React from "react";
import './styles/bienvenido.css'

//En las arrow functions, no es necesario poner las props, solo se pone lo que se recibe, en este caso username 
const Bienvenido=({username}) =>(
    <div className="contenedor">
    <div className="proyecto-User-Info">
        <h1>Hola {username}</h1>
        <p>Vamos a trabajar en algo de nuevo</p>
    </div>
</div>
)

export default Bienvenido