import { useNavigate } from "react-router-dom"
export default function Footer(){
    const navigate = useNavigate()

    return(
        <footer>
          <p><span onClick={() => navigate('/admLogin')}>Developer</span>: Vitor Muneretto Tinelli</p>
        </footer>
    )
}