import React from 'react'
import { useLocation } from 'react-router-dom'
import TitleH1 from '../UI/TitleH1/TitleH1'

const Error = (props) => {
    let location = useLocation()

    return(
        <>
            <TitleH1 bgColor="red">Page not found</TitleH1>
            <div> Page not found for <code>{location.pathname}</code>  </div>

        </>
    )
}
export default Error