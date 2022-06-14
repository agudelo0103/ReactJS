
import React, { Fragment } from 'react'
import Card from './card'

const EjercicioLista = ({ejercicios}) => (
    <Fragment>
        { ejercicios.map((ejercicio) => (
            <Card 
                key={ejercicio.id}
                {...ejercicio}
            />
        ))}
    </Fragment>    
)


export default EjercicioLista