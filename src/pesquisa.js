import { useEffect, useState } from "react"
import supabase from "./supabase"
import { useNavigate, useParams } from "react-router-dom"
import "./index.css"
import LivrosPesquisa from "./modules/livrosPesquisa"


export default function Pesquisa() {
    const { pesquisa } = useParams()
    const [resultado, setResultado] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const splitado = pesquisa.split(' ');
            const resultadoPesquisa = [];

            for (const splited of splitado) {
                const { data, error } = await supabase
                    .from('livros')
                    .select()
                    .textSearch('nome', splited);
                if (error) {
                    console.log(error);
                }
                console.log(data)
                for (const item of data) {
                    if (!resultadoPesquisa.some((r) => r.id === item.id)) {
                        resultadoPesquisa.push(item);
                    }
                }
            }
            setResultado(resultadoPesquisa);
        };
        fetchData();
    }, []);

    return (
        <main>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <>
            <header>
              <h3>Biblioteca do Tinelli</h3>
              <div>
                <button onClick={() => navigate('/')}>Voltar</button>
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
              <h3 className="subtitle">Resultados da pesquisa por: {pesquisa}</h3>
              <div className="livros">
                <LivrosPesquisa/>
              </div>
            </content>
            <footer>
              <p><span onClick={() => navigate('admLogin')}>Developer</span>: Vitor Muneretto Tinelli</p>
            </footer>
          </>
        </main>
      )
}