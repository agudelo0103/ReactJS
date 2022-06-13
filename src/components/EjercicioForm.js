import React from "react";

class EjercicioForm extends React.Component{
    super(props){}
     state= {}

     handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
     }

    handleChange = e => {

        this.setState({
            [e.target.name] : e.target.value
        })
        
    }

    render(){
        return(
           <div className = "contenedor">
               <form 
               onSubmit={this.handleSubmit}
               >
                   <div className = "form-group">
                       <input
                            type = "text"
                            className = "form-control"
                            placeholder = "title"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title}
                       />
                   </div>
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "description"
                            type = "text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.description}
                       />
                    </div>
                    <div className = "form-group">
                       <input
                            type = "text"
                            className = "form-control"
                            placeholder = "img"
                            name="img"
                            onChange={this.handleChange}
                            value={this.state.img}
                       />
                   </div>
                   <div className = "form-row">
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "leftColor"
                                name="leftColor"
                                onChange={this.handleChange}
                                value={this.state.leftColor}
                            />
                       </div>
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "rightColor"
                                name="rightColor"
                                onChange={this.handleChange}
                                value={this.state.rightColor}
                            />
                       </div>
                    </div>
                <button
                    className = "btn btn-primary"
                    type = "submit"
                >
                    Submit
                </button>   
               </form>
           </div>
        )
    }
}

export default EjercicioForm