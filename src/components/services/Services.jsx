import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
       <section className="services section" id="services">
             <h2 className="section__title">Vacancies</h2>
            <span className="section__subtitle">Staff motivation is the creation of favorable conditions and<br></br> incentives that encourage employees 
            to work with greater dedication, with a focus on quality and results.</span> 

            <div className="services__container container grid">

                <div className="services__content">
                    <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">ЕнергоАква</h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(1)}>
                    Дізнатись більше
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">Whereas in a CMYK color space,
                             it is composed of 0% cyan, 0% magenta, 0% yellow and 49.8% black.
                             It has a hue angle of 0 degrees, a saturation of 0% and a lightness.</p>

                             <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>

                             </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content"> 
                    <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Мобік</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">
                    Дізнатись більше
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Ui/Ux  Designer</h3>
                            <p className="services__modal-description">Whereas in a CMYK color space,
                             it is composed of 0% cyan, 0% magenta, 0% yellow and 49.8% black.
                             It has a hue angle of 0 degrees, a saturation of 0% and a lightness.</p>

                             <ul className="services__modal-services grid">

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>

                             </ul>
                        </div>
                    </div>
                </div>
                
                <div className="services__content">
                    <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Гумарня</h3>
                    </div>

                    <span className="services__button" onClick={() =>
                    toggleTab(3)}>
                    Дізнатись більше
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">Whereas in a CMYK color space,
                             it is composed of 0% cyan, 0% magenta, 0% yellow and 49.8% black.
                             It has a hue angle of 0 degrees, a saturation of 0% and a lightness.</p>

                             <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        I position your company brand.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                </li>

                             </ul>
                        </div>
                    </div>
                </div>

            </div>
       </section>
    );
};

export default Services