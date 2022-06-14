import React from "react";
import Card from "./card";

const EjercicioLista=({ejercicios}) => (
    <>
        {ejercicios.map((ejercicio) =>{
            return (
                <Card
                key={ejercicio.id}
                {...ejercicio}
                /> 
            ) 
        })}
    </>
)

export default EjercicioLista