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
                axios.post('http://207.154.193.114/api/people', this.state)
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
        <section className="contact section" id="contact">
            <h2 className="section__title">Будьмо на зв'язку !</h2>
            <span className="section__subtitle">Наші контакти</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Наші дані</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Gmail</h3>
                        <span className="contact__card-data"></span>

                        <a href="dwad" className="contact__button">
                            Надіслати смс{""}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">(+380)980129590</span>

                        {/* <a href="hhtps/wahtspa more photo" className="contact__button">
                        Перейти за посиланням{""}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>

                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data"></span>

                        <a href="https://"
                        className="contact__button">
                            Перейти за посиланням{""}
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

{/* /PostForm */}
                <div className="contact__content">
                    <h3 className="contact__title">Заповнити свої дані</h3>

                    <form onSubmit={this.submitHandler}
                    className="contact__form">

                        {/* input of name */}
                        <div className="contact__form-div">
                        <label className="contact__form-tag">Ім'я</label>
                        <input 
                        type="text" 
                        name="name"
                        minLength={3}
                        maxLength={20}
                        value={name}
                        onChange={this.changeHandler}
                        className="contact__form-input" 
                        placeholder="Введіть своє ім'я"
                        />
                        </div>

                        {/* input of phone_number */}
                        <div className="contact__form-div">
                        <label className="contact__form-tag">Номер телефону</label>
                        <input 
                        type="text" 
                        name="phone_number"
                        maxLength={13}
                        minLength={9}
                        value={phone_number}
                        onChange={this.changeHandler}
                        className="contact__form-input" 
                        placeholder="Введіть свій номер телефону"
                        />
                        </div>

                        {/* input of birth_year */}
                        <div className="contact__form-div">
                        <label className="contact__form-tag">Рік народженя</label>
                        <input 
                        type="text" 
                        name="birth_year" 
                        minLength={4}
                        maxLength={4}
                        pattern="[0-9]*"
                        value={birth_year}
                        onChange={this.changeHandler}
                        className="contact__form-input" 
                        placeholder="Введіть свій рік народження"
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
                     Залишити заяву</button>
 
                    

                </form>
                </div>
            </div>
        </section>
            )
        }
     }

// }

export default Contact