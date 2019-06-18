import React from 'react'
import {Link} from 'react-router-dom'
import "./SideMenu.scss"
import MenuButton from '../MenuButton/MenuButton'


const SideMenu = () => {

    return (
    <div className="sideMenu">
            <ul id="menuLinks">
                <li>
                    <Link to="/AlvesPortfolio">
                        <MenuButton link="aboutme">
                            About Me
                        </MenuButton>
                    </Link>
                </li>
                <li>
                    <Link to="/AlvesPortfolio/projects">
                        <MenuButton link="projects">
                            Projects
                        </MenuButton>
                    </Link>
                </li>
                <li>
                    <Link to ="/AlvesPortfolio/contact">
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