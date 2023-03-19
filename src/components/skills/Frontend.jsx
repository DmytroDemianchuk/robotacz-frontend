import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Ми надаємо</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Житло</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Гідну заробітню плату</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Допоможемо з оформеленям документів</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    {/* <i class='bx bx-badge-check'></i> */}
                    <div>
                        {/* <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level">Interdemiate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    {/* <i class='bx bx-badge-check'></i> */}

                    <div>
                        {/* <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    {/* <i class='bx bx-badge-check'></i> */}
                    <div>
                        {/* <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                </div>
            </div>    
        </div>
    );
};

export default Frontend;