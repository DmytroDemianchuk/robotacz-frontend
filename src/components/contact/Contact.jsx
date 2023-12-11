// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import React, { Component } from 'react'
import axios from 'axios'
import "./contact.css"

// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('service_bduv1jh', 'template_fag0q82', form.current, 'mDu6K0k8mpo7nujkF')
//       e.target.reset()
//     };

    // return (
        class Contact extends Component {
            constructor(props) {
                super(props)
        
                this.state = {
                    name: "",
                    phone_number: '',
                    birth_year: ''
                }
            }
        
            changeHandler = (e) => {
                this.setState({[e.target.name]: e.target.value})
            }
        
            submitHandler = e => {
                e.preventDefault()
                console.log(this.state)
                axios.post('http://207.154.193.114:80/api/people', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            }
            
        render() {
            const {name, phone_number, birth_year} = this.state

            // .then(
            //     (result) => {
            //         console.log(result.text);
            //     },
            //     (error) => {
            //         console.log(error.text)
            //     }
            // )
            
            return (

                //  is not yet FormList
        <section className="contact section" id="kontakty">
            <h2 className="section__title">Let's be in touch!</h2>
            <span className="section__subtitle">contacts</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__instagram">Social media</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data"></span>

                        <a href="https://www.instagram.com/robota.ua_cz/?igshid=YmMyMTA2M2Y%3D" className="contact__button">
                            View page{""}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp/Viber/Telegram</h3>
                        <span className="contact__card-data"></span>

                        

                        <a className="contact__button">
                        (+xxx)xxxxxxxxx</a>
                        <a className="contact__button">
                        (+xxx)xxxxxxxxx</a>
                        <a className="contact__button">
                        (+xxx)xxxxxxxxx</a>

                        {/* <i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>

                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data"></span>

                        <a href="https://www.facebook.com/profile.php?id=100091492989540"
                        className="contact__button">
                            View page{""}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

{/* /PostForm */}
                <div className="contact__content">
                    <h3 className="contact__instagram">Fill out the application</h3>

                    <form onSubmit={this.submitHandler}
                    className="contact__form">

                        {/* input of name */}
                        <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                        type="text" 
                        name="name"
                        minLength={3}
                        maxLength={20}
                        value={name}
                        onChange={this.changeHandler}
                        className="contact__form-input" 
                        placeholder="Input your name"
                        />
                        </div>

                        {/* input of phone_number */}
                        <div className="contact__form-div">
                        <label className="contact__form-tag">Phone number</label>
                        <input 
                        type="text" 
                        name="phone_number"
                        maxLength={13}
                        minLength={9}
                        pattern="[0-9]*"
                        value={phone_number}
                        onChange={this.changeHandler}
                        className="contact__form-input" 
                        placeholder="Input your phone number"
                        />
                        </div>

                        {/* input of birth_year */}
                        <div className="contact__form-div">
                        <label className="contact__form-tag">Date of birht</label>
                        <input 
                        type="text" 
                        name="birth_year" 
                        minLength={4}
                        maxLength={4}
                        pattern="[0-9]*"
                        value={birth_year}
                        onChange={this.changeHandler}
                        className="contact__form-input" 
                        placeholder="Input your date of birht"
                        />
                        </div>

                        {/* input of nationality */}
                        {/* <div className="contact__form-div">
                        <label className="contact__form-tag">Національність</label>
                        <input type="text" name="name" 
                        className="contact__form-input" 
                        placeholder="Введіть свою національність"/>
                        </div> */}

                        {/* <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name="email" 
                        className="contact__form-input" 
                        placeholder='Insert you email'/>
                        </div> */}

                        {/* <div className="contact__form-div contact__form-area"> */}
                        {/* <label className="contact__form-tag">Project</label>
                        <textarea name="project" 
                        cols="30" 
                        rows="10"
                        className="contact__form-input" 
                        placeholder="Write your project">
                        </textarea> */}
                    {/* </div> */}
                    
                    <button type="submit" 
                    className="contact__application">
                     Send a message</button>
 
                    

                </form>
                </div>
            </div>
        </section>
            )
        }
     }

// }

export default Contact