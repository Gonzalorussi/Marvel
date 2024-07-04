/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export const CharactersCard = ({charactersMap})=>{

    const imgUrl = `${charactersMap.thumbnail.path}.${charactersMap.thumbnail.extension}`
   
    return(
        <>
            <div className="col d-flex mb-3">
                <Link to={`/character/${charactersMap.id}`} className="card text-bg-dark" style={{width: '18rem'}}>
                    <img src={imgUrl} className="card-img" alt={charactersMap.name}/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">{charactersMap.name}</h5>
                    </div>
                </Link>
            </div>
        </>
    )
    
}


