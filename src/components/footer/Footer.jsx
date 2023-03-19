import React from "react";
import "./footer.css";
 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Робота в Чехії</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Про нас</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Зворотній св'язок</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Вакансії</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.facebook.com/"
            className="footer__social-link" target="_blank"
            >
                <i class="bx bxl-facebook"></i>
            </a>

            <a href="https://instagram.com/"
            className="footer__social-link" target="_blank">
                 <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://twitter.com/"
            className="footer__social-link" target="_blank">
                <i class="bx bxl-twitter"></i>
            </a>
                </div>

                <span className="footer__coppy">
                    &#169; Робота в Чехії
                </span>
            </div>
        </footer>
    )
}

export default Footer;