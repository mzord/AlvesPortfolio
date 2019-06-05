import React, {useState} from 'react'
import Typist from 'react-typist'
import './Body.scss'


const AboutMe = () => {
    const [command, setCommand] = useState(false)

    const commandHandler = () => (
        setCommand(true)
    )

    return (
        <div className="textContent">
            <div className="terminal-header">
            pedro@pedro-desktop:~$ 
            </div>
            <div className="terminal-text">

                <Typist 
                    cursor={{blink: true, element: '_', hideWhenDone:true}}
                    onTypingDone={commandHandler}>
                        ./show_about_me.sh
                </Typist>

                {command ? (
                <Typist startDelay={1000} stdTypingDelay={0} avgTypingDelay={0} cursor={{blink: false, show: false}}>

                    <p className="open">{"{"}</p>
                
                    <p className="object">
                        {"MyName: Pedro Alves,"}
                    </p>
                    
                    
                    <p className="object">
                        {"Nationality: Brazilian,"}
                    </p>
                    
                    
                    <p className="object">
                        {"Skills: ["}
                    </p>
            
                    <p className="array-items">
                        {"Python,"}
                    </p>

                    <p className="array-items">
                        {"Flask,"}
                    </p>

                    <p className="array-items">
                        {"Javascript,"}
                    </p>

                    <p className="array-items">
                        {"React,"}
                    </p>

                    <p className="array-items">
                        {"HTML,"}
                    </p>

                    <p className="array-items">
                        {"CSS,"}
                    </p>

                    <p className="array-close">
                        {"],"}
                    </p>
                    
                    <p className="object">
                        {"Certifications: {"}
                    </p>
                    
                    <p className="suboject">
                        {"Responsive Web Design: FreeCodeCamp.org,"}
                    </p>
                    <p className="suboject">
                        {"Responsive Web Design: FreeCodeCamp.org,"}
                    </p>
                    <p className="suboject-close">{"}"}</p>
                    <p className="close">{"}"}</p>
                </Typist>
                ) : ("")}

            </div>
        </div>
    )
}

export default AboutMe