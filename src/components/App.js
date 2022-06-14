import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import EjerciciosContenedor from '../paginas/EjerciciosContenedor'
import EjercicioNuevoContenedor from "../paginas/EjercicioNuevoContenedor";
import NotFound from '../paginas/NotFound'

//arrow function 
const App=() =>(
  
        <BrowserRouter>
        <Routes>
        <Route exact path="/ejercicio" element={<EjerciciosContenedor />} />
        <Route exact path="/ejercicio/nuevo" element={<EjercicioNuevoContenedor />} />
        <Route path = '*' element={<NotFound/>}/>
        </Routes>
        
    </BrowserRouter>
     )

export default App 