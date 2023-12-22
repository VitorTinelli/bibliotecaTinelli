import "./livros.css";
import supabase from "../supabase";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function LivrosPesquisa() {
  const navigate = useNavigate();
  const { pesquisa } = useParams()
  const [resultado, setResultado] = useState([])

  const handleButton = (livroId) => {
    navigate(`/livro/${livroId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const splitado = pesquisa.split(' ');
      const resultadoPesquisa = [];

      for (const splited of splitado) {
        const { data, error } = await supabase
          .from('livros')
          .select()
          .textSearch('nome', splited);
        if (error) {
          console.log(error);
        }
        console.log(data)
        for (const item of data) {
          if (!resultadoPesquisa.some((r) => r.id === item.id)) {
            resultadoPesquisa.push(item);
          }
        }
      }
      setResultado(resultadoPesquisa);
    };
    fetchData();
  }, []);

  return (
    <main>
      <>
        <ul className="livros">
          {resultado.map(livro => (
            <li key={livro.id}>
              <div className="card">
                <img src={livro.foto} />
                <div className="space">
                  <p className="titulo">{livro.nome}</p>
                  <p className="descricao">{livro.descricao}</p>
                  <button onClick={() => handleButton(livro.id)}>
                    Mais informações
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    </main>
  )
}