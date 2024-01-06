import { useNavigate } from 'react-router-dom';
import '../index.css'
import { useState } from 'react';

export default function Header() {
    const navigate = useNavigate()
    const [pesquisa, setPesquisa] = useState()

    function handleSearch() {
        const encodedPesquisa = encodeURIComponent(pesquisa);
        navigate(`/pesquisa/${encodedPesquisa}`);
    }

    return (
        <header>
            <h3>Biblioteca do Tinelli</h3>
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
    )
}
