import './head.css'
function Head({ mudarPagina }) {
  return (
    <header>
      <h1>Site</h1>

      <nav>
        <ul className="Janelas">
          <li onClick={() => mudarPagina('Inicio')}>Início</li>
          <li onClick={() => mudarPagina('Listinha')}>Lista</li>
          <li onClick={() => mudarPagina('Janela2')}>Janela2</li>
          <li onClick={() => mudarPagina('Janela3')}>Janela3</li>
          <li onClick={() => mudarPagina('Janela4')}>Janela4</li>
        </ul>
      </nav>
    </header>
  )
}

export default Head