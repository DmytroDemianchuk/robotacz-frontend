import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="pro_nas">
            <h2 className="section__title">About us</h2>
            <span className="section__subtitle">
            In 2008, we decided to create an agency in which we used our many years of experience and skills acquired in the field of employment.<p></p>
                    The scope of our work is to provide work in the Czech Republic on a permanent basis.
            </span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    
                    <p className="about__description">
                    Our intensive and successful work is reflected in excellent results. 
                    We boast a large number of employed workers, 4,000 of whom are permanently employed and over 1,000 self-employed.
                    </p>
            </div>
            </div>
            <div className="about__opis_first">The head office is located in a modern building in the city of Brno. 
            A professional approach to accounting, human resources and logistics is provided by a professional team that has been working with us for over fifteen years. 
            Close cooperation with a large number of Czech construction companies allows us to provide people with jobs throughout the Czech Republic.</div>
            
            <div className="about__opis_second">Our services are quite diverse - from the design and 
            preparation of the necessary technical documentation to the direct construction of the building and
            laying of all internal systems, i.e. turnkey construction of the facility.<p></p>
            We use the most modern technologies and approach to work, we bear full responsibility for the realization of the object 
            within the established terms. That is why working with us is so profitable and convenient!
            </div>

            <div className="about__opis_second">We have big plans for the future, our vision is to expand our services to Slovakia and Hungary. 
            It is our honor and pleasure to constantly improve and improve our services for the satisfaction of our customers.</div>
        </section>
        
    )
}

export default About