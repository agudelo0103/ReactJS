import React from "react";
import EjercicioForm from "../components/EjercicioForm";
import Card from "../components/card";

class EjercicioNuevo extends React.Component{
 
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
    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <EjercicioForm
                     onChange={this.handleChange}
                     form={this.state.form}
                    />
                </div>
            </div>
           
        )
    }
}

export default EjercicioNuevo