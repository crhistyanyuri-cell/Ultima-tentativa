import { useState } from "react"

function Listinha(){
    const[nome, setNome] = useState([])
    const [nomes, setnomes] = useState([])

    return(
            <div>
            <h1>Lista de nomes</h1>
            <input type="text"
            placeholder="Digite os nomes aqui:"
            value={nome}
            onChange={(evento) => setNome (evento.target.value)}
            />
            <button onClick={() =>{
                setnomes([...nomes, nome])
                setNome('')
            }}>
                Adicionar
            </button>
            <h2>Lista</h2>

            <ul>
                {nomes.map((nome, indice) =>(
                    <li key={indice}>{nome}</li>
                ))}
            </ul>
        </div>

    )
    
}
export default Listinha