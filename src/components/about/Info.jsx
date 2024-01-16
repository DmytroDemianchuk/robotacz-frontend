import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">15 years on the market</span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">Arrangement</h3>
                <span className="about__subtitle">10000+ workers</span>
            </div>

            <div className="about__box">
                 <i class="bx bx-support about__icon" ></i>

                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">On call 24/7</span>
            </div>
        </div>
    )
}

export default Info