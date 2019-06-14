import React, {useState} from 'react'
import Typist from 'react-typist'
import SvgIcon from '@material-ui/core/SvgIcon'
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
                        {"SocialLinks: ["}
                    </p>

                    <p className="suboject">
                        <SvgIcon>
                            <a href="https://www.linkedin.com/in/pedro-alves-73723b113/" target="_blank" rel="noopener noreferrer">
                                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                            </a>
                        </SvgIcon>,
                        <SvgIcon>
                            <a href="https://www.freecodecamp.org/mzord" target="_blank" rel="noopener noreferrer">
                                <path d="M17.55,11.2C17.32,10.9 17.05,10.64 16.79,10.38C16.14,9.78 15.39,9.35 14.76,8.72C13.3,7.26 13,4.85 13.91,3C13,3.23 12.16,3.75 11.46,4.32C8.92,6.4 7.92,10.07 9.12,13.22C9.16,13.32 9.2,13.42 9.2,13.55C9.2,13.77 9.05,13.97 8.85,14.05C8.63,14.15 8.39,14.09 8.21,13.93C8.15,13.88 8.11,13.83 8.06,13.76C6.96,12.33 6.78,10.28 7.53,8.64C5.89,10 5,12.3 5.14,14.47C5.18,14.97 5.24,15.47 5.41,15.97C5.55,16.57 5.81,17.17 6.13,17.7C7.17,19.43 9,20.67 10.97,20.92C13.07,21.19 15.32,20.8 16.93,19.32C18.73,17.66 19.38,15 18.43,12.72L18.3,12.46C18.1,12 17.83,11.59 17.5,11.21L17.55,11.2M14.45,17.5C14.17,17.74 13.72,18 13.37,18.1C12.27,18.5 11.17,17.94 10.5,17.28C11.69,17 12.39,16.12 12.59,15.23C12.76,14.43 12.45,13.77 12.32,13C12.2,12.26 12.22,11.63 12.5,10.94C12.67,11.32 12.87,11.7 13.1,12C13.86,13 15.05,13.44 15.3,14.8C15.34,14.94 15.36,15.08 15.36,15.23C15.39,16.05 15.04,16.95 14.44,17.5H14.45Z" />
                            </a>
                        </SvgIcon>,
                        <SvgIcon>
                            <a href="https://www.facebook.com/profile.php?id=100035371863855" target="_blank" rel="noopener noreferrer">
                                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                            </a>
                        </SvgIcon>
                    </p>
                    <p className="suboject-close">
                        {"]"}
                    </p>
                    
                    <p className="object">
                        {"Certifications: {"}
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