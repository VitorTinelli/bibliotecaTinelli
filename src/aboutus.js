import { useNavigate } from "react-router-dom"
import { useState } from "react";
import dev from './assets/dev.png' 
import Header from "./modules/header";
import Footer from "./modules/footer";
export default function Aboutus() {
    const navigate = useNavigate()

    return (
        <>
            <Header/>
            <content>
                <section className="banner">
                    <div>
                        <h1>Os livros são uma extensão da <span>memória e também da imaginação.</span></h1>
                        <h1>Por isso eu <span>compartilho</span> a minha <span>experiência literária</span> com <span>todos</span>!</h1>
                    </div>
                    <img src="https://m.media-amazon.com/images/I/91jmobaCGlL._CLa%7C2964,2355%7C81lKZMY8xzL.jpg,81ZUnayDIlL.jpg%7C0,0,1347,2355+1617,0,1347,2355+673,0,1617,2355_._SY300_.jpg" alt='fotom' width={500} height={426}></img>
                </section>
                <section className="banner">
                <img src={dev} alt='fotop' width={500} height={426}></img>
                    <div>
                        <h1>Eu me chamo <span>Vitor Tinelli</span> e sou o <span>desenvolvedor</span> deste site!</h1>
                        <h1>Sou formado <span>Técnico em Informática</span> pela SATC e  <span>amante dos livros</span>.</h1>
                    </div>
                    
                </section>
            </content>
            <Footer/>
        </>
    )
}