import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./livros.css";
import supabase from "../supabase.js"


export default function Login() {
  const [erro, setErro] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Biblioteca do Tinelli';
  }, []);
  
  async function signInWithEmail() {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
   });

   if (response.data.user != null){
    console.log(localStorage.userData)
    navigate('/adminControl')
   } else{
    setErro("Email ou senha incorretos!")
   }
   
  }

  return (
    <main>
      <>
      <div>
            <form className="form_header">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
                value={email || ''} onChange={(mail) => setEmail(mail.target.value)}
              />
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                required
                value={password || ''} onChange={(pass) => setPassword(pass.target.value)}
              />
              <input type="button" value="Entrar" onClick={signInWithEmail}/>
              {erro}
            </form>
          </div>
      </>
    </main>
  )
}