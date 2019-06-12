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
            subject: '',
            message: ''
        }
    }
    
    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    }

    handleSubjectChange = (event) => {
        this.setState({subject: event.target.value})
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
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
                <input onChange={this.handleNameChange} type="text" />, 
            </p>

            <p className="suboject">Email: 
                <input onChange={this.handleEmailChange} type="text" />, 
            </p>

            <p className="suboject">Subject: 
                <input onChange={this.handleSubjectChange} type="text" />, 
            </p>

            <p className="suboject-close">{"},"}</p>

            <p className="object">Message: {"{"}</p>

            <p className="suboject">
                <textarea onChange={this.handleMessageChange} placeholder="" />
            </p>

            <p className="suboject-close">{"},"}</p>

            <p className="object">
                <button onClick={this.handleSubmit} type="button">Send</button>
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