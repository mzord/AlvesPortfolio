import React from 'react'
import Typist from 'react-typist'
import './Body.scss'
import './ContactMe.scss'

class ContactMe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            command: false,
            renderForm: false,
            name: '',
            email: '',
            message: '',
            sent: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    
    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault()
        const user = {"username": process.env.REACT_APP_USER, "password": process.env.REACT_APP_PASS}
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin':'*'
            },
            mode: "cors",
            body: JSON.stringify({
                "username": user.username,
                "password": user.password
            }),
        }
        const auth = await fetch("https://portpage-api.herokuapp.com/auth", options)
        const auth_response = await auth.json()
        const token = await auth_response.access_token
        console.log(token)
        const contact_options = {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin':'*',
                "Content-Type": "application/json",
                "Authorization": "JWT " + token
            },
            mode: "cors",
            body: JSON.stringify({"name": this.state.name, "email": this.state.email, "message": this.state.message})
        }
        const contact = await fetch("https://portpage-api.herokuapp.com/contact", contact_options)
        console.log(contact)
        }    

    render() {

    const commandHandler = () => {
        this.setState({command: true})
    }

    const formHandler = () => {
        this.setState({command: false, renderForm: true})
    }
    const form =
        <Typist 
            stdTypingDelay={0} 
            avgTypingDelay={0}
            cursor={{
                show: false
            }} >
        <div>
            <p className="open">{"{"}</p>
            <form onSubmit={this.handleSubmit}>
                <p className="object">Header: {"{"}</p>

                <p className="suboject">Name: 
                    <input onChange={this.handleNameChange} name="name" type="text" />, 
                </p>

                <p className="suboject">Email: 
                    <input onChange={this.handleEmailChange} name="email" type="text" />, 
                </p>

                <p className="suboject-close">{"},"}</p>

                <p className="object">Message: {"{"}</p>

                <p className="suboject">
                    <textarea onChange={this.handleMessageChange} name="message" placeholder="" />
                </p>

                <p className="suboject-close">{"},"}</p>

                <p className="object">
                    <button type="submit">Send</button>
                </p>

                <p className="close">{"}"}</p>
            </form>
        </div>
        </Typist>

    return (
        <div className="textContent">
            <div className="terminal-header">
                pedro@pedro-desktop:~$ 
            </div>
            <div className="terminal-text">
                <Typist cursor={{blink: true, element: '_', hideWhenDone:true}}
                    onTypingDone={commandHandler}>./render-contact-form.py
                </Typist>
                {this.state.command ? 
                (<Typist onTypingDone={formHandler} startDelay={500} cursor={{show: false}} avgTypingDelay={300} stdTypingDelay={0} >
                <p className="open">.....</p>
                </Typist>) : ("")}
            </div>
            {this.state.renderForm ? form : ("")}
        </div>
    )
}
}

export default ContactMe