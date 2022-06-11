import React from "react";
import  ReactDOM  from "react-dom";
//JSX es trabarjar con plantilla tipo html, en js. como el <h1> y poner mensaje }
//objeto
const usuario = {
     primerNombre: "cristian",
     segundoNombre: "david",
     avatar: "https://cdn.pixabay.com/photo/2021/03/02/05/07/batman-6061503_960_720.png"
}
//asi sería para la funcion nombre: const elemento = <h1>hola{nombre(usuario)}</h1>
function nombre(usuario){
  return `${usuario.primerNombre} ${usuario.segundoNombre}`
}
function saludo(usuario) {
  if (usuario) {
    return <h1>Hola, {nombre(usuario)}!</h1>;
  }
  return <h1>Hola, Extraño.</h1>;
}
const elemento = (
  <div>
    <h1>{saludo(usuario)}</h1>
     <img src={usuario.avatar}/>

  </div>


)
const contenedor = document.getElementById("root")

//ReactDOM.render(__Que elemento renderea__, __donde lo renderea__)

ReactDOM.render(elemento, contenedor)
