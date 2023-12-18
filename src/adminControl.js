import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.js";
import supabase from "./supabase.js"

export default function AdminControl() {
    const navigate = useNavigate()
    async function LogOut() {
        const { error } = await supabase.auth.signOut('local')
        navigate('/admLogin')
    }
    const CheckLogin = async () => {
        const check = await supabase.auth.getSession()
        if (check.data.session == null) {
            navigate('/')
        }
    }
    useEffect(() => {
        CheckLogin()
        document.title = 'Biblioteca do Tinelli';
    }, [])

    return (
        <main>
            <>
                <header>
                    <h3>Biblioteca do Tinelli</h3>
                    <form>
                        <div>
                            <input type="submit" onClick={() => navigate('/')} value="MainPage" />
                            <input type="submit" onClick={LogOut} value="LogOut" />
                        </div>
                    </form>
                </header>

                <main>
                </main>
            </>
        </main>
    )
}