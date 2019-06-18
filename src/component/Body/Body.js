import React from 'react'
import './Body.scss'

const Body = (props) => (
    <div className="body">
        <div id="window-bar">
            <div id="window-buttons">
                <div id="close"/>
                <div id="maximize"/>
                <div id="minimize"/>
            </div>
            <div id="window-title">
                {props.children.className}
            </div>
            <div id="window-space"/>
        </div>
        <div className="text-field">
        {props.children}
        </div>
    </div>
)


export default Body