import { useState } from "react"

interface User {
    uid: string,
    name: string
}

export const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: 'abc123',
            name: 'CherokiDev'
        })
    }

    return (
        <div>
            <h3>Usuario:</h3>

            <button
                onClick={login}
                className="btn btn-outline-primary"
            >
                Login
            </button>

            {
                (!user)
                    ? <pre>No hay usuario</pre>
                    : <pre> {JSON.stringify(user)}</pre>
            }
        </div>
    )
}
