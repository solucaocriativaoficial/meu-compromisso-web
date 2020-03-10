import React from 'react';
import iconLocation from '../../assets/icon-location.png';
import iconHours from '../../assets/icon-hours.png';
import iconCalendar from '../../assets/icon-calendar.png';

function Footer(){
    return(
        <div className="box-info-event">
            <h1>INFORMAÇÕES</h1>
            <div className="info-event">
                <div className="info-especific">
                    <div className="label-info">
                        <img src={iconCalendar} alt=""/>
                        Data
                    </div>
                    <span className="data">29/03/2020</span>
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
            <div className="certificado">
                Certificado oferecido pela MISOM
            </div>
        </div>
    )
}

export default Footer;