import { useEffect, useRef, useState } from "react"

// TIP: el type sirve para especificar el tipo de argumento que recibe el componente,
// con el símbolo ?, hacemos que el tipo sea opcional.
type TimerArgs = {
    milisegundos: number,
    segundos?: number
}

export const Timer = ({milisegundos}: TimerArgs) => {

    const [segundos, setSegundos] = useState(0)

    // TIP: el useRef crea una referencia que siempre va a ser el mismo espacio en memoria,
    // sin importar el número de veces que el componente se reconstruya
    const ref = useRef<NodeJS.Timer>();

    useEffect(() => {
        // TIP esto es lo mismo que con el operador && de la siguiente línea
        // if (ref.current) {
        //     clearInterval(ref.current)
        // }
        ref.current && clearInterval(ref.current)

        ref.current = setInterval(() => setSegundos(s => s + 1), milisegundos)
    }, [milisegundos])

    return (
        <>
            <h4>Timer: <small>{segundos}</small></h4>    
        </>
    )
}
