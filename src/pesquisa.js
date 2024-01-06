import { useEffect, useState } from "react"
import supabase from "./supabase"
import { useNavigate, useParams } from "react-router-dom"
import "./index.css"
import LivrosPesquisa from "./modules/livrosPesquisa"
import Header from "./modules/header"
import Banner from "./modules/banner"
import Footer from "./modules/footer"

export default function Pesquisa() {
  const { pesquisa } = useParams()
  const [resultado, setResultado] = useState([])
  
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <>

        <Header />

        <Banner />

        <h3 className="subtitle">Resultados da pesquisa por: {pesquisa}</h3>
        <div className="livros">
          <LivrosPesquisa />
        </div>

        <Footer/>

      </>
    </main>
  )
}