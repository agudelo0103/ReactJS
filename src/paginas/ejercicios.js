import React from "react";
import EjercicioLista from '../components/ejerciciosLista'
import Bienvenido from '../components/bienvenido'
import Boton from '../components/AggBoton'

//con las clases de babel, no es necesario hacer clases con hijos ni sus constructor, con el state da solo 
class Ejercicios extends React.Component {

    state={
            data:[]  
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