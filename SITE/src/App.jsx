
import { useState } from 'react'
import './App.css'
import Listinha from './Pages/Lista'
import Head from './Components/Heade'

function App() {
  const [page, setPage] = useState('Inicio')

  return (
    <div>
      <Head mudarPagina={setPage} />

      {page === 'Inicio' && (
        <h2>Bem-vindo(a) ao meu site!</h2>
      )}

      {page === 'Listinha' && <Listinha />}
    </div>
  )
}

export default App
