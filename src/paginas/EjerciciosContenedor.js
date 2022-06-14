import React from "react";
import Loading from  '../components/Loading'
import FatalError from "./500";
import Ejercicios from "./Ejercicios";
import useFetch from "../hooks/useFetch";
import url from "../config";

const EjerciciosContenedor = () => {

    const{data,loading,error} = useFetch(`${url}/Ejercicios`)
        if(loading)
            return <Loading />

        if(error)
            return <FatalError/>
            
        return <Ejercicios
             data={data}
             />
}
export default EjerciciosContenedor
