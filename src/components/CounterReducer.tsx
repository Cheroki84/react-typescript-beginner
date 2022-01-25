// TIP: el objetio del useReducer y del useState es el mismo, mantener el estado de la aplicación.
// La diferencia es que el useReducer se usa para mantener un estado un poco más complejo

import { useReducer } from "react";


//TIP: el initialState no se modifica nunca, sino que se crea uno nuevo. Para ello se usa la función reducer
const initialState = {
    contador: 10
}

// hay que definir todas las acciones que el reducer vaya a poder usar. Puede ser con "type" o con "interface"
type ContadorActions = // el operador | es ó en typescript
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }


// esta es la función reducer
const contadorReducer = (state: typeof initialState, action: ContadorActions) => { //typeof es una forma de interferir en el tipo
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }
        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }
        case 'custom':
            return {
                ...state,
                contador: action.payload
            }

        default:
            return state;
    }
}

export const CounterReducer = () => {

    const [{ contador }, dispatch] = useReducer(contadorReducer, initialState);

    return (
        <>
            <h3>Contador: {contador}</h3>
            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'incrementar' })}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => dispatch({ type: 'decrementar' })}
            >
                -1
            </button>

            <button
                className="btn btn-outline-danger"
                onClick={() => dispatch({ type: 'custom', payload: 100 })}
            >
                100
            </button>
        </>
    )
};
