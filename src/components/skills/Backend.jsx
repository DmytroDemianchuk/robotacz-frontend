import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Ми вимагаємо:</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Дбати про безпеку</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Правильно використовувати інструменти та інші засоби праці</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Правильно використовувати засоби індивідуального захисту</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Негайно повідомляти про будь-яку виробничу ситуацію</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Дотримуватися вимог нормативно-правових актів</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    {/* <i class='bx bx-badge-check'></i> */}
                    <div>
                        {/* <h3 className="skills__name">Ruby</h3>
                        <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>
                    
                </div>
            </div>    
        </div>
    );
};

export default Backend;