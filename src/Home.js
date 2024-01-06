import { useState } from "react";
import "./index.css";
import LivrosUltimas from "./modules/livrosUltimas";
import { useNavigate } from "react-router-dom";
import Header from "./modules/header";
import Banner from "./modules/banner";
import Footer from "./modules/footer";
export default function Home() {

  return (
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <>
        <Header/>
        <content>
          <Banner/>
          <h3 className="subtitle">Últimas postagens</h3>
          <div className="livros">
            <LivrosUltimas></LivrosUltimas>
          </div>
        </content>
        <Footer/>
      </>
    </main>
  )
}