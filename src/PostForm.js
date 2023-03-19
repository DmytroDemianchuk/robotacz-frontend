import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
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
        axios.post('http://localhost:8080/api/people', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {name, phone_number, birth_year} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>

                    {/* input of name */}  
                    <div>
                    <input
                     type="text"
                     name="name"
                     value={name}
                     onChange={this.changeHandler}
                    />
                    </div>

                    {/* input of phone_number */}
                    <div>
                    <input
                     type="text"
                     name="phone_number" 
                     value={phone_number} 
                    onChange={this.changeHandler}/>
                    </div>

                    {/* input of birth_year */}
                    <div>
                    <input
                     type="text"
                     name="birth_year"
                     value={birth_year}  
                     onChange={this.changeHandler}/>
                    </div>

                    {/* button */}
                    <button type="submit">Надіслати</button>
                
                </form>
            </div>
        )
    }
}

export default PostForm