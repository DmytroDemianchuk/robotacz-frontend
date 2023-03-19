import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">Про нас</h2>
            <span className="section__subtitle">
            Ми компанія яка займається працевлатуванням людей в чехії
            </span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    
                    <p className="about__description ">
                        Ми компанія яка займається працевлатуванням людей в чехії.
                        Підберемо роботу під вашу аквансію,
                        дамо житло та допоможемо з документами. 
                    </p>
            </div>
            </div>
        </section>
    )
}

export default About