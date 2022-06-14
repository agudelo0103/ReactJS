import React from "react";
import Card from "./card";

const EjercicioLista=({ejercicios}) => (
    <>
        {ejercicios.map((ejercicio) =>{
            return (
                <Card
                key={ejercicio.id}
                    title={ejercicio.title}
                    description={ejercicio.description}
                    img={ejercicio.img}
                    leftColor={ejercicio.leftColor}
                    rightColor={ejercicio.rightColor}
                /> 
            ) 
        })}
    </>
)

export default EjercicioLista