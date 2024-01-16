import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">We provide</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Timely payment of wages</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Weekly advances as needed</h3>
                        {/* <span className="skills__level">Advanced</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Assistance with the preparation of documents</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Search for jobs that match your skills</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Employment contracts for permanent employment</h3>
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