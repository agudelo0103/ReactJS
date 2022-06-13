import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Ejercicios from '../paginas/ejercicios'
import EjercicioNuevo from "../paginas/ejercicionuevo";
import NotFound from '../paginas/NotFound'

//arrow function 
const App=() =>(
  
        <BrowserRouter>
        <Routes>
        <Route exact path="/ejercicio" element={<Ejercicios />} />
        <Route exact path="/ejercicio/nuevo" element={<EjercicioNuevo />} />
        <Route path = '*' element={<NotFound/>}/>
        </Routes>
        
    </BrowserRouter>
     )

export default App 