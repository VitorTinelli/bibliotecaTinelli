import { useNavigate } from "react-router-dom"
export default function Banner(){
    const navigate = useNavigate()
    return(
        <content>
          <section className="banner">
            <div>
              <h1>Os livros são uma extensão da <span>memória e também da imaginação.</span></h1>
              <p>Livros em inglês e português!</p>
              <button onClick={() => navigate('/aboutus')}>Saiba mais</button>
            </div>
            <img src="https://m.media-amazon.com/images/I/91jmobaCGlL._CLa%7C2964,2355%7C81lKZMY8xzL.jpg,81ZUnayDIlL.jpg%7C0,0,1347,2355+1617,0,1347,2355+673,0,1617,2355_._SY300_.jpg" alt='fotom' width={500} height={426}></img>
          </section>
        </content>
    )
}