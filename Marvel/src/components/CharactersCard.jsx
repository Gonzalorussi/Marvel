/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

export const CharactersCard = ({charactersMap})=>{

    const imgUrl = `${charactersMap.thumbnail.path}.${charactersMap.thumbnail.extension}`
   
    return(
        <>
            <div className="col mb-3">
                <Link to={`/character/${charactersMap.id}`} className="my-efect-card card text-bg-dark mx-auto" style={{width: '18rem'}}>
                    <img src={imgUrl} className="card-img" alt={charactersMap.name}/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">{charactersMap.name}</h5>
                    </div>
                </Link>
            </div>
        </>
    )
    
}


