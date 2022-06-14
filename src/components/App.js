import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EjercicioContenedor from '../paginas/EjerciciosContenedor'
import EjercicioNuevoContenedor from '../paginas/EjercicioNuevoContenedor'
import NotFound from '../paginas/NotFound'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/ejercicio" component={EjercicioContenedor} />
            <Route exact path="/ejercicio/nuevo" component={EjercicioNuevoContenedor} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App