import React, {useState} from 'react';
import '../../styles/Main.css';
import imgLogo from '../../assets/logo-igreja.svg'
import { Link } from 'react-router-dom';

function Page400()
{
    return(
        <div id="app">
            <div className="box-inscricao">
                <figure className="logo">
                    <img src={imgLogo} alt=""/>
                </figure>
                <h1 className="title">Página não encontrada</h1>
                <h2 className="title-h2">
                    <Link to="/">
                        Ir para Página inicial
                    </Link>
                </h2>
            </div>
        </div>
    )
}
export default Page400;