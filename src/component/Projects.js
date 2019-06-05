import React, {useState} from 'react'
import Typist from 'react-typist'

const Projects = () => {

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
                        ./show_my_projects.sh 
                </Typist>

                {command ? (
                <Typist startDelay={1000} stdTypingDelay={0} avgTypingDelay={1} cursor={{blink: false, show: false}}>

                <p className="open">{"{"}</p>

                <p className="object">
                    {"Tribute Page: Codepen.io,"}
                </p>

                <p className="object">
                    {"Infraconex: infraconex.herokuapp.com"}
                </p>

                <p className="object">
                    {"Tribute Page: Codepen.io,"}
                </p>

                <p className="close">
                    {"}"}
                </p>
                </Typist>) : ("")}
                
            </div>
        </div>
            

    )
}

export default Projects