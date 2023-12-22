import { useState } from "react";
import "./index.css";
import LivrosUltimas from "./modules/livrosUltimas";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate()
  const [pesquisa, setPesquisa] = useState()

  function handleSearch() {
    const encodedPesquisa = encodeURIComponent(pesquisa);
    navigate(`/pesquisa/${encodedPesquisa}`);
  }

  return (
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <>
        <header>
          <h3>Biblioteca do Tinelli</h3>
          <div>
            <form className="form_header" onSubmit={handleSearch}>
              <input
                type="text"
                name="Título"
                id="Título"
                placeholder="Título do livro"
                value={pesquisa} onChange={(p) => setPesquisa(p.target.value)}
              />
              <input type="submit" value="Pesquisar"/>
            </form>
          </div>
        </header>
        <content>
          <section className="banner">
            <div>
              <h1>Os livros são uma extensão da <span>memória e da imaginação.</span></h1>
              <p>Livros em inglês e português!</p>
              <button>Saiba mais</button>
            </div>
            <img src="https://m.media-amazon.com/images/I/91jmobaCGlL._CLa%7C2964,2355%7C81lKZMY8xzL.jpg,81ZUnayDIlL.jpg%7C0,0,1347,2355+1617,0,1347,2355+673,0,1617,2355_._SY300_.jpg" alt='fotom' width={500} height={426}></img>
          </section>
          <h3 className="subtitle">Últimas postagens</h3>
          <div className="livros">
            <LivrosUltimas></LivrosUltimas>
          </div>
        </content>
        <footer>
          <p><span onClick={() => navigate('admLogin')}>Developer</span>: Vitor Muneretto Tinelli</p>
        </footer>
      </>
    </main>
  )
}