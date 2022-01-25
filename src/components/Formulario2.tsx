import { ChangeEvent, useState } from "react";

export const Formulario = () => {

    const [formulario, setFormulario] = useState({
        postal: '',
        ciudad: ''
    });

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => { // este es el tipo que llevan los eventos change (inputs, selects...)
        const {name, value} = target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    // misma función que handleChange pero sin desestructurar objetos
    // const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        
    //     setFormulario({
    //         ...formulario,
    //         [ev.target.name]: ev.target.value
    //     })
    // }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Código postal:</label>
                <input
                    type="text"
                    className="form-control"
                    name="postal"
                    onChange={handleChange} // TIP esto es lo mismo que "(ev) => handleChange(ev)". Si se toma un argumento (ev) y se le manda a una función que está interna (como es el caso) se pueden obviar los argumentos
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input
                    type="text"
                    className="form-control"
                    name="ciudad"
                    onChange={handleChange}
                />
            </div>

            <pre> {JSON.stringify(formulario)} </pre>
        </form>
    )
};
