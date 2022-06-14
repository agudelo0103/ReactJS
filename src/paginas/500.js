import React from "react";
import NFI from '../Imagenes/500.png'
import '../components/styles/Errores.css'
const FatalError = ()=>(
    <div>
    <h1 className="Error_Text">Error 500 Unexpected</h1>
    <img src={NFI} alt="500 Unexpected Error" className="Error_Image"/>
    </div>
 )
export default FatalError