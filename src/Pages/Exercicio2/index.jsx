import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Exercicio2() {

    const [comprimento, setComprimento] = useState("")
    const [largura, setLargura] = useState("")
    const [resultado, setResultado] = useState("aaaaaaaaaa")

    function handleSubmit(e) {
        e.preventDefault()

        const area = parseFloat(comprimento) * parseFloat(largura)
        setResultado(`area: ${area} m²`)
    }
    return (
        <>
            <h2>Area do terreno</h2>

            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="comprimento" onChange={e => setComprimento(e.target.value)} />
                <input type="number" placeholder="largura" onChange={e => setLargura(e.target.value)} />

                <p>{resultado}</p>
                
                <button type="submit">Calcular</button>
            </form>
            <br />
            <Link to="/">
                <button>Navegar para Home</button>
            </Link>
        </>
    )
}
export default Exercicio2