import React, {useState, useEffect} from 'react';
import '../../styles/Main.css';
import imgLogo from '../../assets/logo-igreja.svg'
import iconLocation from '../../assets/icon-location.png';
import iconHours from '../../assets/icon-hours.png';
import iconCalendar from '../../assets/icon-calendar.png';
import api from '../../Services/api';

async function getData()
{
    const results = await api.get("/cursopregacao")
    return results
}

function List()
{
    const [dados, setDados] = useState([]);
    useEffect( async () => {
        const response = await getData();
        if(response.status===200)
        {
            setDados(response.data)
        }
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
                        dados.length == 0 ? "Nenhum registro encontrado!":
                        dados.map(inscribe =>
                        <div className="inscricao">
                            <div>{ inscribe.complete_name}</div>
                            <div>{inscribe.city}</div>
                        </div>)
                    }
                </div>
            </div>
            <div className="box-info-event">
                <h1>INFORMAÇÕES</h1>
                <div className="info-event">
                    <div className="info-especific">
                        <div className="label-info">
                            <img src={iconCalendar} alt=""/>
                            Data
                        </div>
                        <span className="data">22/03/2020</span>
                    </div>
                    <div className="info-especific">
                        <div className="label-info">
                            <img src={iconHours} alt=""/>
                            Horário
                        </div>
                        <span className="data">15:30</span>
                    </div>
                    <div className="info-especific">
                        <div className="label-info">
                            <img src={iconLocation} alt=""/>
                            Local
                        </div>
                        <span className="data"><a href='https://goo.gl/maps/a6sSZxeZqzNchz1L6' target="_blank">Igreja Adventista do Sétimo Dia Central</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List;