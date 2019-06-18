import React, {useState} from 'react'


const SubmitButton = (props) => {
    const [clicked, setClicked] = useState(false)
    const class_name = ["notappear"]
    const clickHandler = () => {
        setClicked(true)
    }
    const appearHandler = () => {
        if (props.appear) {
            class_name.push("show")
        }
    }
    appearHandler()
    return (
    <div>
        {clicked ? <button className={class_name.join(' ')}>Your contact form has been set! Thank you!</button> : <button className={class_name.join(' ')} onClick={clickHandler} type="submit">{props.children}</button>}
    </div>
    )
}

export default SubmitButton