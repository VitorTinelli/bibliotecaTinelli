import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"
import supabase from "../supabase.js"


export default function Login() {
  const [erro, setErro] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const navigate = useNavigate()

  async function signInWithEmail() {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (response.data.user != null) {
      navigate('/adminControl')
    } else {
      setErro("Email ou senha incorretos!")
    }

  }

  return (
    <main className="spacing">
      <>

        <h2>Login</h2>
        <form className="login">
          <div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={email || ''} onChange={(mail) => setEmail(mail.target.value)}
              className="input"
            />
          </div>
          <div>
            <p>Senha</p>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              required
              value={password || ''} onChange={(pass) => setPassword(pass.target.value)}
              className="input"
            />
          </div>
          <input type="button" value="Entrar" onClick={signInWithEmail} className="buttonLogin" />
          {erro}
        </form>
      </>
    </main>
  )
}