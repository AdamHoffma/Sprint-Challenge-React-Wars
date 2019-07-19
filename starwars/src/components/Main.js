import axios from "axios";
import React, {useEffect, useState} from 'react';
import NameElement from "./Name.js";
import BirthyearElement from "./BirthYear.js"
import HomeElement from "./Homeworld.js";
import HeightElement from "./Height.js";
import MassElement from "./Mass.js"
import EyecolorElement from "./Eyecolor.js"




function CardContent() {
    const [starwars, setStarwars] = useState([]);
    useEffect(() => {
        axios.get("https://swapi.co/api/people")
        .then(returning => {
            
            setStarwars(returning.data.results)            
            console.log(returning)
            
        })
        .catch(error => {
            console.log("Down", error)
        })
    },[])
    return (
        <div>
            <NameElement name ={starwars.name}/>
            <BirthyearElement/>
            <HomeElement/>
            <HeightElement/>
            <MassElement/>
            <EyecolorElement/>
        </div> 
    )
}

export default CardContent