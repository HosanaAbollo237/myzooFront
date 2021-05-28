import React, {useState, useEffect} from 'react';
import TitleH1 from '../../../Components/UI/TitleH1/TitleH1'

const Park = () => {
    const [data, setData] = useState([])
    let isDataSet = false;


    const handleError = (res) => {
        if(!res.ok){
            throw Error('response non OK')
        }
        return res.json()
    }

    useEffect(() => {
        if(!isDataSet){       
                fetch('http://localhost:80/myzoo/front/animals')
                .then(handleError)   
                .then(d => setData(Object.values(d)))
                isDataSet = true
        }
    },[]) 

    return(
        <>
            <TitleH1>Page du park</TitleH1>
            <div>Page listant les animaux</div>
            {
                data && data.map(animal => {

                    return <h1>{animal.id} - {animal.nom}</h1>
                })
            }

        </>
    )
}

export default Park