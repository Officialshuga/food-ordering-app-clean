import React from 'react'
import "./Error.css"
import { Link } from 'react-router-dom'
import errorImage from "../../public/images/404-error.png"
const Error = () => {
  return (
    <div className='error-container'>
        <div className='error-content'> 
            <h1>404</h1>
            <h2>OOPS!!! PAGE NOT FOUND</h2>
            <p> The page your're Looking for Wasn't created </p>
            <Link to="/" className="home-button"> Go Back Home </Link>
        </div>
        <div className='error-image'> 
            <img  src={errorImage} alt='404 error'/>
        </div>
    </div>
  )
}

export default Error