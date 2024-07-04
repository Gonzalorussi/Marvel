/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export const CharactersCard = ({charactersMap})=>{

    const imgUrl = `${charactersMap.thumbnail.path}.${charactersMap.thumbnail.extension}`
   
    return(
        <>
        <li>
            <Link to={`/character/${charactersMap.id}`}>
           <img src={imgUrl} alt={charactersMap.name} />
            <small>{charactersMap.name}</small>
            </Link>
        </li>
        </>
    )
    
}


