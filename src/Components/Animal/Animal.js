import React from 'react'
import AnimalCss from '../../../public/css/AnimalCss.css'
import Animal_Continents from '../Animal_Continents/Animal_Continents'
import Button from '../UI/Button/Button'

const Animal = (props) => {

    const randomColor = () => {
        const arrayColor = ['red','yellow','blue','green','cyan','darkcyan','darkRed','greenYellow','indianRed','indigo']
        return arrayColor[Math.floor(Math.random() * arrayColor.length)];
    }

    
    return (
        <div className='animals'>   
                    <h2>{props.id} - {props.nom}</h2>
                    <p>{props.description}</p>
                    <img src={props.imgSrc} alt="Image de l'animal" />
                    <h3>Famille : <Button clic={() => props.filtrefamille(props.famille)}>{props.famille}</Button></h3>
                    <p>{props.familleDescription}</p>
                    {
                        props.continents.map(continent => {
                            return <Button key={continent.id} clic={() => props.filtreContinent(continent.id)}   bgColor={randomColor()}>{continent.libelle}</Button>
                        })
                    }

        </div>
    )
}

export default Animal
/*

*/