import axios from "axios";
import React, {useEffect, useState} from 'react';
import NameElement from "./Name.js";
import BirthyearElement from "./BirthYear.js"
import HeightElement from "./Height.js";
import MassElement from "./Mass.js"
import EyecolorElement from "./Eyecolor.js"





function CardContent() {
    const [starwars, setStarwars] = useState([]);
    useEffect(() => {
        axios.get("https://swapi.co/api/people")
        .then(returning => {    
            console.log(returning)        
            setStarwars(returning.data.results)         
          
              
        })               
                                 
        .catch(error => {
        console.log("Down", error)
        })
    },[])
    return (
        <div>
            {starwars.map(character => {
                return <div>                    
                    <NameElement name={character.name}/>
                    <BirthyearElement birthyear={character.birth_year}/>                    
                    <HeightElement height={character.height}/>
                    <MassElement mass ={character.mass}/>
                    <EyecolorElement eyecolor={character.eye_color}/>
                </div>
            })}
           
            
        </div> 
    )
}

export default CardContent