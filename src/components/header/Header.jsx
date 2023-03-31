import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    // ============ Change Background Header =========
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add ("show-header");
        else header.classList.remove("show-header");
    })
    // ============ Toggle Menu =========
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                {/* На головну */}
                </a>

            <div className={Toggle ? "nav__menu show-menu" :
            "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#holovna"
                        onClick={() => setActiveNav('#holovna')}
                        className={activeNav === "#home" ? "nav__link active-link"
                        : "nav__link"
                            }
                        >
                            <i className="uil uil-estate nav__icon"></i>
                             Головна
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#pro_nas"
                         onClick={() => setActiveNav('#pro_nas')}
                         className={
                            activeNav === "#pro_nas" ? "nav__link active-link"
                         : "nav__link"
                             }
                        >     
                            <i className="uil uil-user nav__icon"></i>
                             Про нас
                        </a>
                    </li>
{/* 
                    <li className="nav__item">
                        <a href="#skills"
                         onClick={() => setActiveNav('#skills')}
                         className={activeNav === "#skills" ? "nav__link active-link"
                         : "nav__link"
                             }
                        >        
                            <i className="uil uil-file-alt nav__icon"></i>
                             Допомога
                        </a>
                    </li> */}

                    {/* <li className="nav__item">
                        <a href="#services"
                         onClick={() => setActiveNav('#services')}
                         className={activeNav === "#services" ? "nav__link active-link"
                         : "nav__link"
                             }
                        >
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                             Вакансії
                        </a>
                    </li> */}

                    {/* <li className="nav__item">
                        <a href="#portfolio"
                         onClick={() => setActiveNav('#portfolio')}
                         className={activeNav === "#portfolio" ? "nav__link active-link"
                         : "nav__link"
                             }
                        >
                            <i className="uil uil-scenery nav__icon"></i>
                             Portfolio
                        </a>
                    </li> */}

                    <li className="nav__item">
                        <a href="#kontakty"
                         onClick={() => setActiveNav('#kontakty')}
                         className={activeNav === "#kontakty" ? "nav__link active-link"
                         : "nav__link"
                             }
                        >
                            <i className="uil uil-message nav__icon"></i>
                            Контакти
                        </a>
                    </li>
                </ul>
                
                {/* Button CLOSE menu on phone */}
                <i class="uil uil-times nav__close" onClick={() => showMenu
                (!Toggle)}></i>
                </div>
            
             {/* Button OPEN menu on phone */}
            <div className="nav__toggle" onClick={() => showMenu
            (!Toggle)}> 
                <i class="uil uil-apps"></i>
            </div>
        </nav>
      </header>
    );
};

export default Header;