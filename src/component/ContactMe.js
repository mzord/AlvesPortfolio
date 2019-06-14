import React from 'react'
import Typist from 'react-typist'
import SubmitButton from './SubmitButton'
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
            submitappear: false,
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
        this.setState({
            sent: true
        })
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
        // eslint-disable-next-line
        const contact = await fetch("https://portpage-api.herokuapp.com/contact", contact_options)
        }    

    render() {

    const commandHandler = () => {
        this.setState({command: true})
    }

    const formHandler = () => {
        this.setState({command: false, renderForm: true})
    }
    
    const submitAppear = () => {
        this.setState({
            submitappear: true
        })
    }
    
    const form = 
        <div>
            <Typist onTypingDone={submitAppear} stdTypingDelay={0} avgTypingDelay={0} cursor={{show: false}}>
                <p className="open">Your Name:</p>
                <input onChange={this.handleNameChange} type="text"/>
                <p className="open">Your Email:</p>
                <input onChange={this.handleEmailChange} type="text"/>
                <p className="open">Message:</p>
            </Typist>
            <textarea onChange={this.handleMessageChange} name="message" defaultValue="" />
            <SubmitButton onClick={this.handleSubmit} appear={this.state.submitappear}>Submit</SubmitButton>
        </div>
    
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
            {this.state.renderForm ? 
            <form onSubmit={this.handleSubmit}>
                {form}
            </form> : ""}
            
        </div>
    )
}
}

export default ContactMe