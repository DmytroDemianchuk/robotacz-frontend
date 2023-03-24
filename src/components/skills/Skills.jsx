import React from 'react'
import "./skills.css";
import Frontend from "./Frontend"
import Backend from "./Backend"

const Skills = () => {
    return (
       <section className="skills section" id ="skills">
            <h2 className="section__title">Допомога</h2>
            <span className="section__subtitle">З нашою допомогою наші партнери забезпечують<br></br> безпечне перебування для гостей та господарів у місці проживання.</span> 

            <div className="skills__container container grid"> 
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills