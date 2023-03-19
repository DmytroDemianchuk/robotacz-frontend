import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                
                <h3 className="about__title">Досвід</h3>
                <span className="about__subtitle">8 років на ринку</span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">Влаштування</h3>
                <span className="about__subtitle">1000 + людей</span>
            </div>

            <div className="about__box">
                 <i class="bx bx-support about__icon" ></i>

                <h3 className="about__title">Підтримка</h3>
                <span className="about__subtitle">На зв'язку 27/7</span>
            </div>
        </div>
    )
}

export default Info