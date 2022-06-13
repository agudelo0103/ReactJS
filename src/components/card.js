
import React from 'react'
import circlesImg from '../Imagenes/circulos.png'
import emptyImg from '../Imagenes/vacio.png'
import './styles/Card.css'

class Card extends React.Component {

    render(){
        const {title, description, img, leftColor, rightColor } = this.props
        return(
            <div className='card mx-auto proyecto-Card'
                style={{
                    backgroundImage: `url(${circlesImg}), Linear-gradient(to right, ${leftColor}, ${rightColor})`
                }}
            >
            <div className='card-body'>
                <div className='row center'>
                        <div className='col-6'>
                            <img src={img} className='float-right' alt="ejercicio"/>   
                        </div>
                        <div className='col-6 proyecto-Card-Info'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                        </div>
            
                </div>
            </div>
        )
    }
} 
export default Card 