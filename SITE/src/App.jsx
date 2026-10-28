
import { useState } from 'react'
import './App.css'
import Listinha from './Pages/Lista'
import Head from './Components/Heade'
import BarraLateral from './Components/BE'
import Card1 from './Components/Cards'
import Noticia from './Components/NoticiaDaSem'
import Agradecer from './Components/agradecimentos'
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

      {page === 'Card 1' && <Card1 />}

      {page === 'Noticia' && <Noticia></Noticia>}

      {page === 'Agradecer' && <Agradecer></Agradecer>}

      <button onClick={() => setBarraAberta(!barraAberta)}>
  {barraAberta ? 'Fechar' : 'Abrir menu'}
</button>
{barraAberta && <BarraLateral />}
    </div>

  )
}

export default App
