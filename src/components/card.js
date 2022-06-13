/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import imagenEjercicios from '../Imagenes/ejercicio.png'
import './styles/Card.css'
import circuloImg from '../Imagenes/circulos.png'


class Card extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }

    componentDidMount(){
        setTimeout(() =>{
             this.setState({
                image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
             })
        }, 5000)
    }
    render(){
        const  { tittle, description, img, leftColor, rightColor} = this.props
        return (

            <div className="card mx-auto proyecto-Card"
            //estilos en linea
            style={{
                backgroundImage: `url(${circuloImg}), Linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right"/>
                        </div>
                        <div className="col-6 proyecto-Card-Info">
                                <h1>{tittle}</h1>
                                <p>{description} </p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

export default Card