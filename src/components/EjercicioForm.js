import React from "react";

const EjercicioForm = ({onChange, form, onSubmit}) => (
<div className = "container">
               <form 
               onSubmit={onSubmit}
               >
                   <div className = "form-group my-3">
                       <input
                            type = "text"
                            className = "form-control"
                            placeholder = "title"
                            name="title"
                            onChange={onChange}
                            value={form.imgtitle}
                       />
                   </div>
                   <div className = "form-group mb-3">
                       <input
                            className = "form-control"
                            placeholder = "description"
                            type = "text"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                       />
                    </div>
                    <div className = "form-group mb-3">
                       <input
                            type = "text"
                            className = "form-control"
                            placeholder = "img"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                       />
                   </div>
                   <div className = "row mb-3">
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

export default EjercicioForm