import React from 'react'
import axios from 'axios'

const GetApiData = () => {

    React.useEffect(() => {
        fetch('api/animals')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
}

export default GetApiData