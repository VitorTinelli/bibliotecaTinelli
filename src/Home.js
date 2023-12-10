import "./index.css";
import banner_fotos from './assets/banner_fotos.png';
import { useEffect, useState } from "react";
import Livros from "./modules/livros";

export default function Home() {
  useEffect(() => {
    document.title = 'Biblioteca do Tinelli';
  }, []);
  return (
    <main>
      <>
        <header>
          <h3>Biblioteca do Tinelli</h3>
          <div>
            <form action="" method="post" className="form_header">
              <input
                type="text"
                name="Título"
                id="Título"
                placeholder="Título do livro"
              />
              <input type="submit" value="Pesquisar" />
            </form>
          </div>
        </header>
        <main>
          <section className="banner">
            <div>
              <h1>Os livros são uma extensão da <span>memória e da imaginação.</span></h1>
              <p>Livros em inglês e português!</p>
              <button>Saiba mais</button>
            </div>
            <img src={banner_fotos} alt='fotom' width={500} height={426}></img>
          </section>
          <div className="livros">
            <Livros></Livros>
          </div>
        </main>
        <footer>
          <p>Developer: Vitor Muneretto Tinelli</p>
        </footer>
      </>
    </main>
  )
}