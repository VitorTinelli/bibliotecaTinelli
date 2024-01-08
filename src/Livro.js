import { useEffect, useState } from "react";
import supabase from "./supabase";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./modules/header";
import Footer from "./modules/footer";
export default function Livro() {
  const [livros, setLivros] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const { data, error } = await supabase
          .from('livros')
          .select('id, nome, foto, postagem, nota, descricao, autor, linguagem, editora')
          .eq('id', id)
        if (error) {
          throw error;
        }
        if (data[0].nota < 7 && data[0].nota > 5) {
          const change = document.getElementsByClassName('verde');
          for (let i = 0; i < change.length; i++) {
            change[i].className = 'amarelo';
          }
        }
        else if (data[0].nota < 5) {
          const change = document.getElementsByClassName('verde');
          for (let i = 0; i < change.length; i++) {
            change[i].className = 'vermelho';
          }
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
      <Header />

      <main>
        {livros.map(livro => (
          <li key={livro.id} className="rowLivro">
            <div className="spaceLivro">
              <img src={livro.foto} className="imgLivro" />
            </div>
            <div>
              <p className="titleLivro">{livro.nome}</p>
              <p className="descricaoLivro">{livro.descricao}</p>
              <p className="verde"><span className="roxo">Nota do Leitor:</span> {livro.nota}<span className="cor">/10</span></p>
              <p className="roxo">Autor: <span className="cor">{livro.autor}</span></p>
              <p className="roxo">Editora: <span className="cor">{livro.editora}</span></p>
              <p className="roxo">Linguagem: <span className="cor">{livro.linguagem}</span></p>
            </div>
          </li>
        ))}
      </main>

      <Footer />
    </main>
  );
}
