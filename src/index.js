import React from "react";
import  ReactDOM  from "react-dom";
import Card from './components/card'



const contenedor = document.getElementById("root")

//ReactDOM.render(__Que elemento renderea__, __donde lo renderea__)
//los componentes se define mediante etiquetas
ReactDOM.render(<Card/>, contenedor)
