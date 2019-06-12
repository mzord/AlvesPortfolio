import React from 'react'
import './Header.scss'

const getMyAge = () => {
    var date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let age = year - 1992 - 1
    if (month === 12 && day >= 2) {
        age += 1
    }
    return age
}

const Header = (props) => (
    <div className="header">
        <div className="headerBackground" >
            <div className="myInfo">
                <ul>
                    <li><code>Name: <b id="myName">Pedro Alves</b></code></li>
                    <li><code>Age: {getMyAge()} </code></li>
                    <li><code>Nationality: Brazilian</code></li>
                </ul>
            </div>
            <div className="title">
                <h1>Full-Stack Web Developer</h1>
            </div>
        </div>
        <div className="image">
            <img align="middle" alt="Pedro Alves face" src={require("../images/download.png")} />
        </div>
    </div>
)

export default Header