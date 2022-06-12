/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import imagenEjercicios from '../Imagenes/descarga.png'
import './styles/Card.css'

class Card extends React.Component{
    render(){
        return (
            <div class="card">
                <div>
                    <div>
                        <div>
                            <img src={imagenEjercicios}/>
                        </div>
                        <div>
                            <h1>Guía tecnica</h1>
                            <p>Aprende increible entrenamiento y calistenia </p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

export default Card