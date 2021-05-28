import React from 'react'
import titleCss from '../../../../public/css/titleCss.css'

const TitleH1 = (props) => {

    return(
        <h1 className={['title', props.bgColor ? props.bgColor : "normal"].join(' ')} >{props.children}</h1>
    )
}
export default TitleH1