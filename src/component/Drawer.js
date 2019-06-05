import React from 'react'
import './Drawer.css'

const Drawer = (props) => (
    <div className="drawer">
        {props.children}
    </div>
)

export default Drawer