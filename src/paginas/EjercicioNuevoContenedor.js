import React from "react";
import EjercicioForm from "../components/EjercicioForm";
import Card from "../components/card";
import '../components/styles/EjerciciosNuevos.css'
import Loading from '../components/Loading'
import FatalError from "./500";
import EjercicioNuevo from './EjercicioNuevo'

class EjercicioNuevoContenedor extends React.Component{
 
 state={
    form:{
        title:'',
        description:'', 
        img:'', 
        leftColor:'', 
        rightColor:''
    }
 }  
 handleChange = e => {
    this.setState({
      form:{   
        ...this.state.form,
        [e.target.name] : e.target.value
    }
        
    })
 
}

handleSubmit = async  e => {
   e.preventDefault()
   try {
    let config = {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Conten-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
    }
    
    let res= await fetch('http://localhost:8000/api/ejercicios', config)
    let json = await res.json()
    console.log(json)
} catch (error) {
    
   }
   console.log(this.state)
}

    render(){
        if(this.state.loading)
        return <Loading/>

        if(this.state.error)
            return <FatalError/>
            
                return(
                    <div className="EjercicioNuevo_Lateral_Spaces row">
                        <div className="col-sm EjercicioNuevo_Card_Space">
                            <Card {...this.state.form}/>
                        </div>
                        <div className="col-sm EjercicioNuevo_Form_Space">
                            <EjercicioForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            form={this.state.form}
                            />
                        </div>
                    </div>
           
        )
    }
}

export default EjercicioNuevoContenedor