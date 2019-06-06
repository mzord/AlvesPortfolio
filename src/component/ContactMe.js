import React, {useState} from 'react'
import Typist from 'react-typist'
import './Body.scss'
import './ContactMe.scss'

const ContactMe = () => {

    const [command, setCommand] = useState(false)
    const [renderForm, setRenderForm] = useState(false)

    const commandHandler = () => {
        setCommand(true)
    }

    const formHandler = () => {
        setCommand(false)
        setRenderForm(true)
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
            <form>
            <p className="object">Header: {"{"}</p>
            <p className="suboject">Name: <input type="text" />, </p>
            <p className="suboject">Email: <input type="text" />, </p>
            <p className="suboject">Subject: <input type="text" />, </p>
            <p className="suboject-close">{"},"}</p>
            <p className="object">Message: {"{"}</p>
            <p className="suboject"><textarea rows={4} cols={100} placeholder="" /></p>
            <p className="suboject-close">{"}"}</p>
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
                {command ? 
                (<Typist onTypingDone={formHandler} startDelay={500} cursor={{show: false}} avgTypingDelay={300} stdTypingDelay={0} >
                <p className="open">........</p>
                </Typist>) : ("")}
            </div>
            {renderForm ? form : ("")}
        </div>
    )
}

export default ContactMe