import './Head.css'
function Head({ mudarPagina }) {
  return (
    <header>
      <h1>Site</h1>

      <nav>
        <ul className="Janelas">
          <li onClick={() => mudarPagina('Inicio')}>Início</li>
          <li onClick={() => mudarPagina('Listinha')}>Lista</li>
          <li onClick={() => mudarPagina('Card 1')}>Card 1</li>
          <li onClick={() => mudarPagina('Noticia')}>Noticia</li>
          <li onClick={() => mudarPagina('Agradecer')}>Agradecer</li>
        </ul>
      </nav>
    </header>
  )
}

export default Head