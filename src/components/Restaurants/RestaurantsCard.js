import React from 'react'
import "./RestaurantsCard.css"
import { Link } from 'react-router-dom'
const RestaurantsCard = ({id, resName, cuisine, rating, eta, image}) => {
  return (
    <div className='card'>
        <div className='card-image'> 
            <img src={image} alt={resName}/>
        </div>
        <div className='card-info'>
            <h2>{resName} </h2>
            <p>{cuisine}</p>
            <p>⭐{rating} | {eta}</p>

            {/* LINK  TO VIEW MENU*/}
            <Link to={`/restaurants/${id}`} className='view-menu'> View Menu </Link> 
        </div>
    </div>
  )
};

export default RestaurantsCard;