import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {

    const {formulario, handleChange} = useForm({
        postal: '11659',
        ciudad: 'Poliche'
    })

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Código postal:</label>
                <input
                    type="text"
                    className="form-control"
                    name="postal"
                    value={formulario.postal}
                    onChange={handleChange} // TIP esto es lo mismo que "(ev) => handleChange(ev)". Si se toma un argumento (ev) y se le manda a una función que está interna (como es el caso) se pueden obviar los argumentos
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input
                    type="text"
                    className="form-control"
                    name="ciudad"
                    value={formulario.ciudad}
                    onChange={handleChange}
                />
            </div>

            <pre> {JSON.stringify(formulario)} </pre>
        </form>
    )
};
