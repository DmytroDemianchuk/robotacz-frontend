import React from 'react'
import "./skills.css";
import Frontend from "./Frontend"
import Backend from "./Backend"

const Skills = () => {
    return (
       <section className="skills section" id ="skills">
            <h2 className="section__title">Requirements for performance of work</h2>
            <span className="section__subtitle">An employee has the right to refuse assigned work if an industrial situation has arisen that is dangerous for his life</span> 

            <div className="skills__required_first">In order to prevent injury and deterioration of workers' health, we organize periodic 
            medical examinations at our own expense for workers engaged in heavy work and work with harmful working conditions; 
            we provide training for workers on labor protection issues; we provide advanced training courses according to working 
            conditions to meet the requirements of the rules; we will provide workers with overalls, special shoes and 
            other certified personal protective equipment.
            </div>
            <div className="skills__required_second">There are also sanitary and household facilities, premises
            for taking food, equipped units with first-aid kits for providing pre-medical assistance,
            rooms for heating and relaxation. There is an opportunity to work after hours.
            </div>
            <div className="skills__container container grid"> 
                <Backend />
                <Frontend />
            </div>
        </section>
    )
}

export default Skills