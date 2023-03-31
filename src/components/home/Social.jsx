import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/"
            className="home__social-icon" target="_blank">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://dribbble.com/"
            className="home__social-icon" target="_blank">
                 <i class="bx bxl-twitter"></i>
            </a>

            <a href="https://github.com/" 
            className="home__social-icon" target="_blank">
                <i class="bx bxl-facebook"></i>
            </a>
        </div>
    );
};

export default Social