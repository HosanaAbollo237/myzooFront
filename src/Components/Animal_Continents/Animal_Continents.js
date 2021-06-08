import React, {useEffect, useState} from 'react'
import Button from '../UI/Button/Button'

const Animal_Continents = (props) => {
    const [continents, setContinents] = useState([])

    const areContinentsSet = false;

    /* A refaire car risque de doublons */
    const randomColor = () => {
        const arrayColor = ['red','yellow','blue','green','cyan','darkcyan','darkRed','greenYellow','indianRed','indigo']
        return arrayColor[Math.floor(Math.random() * arrayColor.length)];
    }

    useEffect(() => {
        if(!areContinentsSet)
        {
            setContinents(props.continents)
        }
           
    }, [])

    return (
        <div>
            <h2>Continents</h2>
            {
                props.continents.map(continent => {
                    return <Button key={continent.id} clic={() => console.log(continent.id)}   bgColor={randomColor()}>{continent.libelle}</Button>
                })
            }   
        </div>
    )

}
export default Animal_Continents
