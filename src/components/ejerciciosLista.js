import React from "react";
import Card from "./card";

const EjercicioLista=({ejercicios}) =>(
    
   
    <div>
         
            {ejercicios.map((ejercicio) =>{
                return (
                    <Card
                    
                    key={ejercicio.id}
                    tittle={ejercicio.title}
                    description={ejercicio.description}
                    img={ejercicio.img}
                    leftColor={ejercicio.leftColor}
                    rightColor={ejercicio.rightColor}
                    /> 
                )
          
            })}
           
        </div>
        
)

export default EjercicioLista