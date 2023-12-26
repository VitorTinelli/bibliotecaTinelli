import { useNavigate } from "react-router-dom"
import { useState } from "react";
import dev from './assets/dev.png' 
export default function Aboutus() {
    const navigate = useNavigate()
    const [pesquisa, setPesquisa] = useState()

    function handleSearch() {
        const encodedPesquisa = encodeURIComponent(pesquisa);
        navigate(`/pesquisa/${encodedPesquisa}`);
    }

    return (
        <>
            <header>
                <h3 onClick={() => navigate('/')} className="mouse">Biblioteca do Tinelli</h3>
                <div>
                    <form className="form_header" onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="Título"
                            id="Título"
                            placeholder="Título do livro"
                            value={pesquisa} onChange={(p) => setPesquisa(p.target.value)}
                        />
                        <input type="submit" value="Pesquisar" />
                    </form>
                </div>
            </header>
            <content>
                <section className="banner">
                    <div>
                        <h1>Os livros são uma extensão da <span>memória e da imaginação.</span></h1>
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
            <footer>
                <p><span onClick={() => navigate('/admLogin')}>Developer</span>: Vitor Muneretto Tinelli</p>
            </footer>
        </>
    )
}