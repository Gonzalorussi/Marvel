import {CharactersCard} from "./CharactersCard"
import {getUrl} from "../utils/APIconnection"
import { useState,useEffect } from "react"

export const CharactersGrid=()=>{


    const[characters, setCharacters]=useState([])
    

    useEffect(()=>{
        getUrl("/v1/public/characters").then((data)=>{
            
            setCharacters(data.data.results)
        })
    },[])
    return (
        <div className="container-fluid my-3">
            <div className="row d-flex justify-content-center">
                {characters.map((character)=>(
                    <CharactersCard key={character.etag} charactersMap={character}/>
                ))}
            </div>
        </div>
    )
}
