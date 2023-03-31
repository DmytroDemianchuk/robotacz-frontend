import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Ми обіцяємо:</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Своєчасні виплати заробітної плати</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Щотижневі аванси в разі потреби</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Допомога з оформеленям документів</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Пошук роботи відповідно до ваших навичок</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Трудові договори на постійну роботу</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
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