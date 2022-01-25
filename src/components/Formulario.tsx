import { ChangeEvent, useState } from "react";
import { useForm } from "../hooks/useForm";

export const Formulario = () => {

    const {formulario, handleChange} = useForm({
        email: '',
        nombre: ''
    })

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange} // TIP esto es lo mismo que "(ev) => handleChange(ev)". Si se toma un argumento (ev) y se le manda a una función que está interna (como es el caso) se pueden obviar los argumentos
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    onChange={handleChange}
                />
            </div>

            <pre> {JSON.stringify(formulario)} </pre>
        </form>
    )
};
