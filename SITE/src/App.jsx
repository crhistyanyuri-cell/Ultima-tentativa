
import { useState } from 'react'
import './App.css'
import Listinha from './Pages/Lista'
import Head from './Components/Heade'
import BarraLateral from './Components/BE'
function App() {
  const [page, setPage] = useState('Inicio')
  const [barraAberta, setBarraAberta] = useState(false)
  return (
    <div>
      <Head mudarPagina={setPage} />

      {page === 'Inicio' && (
        <h2>Bem-vindo(a) ao meu site!</h2>
      )}

      {page === 'Listinha' && <Listinha />}

      <button onClick={() => setBarraAberta(!barraAberta)}>
  {barraAberta ? 'Fechar' : 'Abrir menu'}
</button>
{barraAberta && <BarraLateral />}
    </div>

  )
}

export default App
