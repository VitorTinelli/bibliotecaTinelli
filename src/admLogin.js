import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./modules/login";
import supabase from "./supabase";

export default function Home() {

  const navigate = useNavigate()
  useEffect(() => {
    CheckLogin()
  }, []);

  const CheckLogin = async() =>{
    const check = await supabase.auth.getSession()
    if (check.data.session != null){
        navigate('/adminControl')
    }
}


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
          <p>Developer: Vitor Muneretto Tinelli</p>
        </footer>
      </>
    </main>
  )
}