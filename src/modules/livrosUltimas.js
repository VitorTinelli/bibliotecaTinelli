import "./livros.css";
import supabase from "../supabase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LivrosUltimas() {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  const handleButton = (livroId) => {
    navigate(`/livro/${livroId}`);
  };

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const { data, error } = await supabase
          .from("livros")
          .select("id, nome, foto, descricao");
        if (error) {
          throw error;
        }
        setLivros(data.reverse());
      } catch (error) {
        console.error("Erro ao buscar livros:", error.message);
      }
    };
    fetchLivros();
  }, []);

  return (
    <main>
      <>
        <ul className="livros">
          {livros.slice(0, 6).map((livro) => (
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
  );
}