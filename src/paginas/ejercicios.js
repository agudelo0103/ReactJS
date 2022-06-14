import React, {Fragment} from "react";
import EjercicioLista from '../components/ejerciciosLista'
import Bienvenido from '../components/bienvenido'
import Boton from '../components/AggBoton'

const Ejercicios = ({data}) => (
    <Fragment>
    <Bienvenido
    username="raul"
    />
    <EjercicioLista
        ejercicios={data}
    />
    <Boton />
</Fragment>
)
export default Ejercicios