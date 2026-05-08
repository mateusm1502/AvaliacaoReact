import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Exercicio12 from './Pages/Exercicio12'
import Exercicio2 from './Pages/Exercicio2'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercicio12" element={<Exercicio12 />} />
      <Route path="/exercicio2" element={<Exercicio2 />} />
    </Routes>
  )
}

export default App