import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <h2>Prova</h2>
        <Link to="/Exercicio12">
        <button>Navegar para Exercicio12</button>
        </Link>
    <br />
        <Link to="/Exercicio2">
        <button>Navegar para Exercicio2</button>
        </Link>
        </>
    )
}
export default Home