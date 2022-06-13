import React from "react";
import  ReactDOM  from "react-dom";
import Card from './components/card'
import bienvenido from './components/bienvenido'
import 'bootstrap/dist/css/bootstrap.css'



const contenedor = document.getElementById("root")

//ReactDOM.render(__Que elemento renderea__, __donde lo renderea__)
//los componentes se define mediante etiquetas
ReactDOM.render(<div>
                <bienvenido
                username="raul"
                />
                 <Card
                   tittle="Guía tecnica"
                   description="Aprende increible entrenamiento y calistenia"
                   img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                   leftColor="#A74CF2"
                   rightColor="#617BFB"
               />
              
               </div>, contenedor)
              
