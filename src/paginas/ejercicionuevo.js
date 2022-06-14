import React from "react";
import Card from "../components/card";
import EjercicioForm from "../components/EjercicioForm";

const EjercicioNuevo = ({form, onChange, onSubmit}) => (

    <div className="EjercicioNuevo_Lateral_Spaces row">
    <div className="col-sm EjercicioNuevo_Card_Space">
        <Card {...form}/>
    </div>
    <div className="col-sm EjercicioNuevo_Form_Space">
        <EjercicioForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        />
    </div>
</div>
)

export default EjercicioNuevo