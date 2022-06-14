import React from "react";
import EjercicioLista from '../components/ejerciciosLista'
import Bienvenido from '../components/bienvenido'
import Boton from '../components/AggBoton'
import Loading from  '../components/Loading'
import FatalError from "./500";
//con las clases de babel, no es necesario hacer clases con hijos ni sus constructor, con el state da solo 
class Ejercicios extends React.Component {

    state={
            data: [],
            loading: true,
            error: null
        }
    
    async componentDidMount(){
        await this.fetchEjercicios()

    }

    fetchEjercicios=async() => {
        try {
            let res= await fetch('http://localhost:8000/api/ejercicios')
            let data = await res.json()
    
            this.setState({
                    data,
                    loading: false
            })
        } catch (error) {
            this.setState({

                loading: false,
                error
        })
        }
      
        
    
    }


    render(){
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError/>
            
        return(
            <React.Fragment>
                <Bienvenido
                username="raul"
                />
                <EjercicioLista
                    ejercicios={this.state.data}
                />
                <Boton />
            </React.Fragment>
        )
    }
}
export default Ejercicios