import React from 'react'
import ButtonCss from '../../../../public/css/buttonCss.css'

const Button = (props) => {
    return(
        <button type="submit" onClick={props.clic} className={props.bgColor} >{props.children} </button>
    )
}

export default Button