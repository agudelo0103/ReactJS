import React from "react";
import EjercicioLista from '../components/ejerciciosLista'
import Bienvenido from '../components/bienvenido'
import Boton from '../components/AggBoton'

//con las clases de babel, no es necesario hacer clases con hijos ni sus constructor, con el state da solo 
class Ejercicios extends React.Component {

    state={
            data:[{
                "identificación": 1,
                "title": "Guías Técnicas",
                "description": "Aprende ejercicios de calle y calistenia increíbles",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                "colorizquierdo": "#A74CF2",
                "rightColor": "#617BFB"
            },{
                "identificación": 2,
                "title": "Entrenamiento de habilidades",
                "description": "Aprende los secretos de las técnicas de peso corporal",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                "leftColor": "#17EAD9",
                "rightColor": "#6078EA"
            },{
                "identificación": 3,
                "title": "Entrenamiento de fuerza",
                "description": "¡Entrena en cualquier momento, en cualquier lugar y conviértete en un superhéroe!",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                "leftColor": "#FAD961",
                "rightColor": "#F76B1C"
            }]  
        }
    
    render(){
        return(
            <div>
                <Bienvenido
                username="raul"
                />
                <EjercicioLista
                    ejercicios={this.state.data}
                />
                <Boton />
            </div>
        )
    }
}
export default Ejercicios