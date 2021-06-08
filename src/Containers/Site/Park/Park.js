import React, {useState, useEffect} from 'react';
import TitleH1 from '../../../Components/UI/TitleH1/TitleH1'
import Animal from '../../../Components/Animal/Animal'
import ParkCss from '../../../../public/css/ParkCss.css'

import cochon from '../../../../public/assets/animals/cochon.png'
import requin from '../../../../public/assets/animals/requin.png'
import serpent from '../../../../public/assets/animals/serpent.png'
import chien from '../../../../public/assets/animals/chien.png'
import crocodile from '../../../../public/assets/animals/crocodile.png'


const Park = () => {
    const [data, setData] = useState([])
    let isDataSet = false;

    

    const handleError = (res) => {
        if(!res.ok){
            throw Error('response non OK')
        }
        return res.json()
    }
    
    
    const findImg = (propAnimalName) => {  
        const animalImgs = {requin,cochon,serpent,chien,crocodile}
        const arrNomAnimal = Object.keys(animalImgs)
        let idxAnimal = arrNomAnimal.findIndex(nomAnimal => nomAnimal === propAnimalName)
        if(idxAnimal >= 0){
            return animalImgs[propAnimalName]
        }
        console.log(propAnimalName + 'non trouvé')
    }


    useEffect(() => {
        findImg()
        if(!isDataSet){       
                fetch('http://localhost:80/myzoo/front/animals')
                .then(handleError)   
                .then(d => setData(Object.values(d)))
                isDataSet = true
        }
    },[]) 

    const handleSelectionFamille = (libelleFamille) => {
        console.log(libelleFamille)
    }

    const handleSelectionContient = (idContinent) => {
        console.log(idContinent)
    }
    return(
        <>
            <TitleH1>Page du park</TitleH1>
            <div>Page listant les animaux</div>
            <div className="AnimalWrapper">
            {
                data && data.map(animal => 
                <Animal
                    key={animal.id}
                    id={animal.id}
                    nom={animal.nom}
                    description={animal.description}
                    famille={animal.famille.libelle}
                    familleDescription={animal.famille.description}
                    continents={animal.continents}
                    imgSrc={findImg(animal.nom)}
                    filtrefamille={handleSelectionFamille}
                    filtreContinent={handleSelectionContient}
                />)
            }
            </div>

        </>
    )
}

export default Park