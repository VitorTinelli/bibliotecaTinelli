import { useEffect, useState } from "react";
import supabase from "./supabase";

export default function Livro() {
    const [livros, setLivros] = useState([])
    const id = sessionStorage.livroSelect

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
            setLivros(data);
          } catch (error) {
            console.error("Erro ao buscar livros:", error.message);
          }
        };
        fetchLivros();
        document.title = 'Biblioteca do Tinelli';
      }, []);

    return (
        <main>
            {livros.map(livro => (
                <li key={livro.id}>
                  <img src={livro.foto} />
                  <p>{livro.nome}</p>
                  <p>{livro.descricao}</p>
                  <p>{livro.nota}</p>
                  <p>{livro.autor}</p>
                  <p>{livro.editora}</p>
                  <p>{livro.linguagem}</p>
                  <p>{livro.postagem}</p>

                </li>
              ))}
        </main>
    );
}
