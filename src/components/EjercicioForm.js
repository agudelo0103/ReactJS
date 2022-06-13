import React from "react";

class EjercicioForm extends React.Component{
    super(props){}
     state= {}

     handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
     }

  

    render(){
        const {onChange, form} = this.props
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
                            onChange={onChange}
                            value={form.imgtitle}
                       />
                   </div>
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "description"
                            type = "text"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                       />
                    </div>
                    <div className = "form-group">
                       <input
                            type = "text"
                            className = "form-control"
                            placeholder = "img"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                       />
                   </div>
                   <div className = "form-row">
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "leftColor"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                       </div>
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "rightColor"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
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