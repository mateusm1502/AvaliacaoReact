import './style.css'
import { useState } from 'react'
import { Link, Links } from 'react-router-dom'

function Exercicio12() {

    const [numero, setNumero] = useState("")
    const [resultado, setResultado] = useState("")

    function verificar(event) {
        event.preventDefault()

        if (Number(numero) % 5 === 0) {
            setResultado("É múltiplo de 5")
        } else {
            setResultado("Não é múltiplo de 5")
        }
    }

    return (
        <>
            <h2>Múltiplo de 5</h2>

            <form onSubmit={verificar}>
                <input
                    type="number"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />

                <button type="submit">Verificar</button>

                <p>{resultado}</p>
            </form>
        <br />
            <Link to="/">
            <button>Navegar para Home</button>
            </Link>
        </>
    )
}

export default Exercicio12