import React from "react";
import  ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'


const contenedor = document.getElementById("root")

//ReactDOM.render(__Que elemento renderea__, __donde lo renderea__)
//los componentes se define mediante etiquetas
ReactDOM.render(<App/>, contenedor)
              
