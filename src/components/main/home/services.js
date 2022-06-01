import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="https://azhiev_73@mail.ru"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-envelope"/>azhiev_73@mail.ru</span></a>
                        <a href="https://t.me/996778067131"><span style={{fontSize: media(15, 20)}}><i className="fa-brands fa-telegram"/> 0778 06 71 31</span></a>
                        <a href="tel:0(552) 615 519"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-phone"/> 0778 06 71 31</span></a>
                        <a href="#"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-location-dot"/> Кыргыз Республикасы, Ош облусу,
                            <br/>Чоң-Алай  району, Кызыл-Эшме айылы,<br/>Сулайманов Чолпонбай көчөсү 72</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12956.978392942652!2d72.26117880642191!3d39.56217544560513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bec0938d93cee3%3A0xb67c6a1e9b0d69df!2sKyzyleshme!5e0!3m2!1sru!2skg!4v1654026245064!5m2!1sru!2skg"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;