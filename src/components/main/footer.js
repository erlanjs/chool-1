import React from 'react';
import logo from "./../../images/logo.png"
import motion from "./../../images/motion.png"
import {media} from "../media";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-general">

                    <div>
                        <img src={logo} alt=""/>
                        <div className="footer-general__contact" style={{paddingTop: media(10, 40)}}>
                            <span><i className="fa-solid fa-phone"/></span>
                            <a href="tel:0778067131">0 (778) 06 71 31</a>
                        </div>
                    </div>
                    <div className="footer-general__center">
                        <a href="https://azhiev_73@mail.ru">azhiev_73@mail.ru</a>
                        {/*<div>*/}
                        {/*    <h1>Developed at</h1>*/}
                        {/*    <img src={motion} alt=""/>*/}
                        {/*    <h1>MOTION WEB LLC</h1>*/}
                        {/*</div>*/}
                    </div>
                    <div className="footer-general__seti">
                        <h1>Соц тармактар</h1>
                        <a href="https://www.instagram.com/daroot.kg/">
                            <span><i className="fab fa-instagram"/></span>
                        </a>
                        <a href="https://t.me/996778067131">
                            <span><i className="fab fa-telegram"/></span>
                        </a>
                    </div>
                </div>

                <div className="footer-general2">
                    <div className="footer-general2__width"/>
                    <div className="footer-general2__gen">
                    <div>
                        <p>Все права защищены - 2022</p>
                    </div>
                    <div className="footer-general2__gen__general">
                        <img src={motion} alt=""/>
                        <a href="https://motion-web.io"><h1>MOTION WEB LLC</h1></a>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;