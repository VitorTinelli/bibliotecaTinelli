import "./index.css";
import banner_fotos from './assets/banner_fotos.png';
import { useEffect, useState } from "react";
import Livros from "./modules/livros";
import { useNavigate } from "react-router-dom";
import Login from "./modules/login";
export default function Home() {

  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Biblioteca do Tinelli';
  }, []);

  return (
    <main>
      <>
        <header>
          <h3>Biblioteca do Tinelli</h3>
          <h3 onClick={() => navigate('/')}>Home</h3>
        </header>
        <main>
          <Login/>
        </main>
        <footer>
          <p><span onClick={() => navigate('admLogin')}>Developer</span>: Vitor Muneretto Tinelli</p>
        </footer>
      </>
    </main>
  )
}