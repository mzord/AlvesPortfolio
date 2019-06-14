import React from 'react'
import {Link} from 'react-router-dom'
import "./SideMenu.scss"
import MenuButton from './MenuButton'


const SideMenu = () => {

    return (
    <div className="sideMenu">
            <ul id="menuLinks">
                <li>
                    <Link to="/">
                        <MenuButton link="aboutme">
                            About Me
                        </MenuButton>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <MenuButton link="projects">
                            Projects
                        </MenuButton>
                    </Link>
                </li>
                <li>
                    <Link to ="/contact">
                        <MenuButton link="contactme">
                            Contact Me
                        </MenuButton>
                    </Link>
                </li>
            </ul>
    </div>
    )
}

export default SideMenu