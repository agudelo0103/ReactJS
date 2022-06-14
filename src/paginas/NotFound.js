import React from "react";
import NotFoundImg from '../Imagenes/404.png'
import '../components/styles/Errores.css'
const NotFound = ()=>(
    <div>
    <h1 className="Error_Text">Error 404 Page Not Found</h1>
    <img src={NotFoundImg} alt="404 NotFound" className="Error_Image"/>
    </div>
 )
export default NotFound