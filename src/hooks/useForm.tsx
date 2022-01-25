import { ChangeEvent, useState } from "react";

export const useForm = (initState: any) => {
    const [formulario, setFormulario] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => { // este es el tipo que llevan los eventos change (inputs, selects...)
        const { name, value } = target

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    // misma función que handleChange anterior pero sin desestructurar objetos
    // const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        
    //     setFormulario({
    //         ...formulario,
    //         [ev.target.name]: ev.target.value
    //     })
    // }

    return {
        formulario,
        handleChange
    }
}