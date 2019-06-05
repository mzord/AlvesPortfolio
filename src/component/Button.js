import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Button.scss'
import { constants } from 'os';

const Button = (props) => {
    const [clicked, setClicked] = useState(false)
     
    return (
        <Link to={props.link}>{props.name}</Link>
    )
}

export default Button