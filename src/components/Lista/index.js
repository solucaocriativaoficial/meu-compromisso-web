import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';
import imgLogo from '../../assets/logo-igreja.svg'
import api from '../../Services/api';
import Footer from '../Footer';

async function getData()
{
    const results = await api.get("/cursopregacao")
    return results
}

function List()
{
    const [dados, setDados] = useState([]);
    useEffect(() => {
        async function getDataPromisse(){
            const response = await getData();
            if(response.status===200)
            {
                setDados(response.data)
            }
        }
        getDataPromisse();
    },[])

    return(
        <div id="app">
            <div className="box-inscricao">
                <figure className="logo">
                    <img src={imgLogo} alt=""/>
                </figure>
                <h1 className="title">Inscrições</h1>
                <h2 className="title-h2">Pessoas inscritas</h2>
                <div className="box-content-inscricoes">
                    {
                        dados.length === 0 ? "Carregando dados...":
                        dados.map(inscribe =>
                        <div className="inscricao">
                            <div>{ inscribe.complete_name}</div>
                            <div>{inscribe.city}</div>
                        </div>)
                    }
                </div>
                <div className="links">
                    <Link to="/" id="listInscribe">Voltar para página inicial</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default List;