import "./livros.css";
import supabase from "../supabase";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


export default function Livros() {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/livro")
  }

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const { data, error } = await supabase
          .from('livros')
          .select('id, nome, foto, descricao');
        if (error) {
          throw error;
        }
        setLivros(data);
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
              {livros.map(livro => (
                <li key={livro.id}>
                  <div className="card">
                    <img src={livro.foto} />
                    <div className="space">
                    <p className="titulo">{livro.nome}</p>
                    <p className="descricao">{livro.descricao}</p>
                    <button onClickCapture={() => sessionStorage.livroSelect=livro.id} onClick={handleButton}>Mais informações</button>
                    </div>
                </div>
                </li>
              ))}
            </ul>
      </>
    </main>
  )
}