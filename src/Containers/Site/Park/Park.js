import React, {useState, useEffect, useRef} from 'react';
import TitleH1 from '../../../Components/UI/TitleH1/TitleH1'
import Animal from '../../../Components/Animal/Animal'
import ParkCss from '../../../../public/css/ParkCss.css'
import Button from '../../../Components/UI/Button/Button'
import cochon from '../../../../public/assets/animals/cochon.png'
import requin from '../../../../public/assets/animals/requin.png'
import serpent from '../../../../public/assets/animals/serpent.png'
import chien from '../../../../public/assets/animals/chien.png'
import crocodile from '../../../../public/assets/animals/crocodile.png'


const Park = () => {
    const [data, setData] = useState([]);
    const [filtreFamille, setFamille] = useState(null);
    const [filtreContinent, setContinent] = useState(null);
    let isDataSet = false;

    const prevData = useRef();

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

    const loadData = () => {
        if(!isDataSet){      
            fetch(`http://localhost:80/myzoo/front/animals/`)
            .then(handleError)   
            .then(d => setData(Object.values(d)))
            isDataSet = true
        }   
    }

    const filtreFunc = () => {
        const famille = filtreFamille ? filtreFamille : "-1";
        const continent = filtreContinent ? filtreContinent : "-1";  
        fetch(`http://localhost:80/myzoo/front/animals/${famille}/${continent}/`)
        .then(handleError)   
        .then(d => setData(Object.values(d)))
    }

    useEffect(() => {
        loadData() 
        findImg()
    },[]) 


    
    const handleSelectionFamille = (idFamille) => { 
        setFamille(idFamille)
        filtreFunc()
    }

    const handleSelectionContient = (idContinent) => {
        setContinent(idContinent)
        filtreFunc()

    }

    const handleResetFiltreFamille = () => {
        setFamille(null)
    }
    const handleResetFiltreContinent = () => {
        setContinent(null)
    }
    return(
        <>
            <TitleH1>Page du park</TitleH1>
            {
                (filtreFamille || filtreContinent) && <span>Filtre : </span>
            }
            {filtreFamille && <Button clic={handleResetFiltreFamille}>{filtreFamille}</Button>}
            {filtreContinent && <Button clic={handleResetFiltreContinent}>{filtreContinent}</Button>}

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
                    familleId={animal.famille.idFamily}
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