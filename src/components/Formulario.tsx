import { useForm } from "../hooks/useForm";

interface FormData {
    email: string;
    nombre: string;
    edad: number
}

export const Formulario = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: 'cherokidev@gmail.com',
        nombre: 'CherokiDev',
        edad: 37
    });

    const { email, nombre, edad } = formulario;

    // así era antes de usar el customHook useForm. Ahora este código está parecido en el customHook, y es reutilizable
    // const [fomulario, setFomulario] = useState({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value} = target;

    //     setFomulario({
    //         ...fomulario,
    //         [name]: value
    //     })
    // }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleChange} // TIP esto es lo mismo que "(ev) => handleChange(ev)". Si se toma un argumento (ev) y se le manda a una función que está interna (como es el caso) se pueden obviar los argumentos
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Edad:</label>
                <input
                    type="text"
                    className="form-control"
                    name="edad"
                    value={edad}
                    onChange={handleChange}
                />
            </div>

            <pre> {JSON.stringify(formulario)} </pre>
        </form>
    )
};
