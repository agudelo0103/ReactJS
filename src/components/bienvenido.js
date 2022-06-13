import React from "react";

function bienvenido(props){
    return(
        <div className="contenedor">
            <div className="proyecto-User-Info">
                <h1>Hola {props.username}</h1>
                <p>Vamos a trabajar en algo de nuevo</p>
            </div>
        </div>
    )
}

export default bienvenido